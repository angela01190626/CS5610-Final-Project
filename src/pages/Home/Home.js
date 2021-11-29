import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Category from '../../components/Category/Category';
import CommonCategory from "../../config/CommonCategories.json"
// import offer from "../../config/offer.json";
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
import Spinner from '../../components/Spinner/Spinner';
import isLoading from '../../actions/appAction'; 
import addItemToCart, { removeItemFromCart } from '../../actions/cartAction';

let maxCards = 0;
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commonCategoryIndex: 0,
            offerItemsIndex: 0,
            trendingItems: []
        }
    }

    componentDidMount() {
        localStorage.removeItem("searchItem");
        this.fetchTrendingItems();
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

    getMaxCards() {
        const width = window.screen.width;
        console.log("AAAA : ", width);
        let numCards = 5;
        if(width < 1120) {
            numCards = 2;
        } else if(width < 1500) {
            numCards = 3;
        } else if(width < 1900) {
            numCards = 4;
        } else {
            numCards = 5;
        }
        maxCards = numCards;
    }


    onProductAddClick(item, q) {
        const { addItemToCart } = this.props;
        addItemToCart({...item, quantity: q});
    }

    onProductRemove(item, q) {
        const { removeItemFromCart } = this.props;
        removeItemFromCart({...item, quantity: q})
    }

    renderMainContent() {
        const { trendingItems } = this.state;
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
                <Label text={"Your Favourite Categories"} customClass="grey-medium-bold-label" />
                <div>
                    {/* TODO: Add responsiveness */}
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
                                <Category CategoryLabel={category.name} key={idx} bgImage={category.bgImage}/>  
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
    loading: state.app.isLoading
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    isLoading: loading => dispatch(isLoading(loading))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

                    
//TODO: add data retention to product component
//TODO: favourite category
//TODO: add more sections to home screen
//TODO: add more trending items
//TODO: api to fetch carousel items