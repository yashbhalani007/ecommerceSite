import React from 'react';
import { Link } from 'react-router-dom';

function Order(props) {
    return (
        <div id='app'>

            <div className="page-shop u-s-p-t-80">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-12">

                            <div className="fetch-categories">
                                <h3 className="title-name">Filters</h3>

                                <h3 className="fetch-mark-category">
                                    ORDER STATUS
                                </h3>

                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">On the way
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Delivered
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Cancelled
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v4-filter-as-category.html">Returned
                                        </a>
                                    </li>
                                </ul>

                                <h3 className="fetch-mark-category">
                                    ORDER TIME
                                </h3>

                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html"> Last 30 days
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">2023
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">2022
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">2021
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">2020
                                        </a>
                                    </li>
                                </ul>


                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">

                            <div className="page-bar clearfix">
                                <form action className="form-searchbox">
                                    <input
                                        id="search-landscape"
                                        type="text"
                                        className="text-field"
                                        placeholder="Search your orders here"
                                    />

                                    <button
                                        id="btn-search"
                                        type="submit"
                                        className="button button-primary fas fa-search"
                                    />
                                </form>


                            </div>

                            <div className="row product-container list-style">
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">

                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link">
                                                <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                            </a>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">

                                                <div className="item-description">
                                                    <p>Product name
                                                    </p>
                                                </div>

                                                <h6 className="item-title">
                                                    Delivered on jul 20,2023
                                                </h6>

                                                <div className="item-description">
                                                    <p>Your Item has been Delivered
                                                    </p>
                                                </div>

                                                <h6 className="item-title reviewlink">
                                                    <a href="/RateProduct/"><i className="active fa fa-star" aria-hidden="true" /> Rate and Review Product</a>
                                                </h6>

                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="pagination-area">
                            <div className="pagination-number">
                                <ul>
                                    <li style={{ display: 'none' }}>
                                        <a href="shop-v1-root-category.html" title="Previous">
                                            <i className="fa fa-angle-left" />
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="shop-v1-root-category.html">1</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">2</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">3</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">...</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">10</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html" title="Next">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Shop-Pagination /- */}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Order;