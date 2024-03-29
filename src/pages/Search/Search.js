import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product';
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from '../../actions/cartAction';
import isLoading from '../../actions/appAction';
import './Search.css';
import Spinner from '../../components/Spinner/Spinner';
import urls from '../../config/url';
import { deserializeProductSearchResult } from '../../deserializer/search';
import getSearchResults, { getSearchedValue } from '../../actions/searchAction';
import { getItemQuantity } from '../../deserializer/search';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedProduct: "",
            productList: []
        }
    }

    componentDidMount() {
        const { location } = this.props;
        if(!!location && !!location.search) {
            // const item = new URLSearchParams(location.search).get("item");
            const item = decodeURI(new URLSearchParams(location.search).get("item"));
            this.setState({
                searchedProduct: item
            }, () => this.fetchSearchResults());
        }
    }

    fetchSearchResults() {
        const { searchedProduct } = this.state;
        const {isLoading, getSearchResults, getSearchedValue } = this.props;
        let request = urls.productSearch;
        request = {
            ...request,
            params: {
                ...request.params,
                keyword: searchedProduct,
                filter: `https://www.amazon.com/s?k=${searchedProduct}&rh=p_n_condition-type%3ANew&dc&qid=1637861937&ref=sr_nr_p_n_condition-type_1`
            }
        }
        const searchQuery = {
            name: searchedProduct,
            id: searchedProduct,
            pageNum: 1
        };
        isLoading(true);
        getSearchedValue(searchQuery);
        axios.request(request).then((response) => {
            const productList = deserializeProductSearchResult(response.data.docs);
            getSearchResults(productList);
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        }); //DO NOT UN-COMMENT, DO NOT REMOVE
    }

    static getDerivedStateFromProps(props, state) {
        const { location, searchResult } = props;
        const { searchedProduct } = state;
        if(!!location && !!location.search) {
            const item = decodeURI(new URLSearchParams(location.search).get("item"));
            if(item !== searchedProduct || searchResult !== state.productList) {
                return {
                    searchedProduct: item,
                    productList: searchResult
                };
            }
        }
        return null;
    }

    onProductAddClick(item, q) {
        const { addItemToCart } = this.props;
        addItemToCart({...item, quantity: q});
    }

    onProductRemove(item, q) {
        const { removeItemFromCart } = this.props;
        removeItemFromCart({...item, quantity: q})
    }

    handlePageClick(e) {
        this.fetchNextPageItems(e.selected+1);
    }

    fetchNextPageItems(pageNum) {
        const { searchQuery, isLoading, getSearchResults, getSearchedValue } = this.props;
        let request = urls.productSearch;
        request = {
            ...request,
            params: {
                ...request.params,
                page: pageNum,
                keyword: searchQuery.name,
                filter: `https://www.amazon.com/s?k=${searchQuery.id}&rh=p_n_condition-type%3ANew&dc&qid=1637861937&ref=sr_nr_p_n_condition-type_1`
            }
        }
        isLoading(true);
        axios.request(request).then((response) => {
            const productList = deserializeProductSearchResult(response.data.docs);
            getSearchResults(productList);
            isLoading(false);
            const updatedQuery = {
                ...searchQuery,
                pageNum,
            }
            getSearchedValue(updatedQuery)
        }).catch((error) => {
            console.error(error); //todo: handle exception
            isLoading(false);
        });
    }

    renderMainContent() {
        const { searchedProduct, productList } = this.state;
        const { searchQuery, cart } = this.props;
        return(
            <div className="search-result-header">
                Results for "{searchedProduct}"
                <div className="product-grid">
                    {
                        productList && productList.length > 0 ? (
                            productList.map((item, idx) => (
                                <div className="product-container" key={idx}>
                                    <Product
                                        quantity={getItemQuantity(cart.products, item.id)}
                                        id={item.id}
                                        itemName={item.itemName}
                                        cost={item.cost}
                                        originalPrice={item.originalPrice}
                                        rating={item.rating}
                                        prodImg={item.prodImg}
                                        onProductAddClick = {(item, q) => this.onProductAddClick(item, q)}
                                        onProductRemove = {(item, q) => this.onProductRemove(item, q)}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="no-res-found">
                                No results found for the searched Item!
                            </div>
                        )
                    }
                </div>
                {
                    productList && productList.length > 0 && (
                        <div className="d-flex justify-content-center mt-4">
                            <ReactPaginate
                                initialPage={searchQuery.pageNum-1}
                                disableInitialCallback
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={5}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={e => this.handlePageClick(e)}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    )
                }
            </div>
        )
    }

    render() {
        const { loading } = this.props;
        return(
            <div>
                {
                    loading ? (
                        <div>
                            <Spinner />
                        </div>
                    ) : (
                        <Layout
                            main={this.renderMainContent()}
                        />
                    )
                }
                {/* TODO: Implement Pagination */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    searchResult: state.search.searchResult,
    loading: state.app.isLoading,
    searchQuery: state.search.searchQuery
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    isLoading: loading => dispatch(isLoading(loading)),
    getSearchResults: result => dispatch(getSearchResults(result)),
    getSearchedValue: value => dispatch(getSearchedValue(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);