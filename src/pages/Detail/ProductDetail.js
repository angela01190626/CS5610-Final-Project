import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import {Rating} from "@mui/material";
import "./detail.css";
import { connect } from "react-redux";
import urls from "../../config/url";
import axios from "axios";
import Review from "../../components/Review/Review";
import isLoading from '../../actions/appAction';
import addItemToCart, { removeItemFromCart } from '../../actions/cartAction';
import {deserializeProductDetailResult} from "../../deserializer/search";
import ProductReview from "../../components/Review/ProductReview";
import Spinner from "../../components/Spinner/Spinner";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodId: '',
            quantity: 0,
            productDetail: {}
        }
    }

    componentDidMount() {
        const { productDetail } = this.state;
        const { cartItems } = this.props;
        const pathParam = window.location.pathname.split('/');
        const filteredItem = cartItems.find(item => item.id === pathParam[2])
        const quantity = !!filteredItem ? filteredItem.quantity : 0;
        this.setState({
            prodId: pathParam[2],
            quantity,
        }, () => {
            if(Object.keys(productDetail).length === 0) {
                this.fetchProductDetails();
            }
        });
    }
    fetchProductDetails = async () => {
        const {isLoading } = this.props;
        const { prodId } = this.state;
        const request = JSON.parse(JSON.stringify(urls.productDetail));
        request.url = request.url.replace("{product-id}", prodId);
        isLoading(true);
        axios.request(request).then((response) => {
            console.log("Response: ", response.data);
            isLoading(false);
            this.setState({
                productDetail: response.data || {}
            })
        }).catch((error) => {
            console.error(error);
            isLoading(false);
        });
    }

    addItem() {
        this.setState({
            quantity: this.state.quantity+1
        }, () => {
            const {addItemToCart} = this.props;
            const {productDetail, quantity} = this.state;
            const deserialized = deserializeProductDetailResult(productDetail)
            addItemToCart({...deserialized, quantity});
        });
    }

    removeItem() {
        this.setState({
            quantity: this.state.quantity-1
        }, () => {
            const {removeItemFromCart} = this.props;
            removeItemFromCart(this.state.productDetail, this.state.quantity);
        });
    }

    triggerChange() {
        this.setState({
            dummy: ''
        });
    }

    renderMainContent() {
        const { productDetail } = this.state;
        const {user} = this.props;
        console.log("API Response: ", productDetail["product_id"]);
        // console.log("API Response: ", productDetail["product_title"]);
        // console.log("API Response: ", productDetail["app_sale_price"]);
        const prod = {
            itemName: productDetail["product_title"],
            itemPrice: productDetail["app_sale_price"],
            productId: productDetail["product_id"],
            prodImg: productDetail["product_main_image_url"],
            rating: 4.7,
            detail: productDetail["feature_bullets"],
            available_quantity: productDetail["available_quantity"]
        };

        return (
            (prod && Object.keys(prod).length > 0) ? (
                <>
                    {/*{JSON.stringify(this.state.productDetail)}*/}
                    <div className="row">
                        <div className ="col-6 p-2 center-image">
                            <img className="prod-image" src = {prod.prodImg} alt="product" />
                        </div>
                        <div className="col-6 p-2">
                            <b><span className="product-align-left p-1">{prod.itemName}</span></b>
                            <div className="product-align-left p-1"><Rating className="pe-1" name="size-small" readOnly value={prod.rating} size="small"/>({prod.rating})</div>
                            <br/>
                            <div className="product-price p-1">
                                ${prod.itemPrice} {prod.itemPrice !== prod.originalPrice && (<span className="original-price">{prod.originalPrice}</span>)}
                            </div>
                            <br/>
                            <br/>
                            {
                                (this.state.quantity === 0) ? (
                                    <div className="add-button" onClick={() => this.addItem()}>Add to cart</div>
                                ) : (
                                    <div className="add-button">
                                        <i className="fas fa-minus-circle" onClick={() => this.removeItem()}/>
                                        <div className="added-quantity">{this.state.quantity}</div>
                                        <i className="fas fa-plus-circle" onClick={() => this.addItem()}/>
                                    </div>

                                )
                            }
                        </div>
                    </div>


                    <div className="p-1">
                        <b>About this item</b>
                        <hr/>
                        <div className="ms-3">
                            Product details

                            <p className="detail-para">
                                <b>
                                    {/*format should be modified*/}
                                    {prod.detail}
                                    {/*{JSON.stringify(prod.detail)}*/}

                                </b>
                            </p>
                        </div>
                        <hr/>
                        <div className="p-1">
                            <b>Reviews</b>
                            <ProductReview product={prod}  email={user.emailAddress}/>
                            <Review productId={prod.productId}/>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )


        )
    }

    render() {
        const {loading} = this.props;
        console.log("LLL : ", loading);
        return(
            loading ? (
                    <Spinner />
                ) :
                (
                    <div className="container-fluid">
                    <Layout
                        main={this.renderMainContent()}
                    />
                </div>
                )
        )
    }
}
const mapStateToProps = state => ({
    searchResult: state.search.searchResult,
    cartItems: state.cart.products,
    user: state.user,
    loading: state.app.isLoading
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    isLoading: loading => dispatch(isLoading(loading))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductDetail);