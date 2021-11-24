import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product';
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from '../../actions/cartAction';
import './Search.css';

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
            const item = new URLSearchParams(location.search).get("item");
            this.setState({
                searchedProduct: item
            });
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { location, searchResult } = props;
        const { searchedProduct } = state;
        if(!!location && !!location.search) {
            const item = new URLSearchParams(location.search).get("item");
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

    renderMainContent() {
        const { searchedProduct, productList } = this.state;
        return(
            <div className="search-result-header">
                Results for "{searchedProduct}"
                <div className="product-grid">
                    {
                        productList && productList.length > 0 ? (
                            productList.map((item, idx) => (
                                <div className="product-container" key={idx}>
                                    <Product
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
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={10}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                // onPageChange={this.handlePageClick}
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
        return(
            <div>
                <Layout
                    main={this.renderMainContent()}
                />
                {/* TODO: Implement Pagination */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.cart,
    searchResult: state.search.searchResult
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);