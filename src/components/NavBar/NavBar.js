import React from 'react';
import ReactTooltip from 'react-tooltip';
import './NavBar.css';

const departmentList = ["Stationary", "Decor", "Kitchen", "Meat", "Deli"];

const getNavButton = (buttonText, faClass) => {
    return (
        <button class="btn btn-sm btn-outline-secondary department-btn-root" type="button">
            {!!faClass ? <span><i className={faClass}></i>&nbsp;&nbsp;&nbsp;</span> : ""}
            {buttonText}
        </button>
    )
}

const searchBar = () => {
    return (
        <>
            <input type="text" class="form-control search-bar" placeholder="Search For Anything!"></input>
        </>
    )
}

const locationTooltipContent = () => {
    return (
        <span className="d-flex">
            <input type="text" class="form-control search-bar" placeholder="Enter zipcode"></input>
            &nbsp;
            <button class="btn btn-sm btn-outline-secondary go-zip-btn" type="button">
                Go
            </button>
        </span>
    )
}

const lisOfDepartment = () => {
    return(
        departmentList.map(department => (
            <div className="d-list-item">
                {department}
            </div>
        ))
    );
}
const NavBar = () => {
    return (
        <nav className="navbar navbar-light nav-bar-root">
            <div className="col-1 d-flex justify-content-start align-items-center ml-2">
                <span className="trademark-text">Wallcart&nbsp;&nbsp;</span>
                <i className="fas fa-shopping-basket trademark-icon"></i>
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
                <div className="search-icon">
                    <i class="fas fa-search"></i>
                </div>
            </div>

            <div className="col-0.5 d-flex justify-content-end align-items-center user-location">
                <span className="location" data-tip data-for='location-tooltip'>
                    <i class="fas fa-map-marker-alt"></i>
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
                {getNavButton("Sign In", "fas fa-user")}
            </div>

            <div className="col-1 d-flex justify-content-center align-items-center">
                {getNavButton("Cart", "fas fa-shopping-cart")}
            </div>


        </nav>
    )
}
export default NavBar;