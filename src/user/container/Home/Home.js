import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/slice/product.slice';
import Slider from "react-slick";
import { addtowishlist, removefromwishlist } from '../../../redux/slice/wishlist.slice';
import { addtocart } from '../../../redux/slice/cart.slice';
import { Link, useParams } from 'react-router-dom';
import { getReviews } from '../../../redux/slice/rating.slice';



function Home({ CartIncDec }) {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const newSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4
    };

    const dispatch = useDispatch()

    const product = useSelector(state => state.products)
    const allproduct = product.products;
    // console.log(allproduct);

    const reviewData = useSelector(state => state.review.reviews)
    console.log(reviewData);

    const wishlist = useSelector(state => state.wishlist);
    const allWishlist = wishlist.wishlist


    // remove duplicate from allproduct //

    const uniqueProducts = allproduct.reduce((accumulator, currentProduct) => {
        const existingProductIndex = accumulator.findIndex(
            (product) => product.group_id === currentProduct.group_id
        );

        if (existingProductIndex === -1) {
            accumulator.push(currentProduct);
        }

        return accumulator;
    }, []);

    console.log(uniqueProducts);


    useEffect(() => {
        dispatch(getProduct())
        dispatch(getReviews())
    }, []);


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

    return (

        <div id="app">

            <section>
                <div className="full-layer-slider">
                    <div className="slider-main owl-carousel">
                        <div className="bg-image one">
                            <div className="slide-content slide-animation">
                                <h1>Casual Clothing</h1>
                                <h2>lifestyle / clothing / hype</h2>
                            </div>
                        </div>
                        <div className="bg-image two">
                            <div className="slide-content-2 slide-animation">
                                <h2 className="slide-2-h2-a">Hiking</h2>
                                <h2 className="slide-2-h2-b">Collection</h2>
                                <h1>2023</h1>
                            </div>
                        </div>
                        <div className="bg-image three">
                            <div className="slide-content slide-animation">
                                <h1>Tech
                                    <span style={{ color: '#333' }}>Deals</span>
                                </h1>
                                <h2 style={{ color: '#333' }}># shopping</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">

                                <div className="tab-pane active show fade" id="toys-latest-products">
                                    <Slider {...settings}>

                                        {
                                            uniqueProducts.map((v) => {
                                                if (v.category === 'Men Fashion') {
                                                    let productReviews = reviewData.filter(review => v.id === review.productId);
                                                    let ratedReviews = productReviews.filter(review => review.rating !== null);
                                                    let totalRatings = ratedReviews.length;
                                                    let sumOfRatings = ratedReviews.reduce((total, review) => total + review.rating, 0);
                                                    let averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
                                                    return (
                                                        <Link to={"/product_Details/" + v.id}>
                                                            <div>
                                                                <div className="item">
                                                                    <div className="image-container">
                                                                        <a className="item-img-wrapper-link" >
                                                                            <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                        </a>
                                                                        <div className="item-action-behaviors">
                                                                            <a onClick={(event) => handleWishlist(event, v.id)} className="item-addwishlist" href="javascript:void(0)">Add to
                                                                                Wishlist</a>
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
                                                                            <div className="item-stars">
                                                                                <div className="star" title="0 out of 5 - based on 0 Reviews">
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
                                                            </div>
                                                        </Link>
                                                    )
                                                }

                                            })
                                        }


                                    </Slider>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">WOMEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">

                                <div className="tab-pane active show fade" id="toys-latest-products">
                                    <Slider {...settings}>

                                        {
                                            uniqueProducts.map((v) => {
                                                if (v.category === 'Women Fashion') {

                                                    let productReviews = reviewData.filter(review => v.id === review.productId);
                                                    let ratedReviews = productReviews.filter(review => review.rating !== null);
                                                    let totalRatings = ratedReviews.length;
                                                    let sumOfRatings = ratedReviews.reduce((total, review) => total + review.rating, 0);
                                                    let averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
                                                    return (
                                                        <div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">

                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                                            Wishlist</a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                                            </li>
                                                                            <li className="has-separator">
                                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v3-sub-sub-category.html">RC Helicopte</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">RC Helicopter 6-Cell</a>
                                                                        </h6>
                                                                        <div className="item-stars">
                                                                            <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                                                <span style={{ width: `${averageRating * 20}%` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price-template">
                                                                        <div className="item-new-price">
                                                                            $55.00
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


                                    </Slider>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">KID'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">

                                <div className="tab-pane active show fade" id="toys-latest-products">
                                    <Slider {...settings}>

                                        {
                                            uniqueProducts.map((v) => {
                                                if (v.category === 'Kids Fashion') {

                                                    let productReviews = reviewData.filter(review => v.id === review.productId);
                                                    let ratedReviews = productReviews.filter(review => review.rating !== null);
                                                    let totalRatings = ratedReviews.length;
                                                    let sumOfRatings = ratedReviews.reduce((total, review) => total + review.rating, 0);
                                                    let averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
                                                    return (
                                                        <div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">

                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                                            Wishlist</a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                                            </li>
                                                                            <li className="has-separator">
                                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v3-sub-sub-category.html">RC Helicopte</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">RC Helicopter 6-Cell</a>
                                                                        </h6>
                                                                        <div className="item-stars">
                                                                            <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                                                <span style={{ width: `${averageRating * 20}%` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price-template">
                                                                        <div className="item-new-price">
                                                                            $55.00
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
                                    </Slider>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Consumer Electronics</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#consumer-latest-products">Latest
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-best-selling-products">Best
                                    Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-featured-products">Featured
                                    Products</a>
                            </li>
                        </ul>
                        <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="consumer-latest-products">
                                    <div className="row align-items-center">

                                        <div className="col-lg-11 col-md-12">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="laptops">

                                                    <Slider {...newSettings}>
                                                        {
                                                            uniqueProducts.map((v) => {
                                                                if (v.subcategory === 'Laptop') {
                                                                    return (
                                                                        <div className="item new_item">
                                                                            <div className="image-container">
                                                                                <a className="item-img-wrapper-link">
                                                                                    <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                                </a>
                                                                                <div className="item-action-behaviors">

                                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                                    </a>
                                                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-content">
                                                                                <div className="what-product-is">
                                                                                    <ul className="bread-crumb">
                                                                                        <li className="has-separator">
                                                                                            <a href="shop-v1-root-category.html">{v.category}
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="shop-v2-sub-category.html">{v.subcategory}</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <h6 className="item-title">
                                                                                        <a href="single-product.html">{v.product_name}
                                                                                        </a>
                                                                                    </h6>
                                                                                    <div className="item-stars">
                                                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                                                            <span style={{ width: 0 }} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="price-template">
                                                                                    <div className="item-new-price">
                                                                                        $55.00
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
                                                                    )
                                                                }

                                                            })
                                                        }
                                                    </Slider>

                                                    
                                                    <Slider {...newSettings}>
                                                        {
                                                            uniqueProducts.map((v) => {
                                                                if (v.category === 'Electronics') {
                                                                    return (
                                                                        <div className="item new_item">
                                                                            <div className="image-container">
                                                                                <a className="item-img-wrapper-link">
                                                                                    <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                                </a>
                                                                                <div className="item-action-behaviors">

                                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                                    </a>
                                                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-content">
                                                                                <div className="what-product-is">
                                                                                    <ul className="bread-crumb">
                                                                                        <li className="has-separator">
                                                                                            <a href="shop-v1-root-category.html">{v.category}
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="shop-v2-sub-category.html">{v.subcategory}</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <h6 className="item-title">
                                                                                        <a href="single-product.html">{v.product_name}
                                                                                        </a>
                                                                                    </h6>
                                                                                    <div className="item-stars">
                                                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                                                            <span style={{ width: 0 }} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="price-template">
                                                                                    <div className="item-new-price">
                                                                                        $55.00
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
                                                                    )
                                                                }

                                                            })
                                                        }
                                                    </Slider>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>
                        <span className="sec-maker-span-text">Ends in</span>
                        {/* Timing-Box */}
                        <div className="section-timing-wrapper dynamic">
                            <span className="fictitious-seconds" style={{ display: 'none' }}>18000</span>
                            <div className="section-box-wrapper box-days">
                                <div className="section-box">
                                    <span className="section-key">120</span>
                                    <span className="section-value">Days</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-hrs">
                                <div className="section-box">
                                    <span className="section-key">54</span>
                                    <span className="section-value">HRS</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-mins">
                                <div className="section-box">
                                    <span className="section-key">3</span>
                                    <span className="section-value">MINS</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-secs">
                                <div className="section-box">
                                    <span className="section-key">32</span>
                                    <span className="section-value">SEC</span>
                                </div>
                            </div>
                        </div>
                        {/* Timing-Box /- */}
                    </div>
                    <div className="tab-pane active show fade" id="toys-latest-products">
                        <Slider {...settings}>

                            {
                                uniqueProducts.map((v) => {

                                    return (
                                        <div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Helicopte</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">RC Helicopter 6-Cell</a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">
                                                            $55.00
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


                                })
                            }


                        </Slider>
                    </div>
                </div>
            </section>


            <div className="continue-link-wrapper u-s-p-b-80">
                <a className="continue-link" href="/category/All" title="View all products on site" target='_blank'>
                    <i className="ion ion-ios-more" />
                </a>
            </div>


            <section className="app-priority">
                <div className="container">
                    <div className="priority-wrapper u-s-p-b-80">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-star" />
                                    </div>
                                    <h2>
                                        Great Value
                                    </h2>
                                    <p>We offer competitive prices on our 100 million plus product range</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-cash" />
                                    </div>
                                    <h2>
                                        Shop with Confidence
                                    </h2>
                                    <p>Our Protection covers your purchase from click to delivery</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-ios-card" />
                                    </div>
                                    <h2>
                                        Safe Payment
                                    </h2>
                                    <p>Pay with the world’s most popular and secure payment methods</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-contacts" />
                                    </div>
                                    <h2>
                                        24/7 Help Center
                                    </h2>
                                    <p>Round-the-clock assistance for a smooth shopping experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default Home;