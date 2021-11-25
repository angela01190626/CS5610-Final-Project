import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {getUserData} from "../../actions/userAction";
import CartTable from "../../components/Cart/CartTable";
import {addItemToCart, removeItemFromCart} from "../../actions/cartAction";

class CheckoutComponent extends Component {
    constructor(props) {
        super(props);
    }


    removeItem(item) {
        const { removeItem } = this.props;
        removeItem(item);
    }

    addItem(item) {

        const { addItem } = this.props;
        addItem(item);
    }

    render() {
        const {products, user} = this.props;
        return (
            <>
               <div className='checkout'>
                   <div className='address_section'>
                       <div className='address_title'>
                           <h3>Delivery Address</h3>
                       </div>
                       <div className='address_detail'>
                          <p>{user.emailAddress}</p>
                           <p>{user.deliveryAddress1} ,  {user.deliverAddress2}</p>
                           <p>{user.city}, {user.state} - {user.zipcode}</p>
                       </div>
                   </div>

                   <div className='review_items_section'>
                       <div className='review_items_title'>
                           <h3>Review items</h3>
                       </div>
                       <div className='review_items_list'>
                           <CartTable products={products} onAddClick={(item) => this.addItem(item)} onRemoveClick={(item) => this.removeItem(item)}/>
                       </div>
                   </div>

               </div>
            </>
        )
    }
}

export default withRouter(CheckoutComponent);