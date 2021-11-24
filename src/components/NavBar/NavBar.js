import React, { useState } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router';
import { useHistory } from "react-router";
import ReactTooltip from 'react-tooltip';
// import urls from '../../config/url';
import { deserializeProductSearchResult } from '../../deserializer/search.js';
import amazonMockdata from '../../config/amazonMockdata.json'
import { useDispatch } from "react-redux";
import './NavBar.css';
import getSearchResults from '../../actions/searchAction';

const departmentList = ["Stationary", "Decor", "Kitchen", "Meat", "Deli"];


const lisOfDepartment = () => {
    return(
        departmentList.map((department, index) => (
            <div className="d-list-item" key={index}>
                {department}
            </div>
        ))
    );
}

function NavBar() {
    const dispatch = useDispatch();
    const [item, setItem] = useState(localStorage.getItem("searchItem"));
    const loggedIn = false; //remove hardcoding, get from rexus store.
    const history = useHistory();
    const onSearchClick = () => {
        if(item && item.trim() && item.length !== 0 ) {
            localStorage.setItem("searchItem", item);
            fetchSearchResults().then(() => {
                history.push({
                    pathname:  "/search",
                    search: `?item=${item}`
                });
            });
        }

    }

    const onChangeSearch = (e) => {
        setItem(e.target.value);
        
    }
    
    const onEnterClick = (e) => {
        if (e.key === 'Enter') {
            onSearchClick();
        }
    }

    const onClickNavLink = (buttonText) => {
        let redirectionUrl = '/home';
        if(buttonText === "Profile") {
            redirectionUrl = "/profile";
        } else if(buttonText === "Sign In") {
            redirectionUrl = "/login";
        } else if(buttonText === "Cart") {
            redirectionUrl = "/cart";
        }
        history.push({
            pathname:  redirectionUrl
        });
    }

    const getNavButton = (buttonText, faClass) => {
        return (
            <button className="btn btn-sm btn-outline-secondary department-btn-root"
                type="button" onClick={() => onClickNavLink(buttonText)}>
                {!!faClass ? <span><i className={faClass}></i>&nbsp;&nbsp;&nbsp;</span> : ""}
                {buttonText}
            </button>
        )
    }

    const searchBar = () => {
        return (
            <>
                <input type="text" className="form-control search-bar"
                    placeholder="Search For Anything!"
                    onChange={onChangeSearch}
                    onKeyPress={onEnterClick}
                    value={item}
                    />
            </>
        )
    }

    const onLogoClick = () => {
        history.push({
            pathname:  "/"
        });
    }


    const fetchSearchResults = async () => {
        // let request = urls.productSearch;
        // request = {
        //     ...request,
        //     params: {
        //         ...request.params,
        //         keyword: item
        //     }
        // }
        // axios.request(request).then((response) => {
        //     console.log("Making request");
        //     const productList = deserializeProductSearchResult(response.data.docs);
        //     const action = getSearchResults(productList);
        //     dispatch(action);
        // }).catch((error) => {
        //     console.error(error); //todo: handle exception
        // }); //DO NOT UN-COMMENT, DO NOT REMOVE
        
        const products = deserializeProductSearchResult(amazonMockdata.docs);
        const action = getSearchResults(products);
        dispatch(action);
    }

    return (
        <nav className="navbar navbar-light nav-bar-root">
            <div className="col-1 d-flex justify-content-start align-items-center ml-2" onClick={onLogoClick}>
                <span className="trademark-text">Wallcart&nbsp;&nbsp;</span>
                <i className="fas fa-shopping-basket trademark-icon"/>
            </div>

            <div className="col-1.5 d-flex justify-content-center align-items-center"
                    data-tip data-for='department-tooltip'>
                {getNavButton("Departments", "fas fa-th-large")}
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="department-tooltip"
                    className="department-tt-class"
                    delayHide={1000}
                >
                    {lisOfDepartment()}
                </ReactTooltip>
            </div>

            <div className="col-7 d-flex justify-content-center align-items-center">
                {searchBar()}
                <div className="search-icon" onClick={onSearchClick}>
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="col-0.5 d-flex justify-content-end align-items-center user-location">
                <span className="location" data-tip data-for='location-tooltip'>
                    <i className="fas fa-map-marker-alt"></i>
                </span>
                <ReactTooltip
                    place="bottom"
                    effect="solid"
                    id="location-tooltip"
                    className="extraClass"
                    delayHide={1000}
                >
                    {locationTooltipContent()}
                </ReactTooltip>
            </div>

            <div className="col-1 d-flex justify-content-center align-items-center">
                {
                    loggedIn ? (
                        getNavButton("Profile", "fas fa-user")
                    ) : (
                        getNavButton("Sign In", "fas fa-user")
                    )
                }
            </div>

            <div className="col-1 d-flex justify-content-center align-items-center">
                {getNavButton("Cart", "fas fa-shopping-cart")}
            </div>


        </nav>
    )

}

const locationTooltipContent = () => {
    return (
        <span className="d-flex">
            <input type="text" className="form-control search-bar" placeholder="Enter zipcode"></input>
            &nbsp;
            <button className="btn btn-sm btn-outline-secondary go-zip-btn" type="button">
                Go
            </button>
        </span>
    )
}

export default withRouter(NavBar);