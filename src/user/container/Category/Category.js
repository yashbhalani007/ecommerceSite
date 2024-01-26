import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../../../redux/slice/category.slice';
import { getSubCategoryData } from '../../../redux/slice/subcategory.slice';
import { getProduct } from '../../../redux/slice/product.slice';
import { Link } from 'react-router-dom';
import { addtocart } from '../../../redux/slice/cart.slice';

function Category({ subCategoryvalue , CartIncDec }) {
    console.log(subCategoryvalue);
    const dispatch = useDispatch()

    const [selectedSubcategory, setSelectedSubcategory] = useState('All');

    const subcategory = useSelector(state => state.subcategory)

    const product = useSelector(state => state.products)
    // console.log(product.products);

    const allproduct = product.products;

    console.log(allproduct);

    const uniqueProducts = allproduct.reduce((accumulator, currentProduct) => {
        // Check if the current product's group_id is already in the accumulator
        const existingProduct = accumulator.find(
            (product) => product.group_id === currentProduct.group_id
        );

        // If not found, add the current product to the accumulator
        if (!existingProduct && (selectedSubcategory === 'All' || currentProduct.subcategory === selectedSubcategory)) {
            accumulator.push(currentProduct);
        }

        return accumulator;
    }, []);

    console.log(uniqueProducts);

    useEffect(() => {
        dispatch(getCategoryData())
        dispatch(getSubCategoryData())
        dispatch(getProduct())
    }, []);


    const handleClick = (event, subcategoryValue) => {
        event.preventDefault();
        console.log(subcategoryValue);
        setSelectedSubcategory(subcategoryValue);
    }

    const HandleAddtocart = (event ,id) => {
        event.preventDefault();

        dispatch(addtocart({id: id, qty: 1}))
        
        CartIncDec((prev) => prev + 1)

    }

    return (
        <div id='app'>
            <div>
                {/* Page Introduction Wrapper /- */}
                {/* Shop-Page */}
                <div className="page-shop u-s-p-t-80">
                    <div className="container">
                        {/* Shop-Intro */}
                        <div className="shop-intro">
                            <h3>{subCategoryvalue}</h3>
                        </div>
                        {/* Shop-Intro /- */}
                        <div className="row">
                            {/* Shop-Left-Side-Bar-Wrapper */}
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                {/* Fetch-Categories-from-Root-Category  */}
                                <div className="fetch-categories">
                                    <h3 className="title-name">Browse Categories</h3>
                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html" onClick={(event) => handleClick(event, 'All')}>
                                            All
                                        </a>
                                    </h3>

                                    {subcategory.subcategory.map((item) => {

                                        if (subCategoryvalue === 'All') {
                                            return (
                                                <h3 className="fetch-mark-category" key={item.subcategory}>
                                                    <a href="shop-v2-sub-category.html" onClick={(event) => handleClick(event, item.subcategory)}>{item.subcategory}
                                                    </a>
                                                </h3>
                                            );
                                        } else if (item.category === subCategoryvalue) {
                                            return (
                                                <h3 className="fetch-mark-category">
                                                    <a href="shop-v2-sub-category.html" onClick={(event) => handleClick(event, item.subcategory)}>{item.subcategory}
                                                    </a>
                                                </h3>
                                            );
                                        }

                                    })}



                                    {/* <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Tops
                                            <span className="total-fetch-items">(5)</span>
                                        </a>
                                    </h3> */}
                                    {/* Level-2 /- */}
                                    {/* Level-3 */}
                                    {/* <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">T-Shirts
                                                <span className="total-fetch-items">(2)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Hoodies
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Suits
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v4-filter-as-category.html">Black Bean T-Shirt
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Outwear
                                            <span className="total-fetch-items">(3)</span>
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Jackets
                                                <span className="total-fetch-items">(3)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Trench
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Parkas
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Sweaters
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Accessories
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Watches
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v2-sub-category.html">Ties
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Scarves
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Belts
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Bottoms
                                            <span className="total-fetch-items">(2)</span>
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Casual Pants
                                                <span className="total-fetch-items">(2)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Shoes
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Jeans
                                                <span className="total-fetch-items">(1)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Shorts
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Underwear
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Boxers
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Briefs
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Robes
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Socks
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="fetch-mark-category">
                                        <a href="shop-v2-sub-category.html">Sunglasses
                                            <span className="total-fetch-items">(2)</span>
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Pilot
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Wayfarer
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Square
                                                <span className="total-fetch-items">(0)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-v3-sub-sub-category.html">Round
                                                <span className="total-fetch-items">(2)</span>
                                            </a>
                                        </li>
                                    </ul> */}

                                </div>
                                {/* Fetch-Categories-from-Root-Category  /- */}
                            </div>
                            {/* Shop-Left-Side-Bar-Wrapper /- */}
                            {/* Shop-Right-Wrapper */}
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                {/* Page-Bar */}
                                <div className="page-bar clearfix">
                                    <div className="shop-settings">
                                        <a id="list-anchor" className="active">
                                            <i className="fas fa-th-list" />
                                        </a>
                                        <a id="grid-anchor">
                                            <i className="fas fa-th" />
                                        </a>
                                    </div>
                                    {/* Toolbar Sorter 1  */}
                                    <div className="toolbar-sorter">
                                        <div className="select-box-wrapper">
                                            <label className="sr-only" htmlFor="sort-by">Sort By</label>
                                            <select className="select-box" id="sort-by">
                                                <option selected="selected" value>Sort By: Best Selling</option>
                                                <option value>Sort By: Latest</option>
                                                <option value>Sort By: Lowest Price</option>
                                                <option value>Sort By: Highest Price</option>
                                                <option value>Sort By: Best Rating</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* //end Toolbar Sorter 1  */}
                                    {/* Toolbar Sorter 2  */}
                                    <div className="toolbar-sorter-2">
                                        <div className="select-box-wrapper">
                                            <label className="sr-only" htmlFor="show-records">Show Records Per Page</label>
                                            <select className="select-box" id="show-records">
                                                <option selected="selected" value>Show: 8</option>
                                                <option value>Show: 16</option>
                                                <option value>Show: 28</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* //end Toolbar Sorter 2  */}
                                </div>
                                {/* Page-Bar /- */}
                                {/* Row-of-Product-Container */}
                                <div className="row product-container list-style">


                                    {


                                        uniqueProducts.map((v) => {

                                            if (subCategoryvalue === 'All' && v.status === 'approve') {
                                                return (

                                                    <div className="product-item col-lg-4 col-md-6 col-sm-6">

                                                        <div className="item">
                                                            <div className="image-container">
                                                                <Link to={"/product_Details/" + v.id}>
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src={v.fileurl} alt="Product" />
                                                                    </a>
                                                                </Link>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                </div>
                                                            </div>
                                                            <div className="item-content">
                                                                <div className="what-product-is">
                                                                    <ul className="bread-crumb">
                                                                        <li className="has-separator">
                                                                            <a href="shop-v1-root-category.html">{v.category}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v3-sub-sub-category.html">{v.subcategory}</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">{v.product_name}</a>
                                                                    </h6>
                                                                    <div className="item-description">
                                                                        <p>{v.description}</p>
                                                                    </div>
                                                                    <div className="item-stars">
                                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                                            <span style={{ width: 67 }} />
                                                                        </div>
                                                                        <span>(23)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="price-template">
                                                                    <div className="item-new-price">
                                                                        ${v.price}
                                                                    </div>
                                                                    <div className="item-old-price">
                                                                        $60.00
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tag new">
                                                                <span>NEW</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            } else if (v.category === subCategoryvalue && v.status === 'approve') {
                                                return (
                                                    <div className="product-item col-lg-4 col-md-6 col-sm-6">

                                                        <div className="item">
                                                            <div className="image-container">
                                                                <Link to={"/product_Details/" + v.id}>
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src={v.fileurl} alt="Product" />
                                                                    </a>
                                                                </Link>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                                    <a onClick={(event) => HandleAddtocart(event,v.id)} className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                </div>
                                                            </div>
                                                            <div className="item-content">
                                                                <div className="what-product-is">
                                                                    <ul className="bread-crumb">
                                                                        <li className="has-separator">
                                                                            <a href="shop-v1-root-category.html">{v.category}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v3-sub-sub-category.html">{v.subcategory}</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">{v.product_name}</a>
                                                                    </h6>
                                                                    <div className="item-description">
                                                                        <p>{v.description}</p>
                                                                    </div>
                                                                    <div className="item-stars">
                                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                                            <span style={{ width: 67 }} />
                                                                        </div>
                                                                        <span>(23)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="price-template">
                                                                    <div className="item-new-price">
                                                                        ${v.price}
                                                                    </div>
                                                                    <div className="item-old-price">
                                                                        $60.00
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tag new">
                                                                <span>NEW</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }


                                        })
                                    }




                                </div>
                                {/* Row-of-Product-Container /- */}
                            </div>
                            {/* Shop-Right-Wrapper /- */}
                            {/* Shop-Pagination */}
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

        </div>
    );
}

export default Category;