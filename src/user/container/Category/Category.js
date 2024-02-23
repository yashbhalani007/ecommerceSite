import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../../../redux/slice/category.slice';
import { getSubCategoryData } from '../../../redux/slice/subcategory.slice';
import { getProduct } from '../../../redux/slice/product.slice';
import { Link } from 'react-router-dom';
import { addtocart } from '../../../redux/slice/cart.slice';
import { addtowishlist, removefromwishlist } from '../../../redux/slice/wishlist.slice';
import { getReviews } from '../../../redux/slice/rating.slice';

function Category({ CartIncDec }) {

    const dispatch = useDispatch()
    const [viewMode, setViewMode] = useState('list');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const selectedCategory = useSelector(state => state.selectcategory.selectedCategory);
    console.log(selectedCategory);

    const [selectedSubcategory, setSelectedSubcategory] = useState('All');

    const subcategory = useSelector(state => state.subcategory)

    const product = useSelector(state => state.products)
    const allproduct = product.products;

    const wishlist = useSelector(state => state.wishlist);
    const allWishlist = wishlist.wishlist

    const reviewData = useSelector(state => state.review.reviews)

    const uniqueProducts = allproduct.reduce((accumulator, currentProduct) => {
        const existingProduct = accumulator.find(
            (product) => product.group_id === currentProduct.group_id
        );

        if (!existingProduct && (selectedSubcategory === 'All' || currentProduct.subcategory === selectedSubcategory)) {
            accumulator.push(currentProduct);
        }

        return accumulator;
    }, []);

    // console.log(uniqueProducts);

    useEffect(() => {
        dispatch(getCategoryData())
        dispatch(getSubCategoryData())
        dispatch(getProduct())
        dispatch(getReviews())
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory])

    const totalProducts = uniqueProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = uniqueProducts
        .filter((v) => (selectedCategory === 'All' || v.category === selectedCategory) && v.status === 'approve')
        .slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(currentProducts);


    const paginate = pageNumber => {
        if (pageNumber > totalPages) {
            setCurrentPage(1);
        } else {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 250);
        }
    }

    const handleClick = (event, subcategoryValue) => {
        event.preventDefault();
        setSelectedSubcategory(subcategoryValue);
    }

    const handleWishlist = (event, id) => {
        event.preventDefault()

        const isItemInWishlist = allWishlist.includes(id);

        if (isItemInWishlist) {
            dispatch(removefromwishlist({ id }));
        } else {
            dispatch(addtowishlist({ id }));
        }
    }

    const HandleAddtocart = (event, id) => {
        event.preventDefault();

        dispatch(addtocart({ id: id, qty: 1 }))

        CartIncDec((prev) => prev + 1)

    }

    const handleListAnchorClick = () => {
        setViewMode('list');
        setItemsPerPage(5);
    };

    const handleGridAnchorClick = () => {
        setViewMode('grid');
        setItemsPerPage(9);
    };

    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

    return (
        <div id='app'>
            <div>

                <div className="page-shop u-s-p-t-80">
                    <div className="container">

                        <div className="shop-intro">
                            <h3>{selectedCategory}</h3>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="v-menu">
                                    <span className="v-title">
                                        <i className="ion ion-md-menu" />
                                        All Categories
                                    </span>
                                    <nav>
                                        <div className="v-wrapper">
                                            <ul className="v-list animated fadeIn">
                                                <li className="js-backdrop">
                                                    <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, 'All')}>
                                                        <i class="ion ion-md-heart"></i>
                                                        All
                                                        <i className="ion ion-ios-arrow-forward" />
                                                    </a>

                                                </li>

                                                {subcategory.subcategory.map((item) => {
                                                    if (selectedCategory === 'All') {
                                                        return (

                                                            <li className="js-backdrop" key={item.subcategory}>
                                                                <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, item.subcategory)}>
                                                                    <i class="ion ion-md-heart"></i>
                                                                    {item.subcategory}
                                                                    <i className="ion ion-ios-arrow-forward" />
                                                                </a>
                                                            </li>
                                                        );
                                                    } else if (item.category === selectedCategory) {
                                                        return (

                                                            <li className="js-backdrop">
                                                                <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, item.subcategory)}>
                                                                    <i class="ion ion-md-heart"></i>
                                                                    {item.subcategory}
                                                                    <i className="ion ion-ios-arrow-forward" />
                                                                </a>
                                                            </li>
                                                        );
                                                    }

                                                })}

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9 col-sm-12">

                                <div className="page-bar clearfix">
                                    <div className="shop-settings">
                                        <a id="list-anchor" className={viewMode === 'list' ? 'active' : ''} onClick={handleListAnchorClick}>
                                            <i className="fas fa-th-list" />
                                        </a>
                                        <a id="grid-anchor" className={viewMode === 'grid' ? 'active' : ''} onClick={handleGridAnchorClick}>
                                            <i class="fas fa-th"></i>
                                        </a>
                                    </div>

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

                                </div>

                                <div className={`row product-container ${viewMode === 'list' ? 'list-style' : 'grid-style'}`}>

                                    {
                                        currentProducts.map((v) => {
                                            console.log(v);
                                            
                                            const productReviews = reviewData.filter(r => v.id === r.productId);
                                            const ratedReviews = productReviews.filter(r => r.rating !== null);
                                            const totalRatings = ratedReviews.length;
                                            const sumOfRatings = ratedReviews.reduce((total, r) => total + r.rating, 0);
                                            const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

                                            if (selectedCategory === 'All' && v.status === 'approve') {

                                                return (

                                                    <div className="product-item col-lg-4 col-md-6 col-sm-6" key={v.id}>

                                                        <Link to={"/product_Details/" + v.id} >
                                                            <div className="item">
                                                                <div className="image-container">

                                                                    <a className="item-img-wrapper-link" >
                                                                        <img className="img-fluid zoomimg" src={v.fileurl[0]} alt="Product" />
                                                                    </a>

                                                                    <div className="item-action-behaviors">

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
                                                                                <span style={{ width: `${averageRating * 20}%` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price-template">
                                                                        <div className="item-new-price">
                                                                            ${v.price}
                                                                        </div>
                                                                        <div className="item-old-price">
                                                                            ${v.mrp}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tag new">
                                                                    <span>NEW</span>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </div>
                                                )
                                            } else if (v.category === selectedCategory && v.status === 'approve') {
                                                return (
                                                    <div className="product-item col-lg-4 col-md-6 col-sm-6" key={v.id}>
                                                        <Link to={"/product_Details/" + v.id} >
                                                            <div className="item">
                                                                <div className="image-container">

                                                                    <a className="item-img-wrapper-link">
                                                                        <img className="img-fluid zoomimg" src={v.fileurl[0]} alt="Product" />
                                                                    </a>

                                                                    <div className="item-action-behaviors">
                                                                        <a onClick={(event) => handleWishlist(event, v.id)} className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                                        <a onClick={(event) => HandleAddtocart(event, v.id)} className="item-addCart" href="javascript:void(0)">Add to Cart</a>
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
                                                                                <span style={{ width: `${averageRating * 20}%` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price-template">
                                                                        <div className="item-new-price">
                                                                            ${v.price}
                                                                        </div>
                                                                        <div className="item-old-price">
                                                                            ${v.mrp}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tag new">
                                                                    <span>NEW</span>
                                                                </div>
                                                            </div>
                                                        </Link>
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

                                        <li>
                                            <a onClick={() => paginate(currentPage - 1)} title="Previous">
                                                <i className="fa fa-angle-left" />
                                            </a>
                                        </li>

                                        {[...Array(totalPages).keys()].map(number => (
                                            <li key={number} className={currentPage === number + 1 ? 'active' : ''}>
                                                <a onClick={() => paginate(number + 1)}>{number + 1}</a>
                                            </li>
                                        ))}

                                        <li>
                                            <a onClick={() => paginate(currentPage + 1)} title="Next">
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

        </div >
    );
}

export default Category;