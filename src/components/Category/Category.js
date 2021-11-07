import React from 'react';
import Label from '../Label/Label';
import "./Category.css";

const Category = ({CategoryLabel, bgImage}) => {
    //TODO: to add background image to div.
    return(
        <div className="category-root">
            <Label text={CategoryLabel} customClass="blue-medium-bold-label" />
        </div>
    )
    
}
export default Category;