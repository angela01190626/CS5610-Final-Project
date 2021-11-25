
import React, {Component} from 'react';

class CartTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCost: 10.78,
            numItems: 24,
            cart: props.cart
        }
    }


    removeItem(item) {
        const {onRemoveClick} = this.props;
        onRemoveClick(item);
    }

    addItem(item) {
        const {onAddClick} = this.props;
        onAddClick(item);
    }

    renderItem(item, index) {
        const itemCost = parseInt(item.cost.replace(/,/g, ''));
        return (
            <div className="cart-tem-section-root" key={index}>
                <div className="cart-product-image-container">
                    <img src={item.prodImg} className="cart-prod-image" alt="product"/>
                </div>
                <div className="product-description">
                    <div className="product-description-brand">
                        {item.brandName}
                    </div>
                    <div className="product-description-item">
                        {item.name}
                    </div>
                </div>
                <div className="product-quantity-price">
                    <div className="prod-quantity">
                        <div className="prod-quantity-component-container">
                            <i className="fas fa-minus-circle" onClick={() => this.removeItem(item)}></i>
                            <div className="added-quantity">{item.quantity}</div>
                            <i className="fas fa-plus-circle" onClick={() => this.addItem(item)}></i>
                        </div>
                    </div>
                    <div className="prod-price">$ {(itemCost * item.quantity).toFixed(2)}</div>
                </div>
                <div className="product-remove">
                    <i className="far fa-trash-alt cart-item-remove-icon"></i>
                </div>
            </div>
        )
    }

    renderCartTable() {
        const {products} = this.props;
        // const { cartCost, numItems } = this.state;
        const totalCost = this.calculateCartTotal().toFixed(2);
        const numItems = this.calculateNumItems();
        return (
            <div className="non-empty-cart-container">
                <div className="cart-header">
                    Cart: ${totalCost} ({numItems} Items)
                </div>
                {
                    (products && products.length > 0) && (

                    products.map((item, index) => (
                        this.renderItem(item, index)
                    )))
                }
            </div>
        );
    }

    calculateCartTotal() {
        const  {products} = this.props;
        if(products && products.length > 0) {
            let totalValue = products.reduce((acc, curr) => {
                const itemCost = parseInt(curr.cost.replace(/,/g, ''));
                return acc + (itemCost * curr.quantity)
            }, 0)
            return totalValue;
        }
        return 0;
    }

    calculateNumItems() {
        const {products} = this.props;
        if(products && products.length > 0) {
            let num = products.reduce((acc, curr) => {
                return acc + curr.quantity
            }, 0)
            return num;
        }
        return 0;
    }

    calculateTax(cartValue) {
        return cartValue * 0.05;
    }



    render() {
        return (

            this.renderCartTable()


        );
    }
}


export default CartTable;