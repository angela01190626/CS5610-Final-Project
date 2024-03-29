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
                <div className='checkout_section'>
                    <div className='checkout_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='address_detail'>
                        {user.deliveryAddress1 ? (
                                <>
                                    <p>{user.deliveryAddress1}</p>
                                    <p>{user.deliveryAddress2}</p>
                                    <p>{user.city}</p>
                                    <p>{user.state}</p>
                                    <p>{user.zipcode}</p>
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
                        {user.cardNumber ? (
                                <>
                                    <p>By Card No: {user.cardNumber}</p>
                                </>
                            ) :
                            <Link to="/payment">Add card details</Link>}
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

            </>
        )
    }
}

export default withRouter(CheckoutComponent);