import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import urls from '../../config/url';
import deserializeGetLiquorByNameData from '../../deserializer/search';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product';
import searchedProduct from "../../config/searchProducts.json";
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedProduct: "Electric scateboard",
            productList: searchedProduct //remove initialization
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
        const { location } = props;
        const { searchedProduct } = state;
        if(!!location && !!location.search) {
            const item = new URLSearchParams(location.search).get("item");
            if(item !== searchedProduct) {
                return {
                    searchedProduct: item
                };
            }
        }
    }

    getProductInfo() {
        const { searchedProduct } = this.state;
        let request = urls.getCockTailByName;
        request = {
            ...request,
            params: {i: searchedProduct}
        }
        axios.request(request).then((response) => {
            const productList = deserializeGetLiquorByNameData(response.data);
            this.setState({
                productList,
            })
        }).catch((error) => {
            console.error(error);
        });
        // add this data to redux store
    }

    renderMainContent() {
        const { searchedProduct, productList } = this.state;
        this.getProductInfo();
        return(
            <div className="search-result-header">
                Results for "{searchedProduct}"
                <div className="product-grid">
                    {
                        productList && productList.length > 0 ? (
                            productList.map(item => (
                                <div className="product-container">
                                <Product
                                    itemName={item.itemName}
                                    cost={item.cost}
                                    originalPrice={item.originalPrice}
                                    rating={item.rating}
                                    prodImg={item.prodImg}
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
export default Search;