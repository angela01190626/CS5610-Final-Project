import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import Category from '../../components/Category/Category';
import CommonCategory from "../../config/CommonCategories.json"
import offer from "../../config/offer.json";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouselImages from '../../config/HomeCarouselImages.json';
import Label from '../../components/Label/Label';
import ItemsCarousel from 'react-items-carousel';
import Product from '../../components/Product/Product';
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commonCategoryIndex: 0,
            offerItemsIndex: 0
        }
    }

    renderMainContent() {
        return(
            <div>
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
                        HomeCarouselImages.map(image => (
                            <div>
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
                                <Category CategoryLabel={category.name} key={idx}/>  
                            ))
                        }
                        </ItemsCarousel>
                </div>
                <br/>
                <Label text={"Dont miss these offers"} customClass="grey-medium-bold-label" />
                <ItemsCarousel
                            gutter={10}
                            chevronWidth={60}
                            numberOfCards={5}
                            slidesToScroll={2}   
                            outsideChevron={true}
                            activeItemIndex={this.state.offerItemsIndex}
                            requestToChangeActive={value => this.setState({ offerItemsIndex: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                    >
                        {
                            offer.map(item => (
                                <Product
                                    itemName={item.itemName}
                                    cost={item.cost}
                                    originalPrice={item.originalPrice}
                                    rating={item.rating}
                                    prodImg={item.prodImg}
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
        return(
            <div class="container-fluid">
                <Layout
                    left={this.renderLeftContent()} 
                    main={this.renderMainContent()}
                    right={this.renderRightContent()}
                />

                <Link to = "/privacypolicy">Privacy Policy</Link><br/>
                <Link to = "/profile">Profile</Link>
            </div>
        )
    }
}
export default Home;

                    