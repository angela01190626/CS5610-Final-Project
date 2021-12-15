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
            </div>
        )
    }

    renderCartTable() {
        const {products} = this.props;

        return (
            <>
                {
                    (products && products.length > 0) && (

                        products.map((item, index) => (
                            this.renderItem(item, index)
                        )))
                }
            </>
        );
    }


    render() {
        return (

            this.renderCartTable()


        );
    }
}


export default CartTable;