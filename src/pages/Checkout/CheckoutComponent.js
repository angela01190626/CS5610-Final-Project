import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CartTable from "../../components/Cart/CartTable";
import {CardElement} from "@stripe/react-stripe-js";

class CheckoutComponent extends Component {

    removeItem(item) {
        const {removeItemFromCart} = this.props;
        removeItemFromCart({...item, quantity: item.quantity});
    }

    addItem(item) {
        const {addItemToCart} = this.props;
        addItemToCart({...item, quantity: item.quantity});
    }

    handleSubmit = event => {

    }

    handleChange = event => {

    }

    render() {
        const {products, user} = this.props;
        // const stripe = useStripe(); /*Fix this*/
        //const elements = useElements(); /*Fix this*/
        return (
            <>
                <div className='checkout'>
                    <div className='checkout-container'>
                        <h1>
                            Checkout (
                            <Link to="/cart">{products.length} items)</Link>
                        </h1>
                        <div className='checkout_section'>
                            <div className='checkout_title'>
                                <h3>Delivery Address</h3>
                            </div>
                            <div className='address_detail'>
                                {user.deliveryAddress1 ? (
                                        <>
                                            <p>{user.deliveryAddress1} , {user.deliverAddress2}</p>
                                            <p>{user.city}, {user.state} - {user.zipcode}</p>
                                        </>
                                    ) :
                                    <Link to="/address">Add address</Link>
                                }
                            </div>
                        </div>

                        <div className='checkout_section'>
                            <div className='checkout_title'>
                                <h3>Payment Method</h3>
                            </div>
                            <div className='payment_details'>
                                <form onSubmit={this.handleSubmit}>
                                    <CardElement onChange={this.handleChange}/>
                                </form>
                            </div>
                        </div>

                        <div className='checkout_section'>
                            <div className='checkout_title'>
                                <h3>Review items</h3>
                            </div>
                            <div className='review_items_list'>
                                <CartTable products={products}
                                           onAddClick={(item) => this.addItem(item)}
                                           onRemoveClick={(item) => this.removeItem(item)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(CheckoutComponent);