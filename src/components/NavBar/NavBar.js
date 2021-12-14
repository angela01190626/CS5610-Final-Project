import React, {useEffect, useState} from 'react';
import axios from 'axios';
import urls from '../../config/url.js';
import {withRouter} from 'react-router';
import {useHistory} from "react-router";
import {deserializeProductSearchResult} from '../../deserializer/search.js';
import {useDispatch, useSelector} from "react-redux";
import './NavBar.css';
import getSearchResults from '../../actions/searchAction';
import isLoading from '../../actions/appAction.js';
import {getSearchedValue} from '../../actions/searchAction';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import {clearUser, getUserData, setUserData} from "../../actions/userAction";
import {profile} from "../../services/profileService";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Button, Snackbar} from "@mui/material";
import {logout} from "../../services/profileService";

const getNumCartitems = (state) => state.cart.products;
const getProfileData = (state) => state.user;

function NavBar() {
    const dispatch = useDispatch();
    const [item, setItem] = useState(localStorage.getItem("searchItem") || '');
    const [logoutClicked, setLogoutClicked] = useState(false);
    const [departments, setDepartments] = useState([]);
    const history = useHistory();
    const numItems = useSelector(getNumCartitems);
    const profileData = useSelector(getProfileData);

    useEffect(() => {
        profile().then(res =>
                           res.json()).then(user => dispatch(setUserData(user)));
    }, [])
    const loggedIn = Object.keys(profileData) && Object.keys(profileData).length > 0;
    const fetchProductCategories = async () => {
        let departments = [];
        let request = urls.productCategories;
        axios.request(request).then((response) => {
            departments = response.data;
            setDepartments(departments);
        }).catch((error) => {
            console.error(error); //todo: handle exception
        });
    }

    const onSearchClick = () => {
        if (item && item.trim() && item.length !== 0) {
            localStorage.setItem("searchItem", item);
            fetchSearchResults().then(() => {
                history.push({
                                 pathname: "/search",
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
        if (buttonText === "Profile") {
            redirectionUrl = "/profile";
        } else if (buttonText === "Sign In") {
            redirectionUrl = "/login";
        } else if (buttonText === "Cart") {
            redirectionUrl = "/cart";
        } else if (buttonText === "Order") {
            redirectionUrl = "/orders";
        }
        history.push({
                         pathname: redirectionUrl
                     });
    }

    const onCategoryClick = (department) => {
        if (!!department) {
            fetchCategoryProducts(department).then(() => {
                history.push({
                                 pathname: "/search",
                                 search: `?item=${department.name}`
                             });
            });
        }
    }

    const fetchCategoryProducts = async (department) => {
        let request = urls.productSearch;
        request = {
            ...request,
            params: {
                ...request.params,
                keyword: department.name,
                page: 1,
                filter: `https://www.amazon.com/s?k=${department.id}&rh=p_n_condition-type%3ANew&dc&qid=1637861937&ref=sr_nr_p_n_condition-type_1`
            }
        }
        const searchQuery = {
            name: department.name,
            id: department.id,
            pageNum: 1
        }
        dispatch(isLoading(true));
        dispatch(getSearchedValue(searchQuery));
        axios.request(request).then((response) => {
            console.log("Making request");
            const productList = deserializeProductSearchResult(response.data.docs);
            const action = getSearchResults(productList);
            dispatch(action);
            dispatch(isLoading(false));
        }).catch((error) => {
            console.error(error); //todo: handle exception
            dispatch(isLoading(false));
        }); //DO NOT UN-COMMENT, DO NOT REMOVE

        // const products = deserializeProductSearchResult(amazonMockdata.docs);
        // const action = getSearchResults(products);
        // dispatch(action);
    }

    const fetchSearchResults = async () => {
        let request = urls.productSearch;
        request = {
            ...request,
            params: {
                ...request.params,
                keyword: item,
                filter: `https://www.amazon.com/s?k=${item}&rh=p_n_condition-type%3ANew&dc&qid=1637861937&ref=sr_nr_p_n_condition-type_1`
            }
        }
        const searchQuery = {
            name: item,
            id: item,
            pageNum: 1
        };
        dispatch(isLoading(true));
        dispatch(getSearchedValue(searchQuery));
        axios.request(request).then((response) => {
            const productList = deserializeProductSearchResult(response.data.docs);
            const action = getSearchResults(productList);
            dispatch(action);
            dispatch(isLoading(false));
        }).catch((error) => {
            dispatch(isLoading(false));
            console.error(error); //todo: handle exception
        }); //DO NOT UN-COMMENT, DO NOT REMOVE
    }

    departments.length === 0 && (
        fetchProductCategories()
    )

    const onLogoutClick = function (e) {
        logout().then(() => {
            dispatch(clearUser())
            history.push('/');
        })
        setLogoutClicked(true);
        e.stopPropagation();
        setTimeout(() => {
            setLogoutClicked(false);
        }, 5000)
    }

    const getUserOptionDD = () => {
        return (
            <div className="user-hover-dropdown-container">
                <span className={"nav-welcome-msg"}>Hello {profileData.firstName}!</span>
                <Button variant="contained" onClick={(e) => onLogoutClick(e)}>Logout</Button>
            </div>
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="brand-container"
                          onClick={() => onClickNavLink("home")}>ShopEazy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto department-container">
                    <NavDropdown title="Departments" id="collasible-nav-dropdown">
                        {
                            departments.map((department, idx) => (
                                <NavDropdown.Item key={idx} onClick={() =>
                                    onCategoryClick(
                                        department)}>{department.name}</NavDropdown.Item>
                            ))
                        }
                    </NavDropdown>
                </Nav>
                <FormControl
                    type="search"
                    placeholder="Search For Anything!"
                    aria-label="Search"
                    onChange={onChangeSearch}
                    onKeyDown={onEnterClick}
                    value={item}
                />
                <Nav>
                    <Nav.Link eventKey={2} className="nav-bar-icon"
                              onClick={() => onClickNavLink(profileData
                              && (Object.keys(profileData).length > 0) ? "Order" : "Sign In")}>
                        <i className="fas fa-shopping-bag"></i>
                    </Nav.Link>
                    <Nav.Link eventKey={2} className="nav-bar-icon"
                              onClick={() => onClickNavLink(loggedIn ? "Profile" : "Sign In")}>

                        <Tooltip title={(profileData && Object.keys(profileData).length > 0) ? (
                            <React.Fragment>
                                {getUserOptionDD()}
                            </React.Fragment>
                        ) : ""
                        }>
                            <IconButton>
                                <i className="fas fa-user-alt nav-bar-icon-color"></i>
                            </IconButton>
                        </Tooltip>

                    </Nav.Link>

                    <Nav.Link eventKey={2} className="nav-bar-icon"
                              onClick={() => onClickNavLink("Cart")}>
                        <Badge badgeContent={numItems.length} color="primary">
                            <i className="fas fa-shopping-cart"></i>
                        </Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Snackbar
                open={logoutClicked}
                autoHideDuration={6000}
                onClose={() => {
                }}
                message="Logout Successful!"
                action={() => {
                }}
            />
        </Navbar>
    )

}

export default withRouter(NavBar);