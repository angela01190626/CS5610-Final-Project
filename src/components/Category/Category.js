import React from 'react';
import Label from '../Label/Label';
import "./Category.css";

const Category = ({CategoryLabel, bgImage, onCategoryClick}) => {
    //TODO: to add background image to div.
    const imgStyle = {
        backgroundImage: `url(${bgImage})`
    }
    return(
        <div className="category-root" style={imgStyle}>
            <div className="category-name">
                <Label text={CategoryLabel} customClass="blue-medium-bold-label" />
            </div>
        </div>
    )
    
}
export default Category;