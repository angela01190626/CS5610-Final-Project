import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Category from '../../components/Category/Category';
import CommonCategory from "../../config/CommonCategories.json"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouselImages from '../../config/HomeCarouselImages.json';
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderMainContent() {
        return(
            <div>
                <div className="home-corousel-container">
                <Carousel
                    showArrows={true}
                    onChange={()=>{}}
                    onClickItem={()=>{}}
                    onClickThumb={()=>{}}
                    showThumbs={false}>
                    {
                        HomeCarouselImages.map(image => (
                            <div>
                                <img src={image.url} className="carousel-image"/>
                            </div>
                        ))
                    }
                    
                </Carousel>
                </div>
                <br/>
                <div className="category-container">
                    {
                        CommonCategory.map((category, idx) => (
                            <Category CategoryLabel={category.name} key={idx}/>  
                        ))
                    }
                </div>
                Hello, This is the home page.
                <Button text={"Button 1"} onClick={e => this.buttonCLickHandler1(e)} />
                <Button text={"Button 2"} onClick={e => this.buttonCLickHandler2(e)} />
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
            <div>
                <Layout
                    left={this.renderLeftContent()} 
                    main={this.renderMainContent()}
                    right={this.renderRightContent()}
                />
            </div>
        )
    }
}
export default Home;

                    