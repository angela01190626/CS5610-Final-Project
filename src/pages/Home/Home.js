import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Category from '../../components/Category/Category';
import CommonCategory from "../../config/CommonCategories.json"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouselImages from '../../config/HomeCarouselImages.json';
import Label from '../../components/Label/Label';
import ItemsCarousel from 'react-items-carousel';
import Product from '../../components/Product/Product';
import "./Home.css";
import urls from '../../config/url';
import axios from 'axios';
import PopUp from "../../components/Popup/PopUp";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import Spinner from '../../components/Spinner/Spinner';
import isLoading from '../../actions/appAction'; 
import getSearchResults, { getSearchedValue } from '../../actions/searchAction';
import addItemToCart, { removeItemFromCart } from '../../actions/cartAction';
import { deserializeProductSearchResult } from '../../deserializer/search';
import { getItemQuantity } from '../../deserializer/search';

let maxCards = 0;
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commonCategoryIndex: 0,
            sportsAndOutdoor: 0,
            itAndPeripherals: 0,
            offerItemsIndex: 0,
            trendingItems: [],
            sportsItems: [],
            computerItems: []
        }
    }

    componentDidMount() {
        localStorage.removeItem("searchItem");
        this.fetchTrendingItems();
        this.fetchSportsItems();
        this.fetchComputerItems();
        this.getMaxCards();
        window.addEventListener('resize', this.getMaxCards);
    }

    fetchTrendingItems = async () => {
        const { isLoading } = this.props;
        let request = urls.getTrendingItems;
        isLoading(true);
        axios.request(request).then((response) => {
            this.setState({
                trendingItems: (response && response.data) || []
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    fetchSportsItems = async () => {
        const { isLoading } = this.props;
        let request = urls.getSportsItems;
        isLoading(true);
        axios.request(request).then((response) => {
            this.setState({
                sportsItems: (response && response.data) || []
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    fetchComputerItems = async () => {
        const { isLoading } = this.props;
        let request = urls.getComputerItems;
        isLoading(true);
        axios.request(request).then((response) => {
            this.setState({
                computerItems: (response && response.data) || []
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    getMaxCards() {
        const width = window.screen.width;
        console.log("AAAA : ", width);
        let numCards = 5;
        if(width < 1120) {
            numCards = 2;
        } else if(width < 1500) {
            numCards = 4;
        } else if(width < 1900) {
            numCards = 4;
        } else {
            numCards = 5;
        }
        maxCards = numCards;
    }

    saveItemInCart(product, email) {
        if (email) {
            const request = JSON.parse(JSON.stringify(urls.updateUserCart));
            request.url = request.url.replace("{email}", email)
            axios.put(request.url, {
                ...product
            }).catch(err => {
                console.error("Error!")
            })
        }
    }


    onProductAddClick(item, q) {
        const { addItemToCart, user } = this.props;
        const emailAddress = user && user.emailAddress ? user.emailAddress : null
        addItemToCart({...item, quantity: q});
        this.saveItemInCart({...item, quantity: q}, emailAddress);
    }

    onProductRemove(item, q) {
        const { removeItemFromCart } = this.props;
        removeItemFromCart({...item, quantity: q})
    }

    onClickGroceryCat(category) {
        const { history, isLoading, getSearchResults, getSearchedValue } = this.props;
        let request = urls.productSearch;
        request = {
            ...request,
            params: {
                ...request.params,
                keyword: category.name,
                filter: `https://www.amazon.com/s?k=${category.categoryId}&rh=p_n_condition-type%3ANew&dc&qid=1637861937&ref=sr_nr_p_n_condition-type_1`
            }
        };
        const searchQuery = {
            name: category.name,
            id: category.categoryId,
            pageNum: 1
        };
        isLoading(true);
        getSearchedValue(searchQuery);
        axios.request(request).then((response) => {
            const productList = deserializeProductSearchResult(response.data.docs);
            getSearchResults(productList);
            isLoading(false);
            history.push({
                pathname:  "/search",
                search: `?item=${category.name}`
            });
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    renderMainContent() {
        const { trendingItems, sportsItems, computerItems } = this.state;
        const { cartItems } = this.props;
        return(
            <div>
                <PopUp/>
                <div className="home-corousel-container">
                <Carousel
                    interval={4000}
                    autoPlay
                    infiniteLoop
                    showArrows={true}
                    onChange={()=>{}}
                    onClickItem={()=>{}}
                    onClickThumb={()=>{}}
                    showThumbs={false}>
                    {
                        HomeCarouselImages.map((image, idx) => (
                            <div key={idx}>
                                <img src={image.url} className="carousel-image" alt="trending"/>
                            </div>
                        ))
                    }
                    
                </Carousel>
                </div>
                <br/>

                
                {/* <div>
                    <Carousel
                        interval={4000}
                        autoPlay
                        infiniteLoop
                        showArrows={true}
                        onChange={()=>{}}
                        onClickItem={()=>{}}
                        onClickThumb={()=>{}}
                        showThumbs={false}>
                        {
                            CommonCategory.map((category, idx) => (
                                <div onClick={() => this.onClickGroceryCat(category)}>
                                    <Category CategoryLabel={category.name}
                                        key={idx}
                                        bgImage={category.bgImage}/>  
                                </div>
                            ))
                        }
                        
                    </Carousel>
                </div> */}

                <Label text={"Shop Daily Groceries"} customClass="grey-medium-bold-label" />
                <div>
                    <ItemsCarousel
                            gutter={10}
                            chevronWidth={60}
                            numberOfCards={5}
                            slidesToScroll={2}   
                            outsideChevron={true}
                            activeItemIndex={this.state.commonCategoryIndex}
                            requestToChangeActive={value => this.setState({ commonCategoryIndex: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                    >
                        {
                            CommonCategory.map((category, idx) => (
                                <div onClick={() => this.onClickGroceryCat(category)}>
                                    <Category CategoryLabel={category.name}
                                        key={idx}
                                        bgImage={category.bgImage}/>  
                                </div>
                            ))
                        }
                        </ItemsCarousel>
                </div>
                <br/>
                <Label text={"Dont miss these offers"} customClass="grey-medium-bold-label" />
                <ItemsCarousel
                            gutter={10}
                            chevronWidth={60}
                            numberOfCards={maxCards || 4}
                            slidesToScroll={2}   
                            outsideChevron={true}
                            activeItemIndex={this.state.offerItemsIndex}
                            requestToChangeActive={value => this.setState({ offerItemsIndex: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                    >
                        {
                            trendingItems.map((item, idx) => (
                                <Product
                                    quantity={getItemQuantity(cartItems, item.productId)}
                                    key={idx}
                                    id={item.productId}
                                    itemName={item.itemName}
                                    cost={item.itemPrice}
                                    originalPrice={item.originalPrice}
                                    rating={(!!item.rating) ? parseFloat(item.rating.toString().substr(0, 3)) : 3}
                                    prodImg={item.prodImg}
                                    onProductAddClick = {(item, q) => this.onProductAddClick(item, q)}
                                    onProductRemove = {(item, q) => this.onProductRemove(item, q)}
                                />
                            ))
                        }
                </ItemsCarousel>

                <br/>
                <br/>
                <Label text={"Popular in sports & outdoors"} customClass="grey-medium-bold-label" />
                <ItemsCarousel
                            gutter={10}
                            chevronWidth={60}
                            numberOfCards={maxCards || 4}
                            slidesToScroll={2}   
                            outsideChevron={true}
                            activeItemIndex={this.state.sportsAndOutdoor}
                            requestToChangeActive={value => this.setState({ sportsAndOutdoor: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                    >
                        {
                            sportsItems.map((item, idx) => (
                                <Product
                                    quantity={getItemQuantity(cartItems, item.productId)}
                                    key={idx}
                                    id={item.productId}
                                    itemName={item.itemName}
                                    cost={item.itemPrice}
                                    originalPrice={item.originalPrice}
                                    rating={(!!item.rating) ? parseFloat(item.rating.toString().substr(0, 3)) : 3}
                                    prodImg={item.prodImg}
                                    onProductAddClick = {(item, q) => this.onProductAddClick(item, q)}
                                    onProductRemove = {(item, q) => this.onProductRemove(item, q)}
                                />
                            ))
                        }
                </ItemsCarousel>

                <br/>
                <br/>
                <Label text={"Save on Computers and peripheral"} customClass="grey-medium-bold-label" />
                <ItemsCarousel
                            gutter={10}
                            chevronWidth={60}
                            numberOfCards={maxCards || 4}
                            slidesToScroll={2}   
                            outsideChevron={true}
                            activeItemIndex={this.state.itAndPeripherals}
                            requestToChangeActive={value => this.setState({ itAndPeripherals: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                    >
                        {
                            computerItems.map((item, idx) => (
                                <Product
                                    quantity={getItemQuantity(cartItems, item.productId)}
                                    key={idx}
                                    id={item.productId}
                                    itemName={item.itemName}
                                    cost={item.itemPrice}
                                    originalPrice={item.originalPrice}
                                    rating={(!!item.rating) ? parseFloat(item.rating.toString().substr(0, 3)) : 3}
                                    prodImg={item.prodImg}
                                    onProductAddClick = {(item, q) => this.onProductAddClick(item, q)}
                                    onProductRemove = {(item, q) => this.onProductRemove(item, q)}
                                />
                            ))
                        }
                </ItemsCarousel>
            </div>
        )
    }

    renderLeftContent() {
        return(
            <div>
                
            </div>
        )
    }

    renderRightContent() {
        return(
            <div>
               
            </div>
        )
    }

    buttonCLickHandler1(e) {
        alert("Button 1 Clicked!");
    }

    buttonCLickHandler2(e) {
        alert("Button 2 Clicked!");
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
                        left={this.renderLeftContent()} 
                        main={this.renderMainContent()}
                        right={this.renderRightContent()}
                    />
                </div>
            )
        )
    }
}

const mapStateToProps = state => ({
    loading: state.app.isLoading,
    cartItems: state.cart.products,
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    isLoading: loading => dispatch(isLoading(loading)),
    getSearchedValue: value => dispatch(getSearchedValue(value)),
    getSearchResults: result => dispatch(getSearchResults(result)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

                    
//TODO: create follow page