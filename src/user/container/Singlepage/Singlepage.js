import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../redux/slice/product.slice';
import { addtocart } from '../../../redux/slice/cart.slice';
import { addtowishlist, removefromwishlist } from '../../../redux/slice/wishlist.slice';
import { addReview, getReviews } from '../../../redux/slice/rating.slice';


function Singlepage({ CartIncDec }) {

    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [fdata, setFdata] = useState([]);
    const [variant, setVariant] = useState([]);
    const wishlist = useSelector(state => state.wishlist);
    const allWishlist = wishlist.wishlist



    const reviewData = useSelector(state => state.review.reviews)
    // console.log(reviewData);

    const { id } = useParams()

    const dispatch = useDispatch()

    const product = useSelector(state => state.products)

    const allproduct = product.products;

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getReviews())
        let filteredData = product.products.filter((v) => v.id === id);
        setFdata(filteredData)
        if (filteredData.length <= 0) {
            return;
        }

    }, [dispatch, id, product.products]);

    //rating.........//

    let productReviews = reviewData.filter(r => id === r.productId);
    let ratedReviews = productReviews.filter(r => r.rating !== null);
    let totalRatings = ratedReviews.length;
    let sumOfRatings = ratedReviews.reduce((total, r) => total + r.rating, 0);
    let averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

    //....................//

    let targetGroupId;
    if (fdata.length > 0) {
        targetGroupId = fdata[0].group_id;
    }

    let matchingObjects = allproduct.filter(obj => obj.group_id === targetGroupId);


    let fileUrls = [];
    if (matchingObjects.length > 0 && matchingObjects[0].fileurl) {
        fileUrls = matchingObjects[0].fileurl;
    }


    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    }

    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };

    const HandleAddtocart = (event, v) => {
        event.preventDefault();

        dispatch(addtocart({ id: v.id, qty: quantity }))

        CartIncDec((prev) => prev + 1)

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



    const handleSubmit = async (event) => {
        event.preventDefault();

        const starInputs = event.target.elements['rating'];
        let selectedRating = null;
        for (let i = 0; i < starInputs.length; i++) {
            if (starInputs[i].checked) {
                selectedRating = parseInt(starInputs[i].value);
                break;
            }
        }

        const formData = {
            email: event.target.elements['your-email'].value,
            reviewText: event.target.elements['review-text-area'].value,
            rating: selectedRating,
            productId: id,
            // Images: event.target.elements['image-upload'].files[0]
        };

        const imageFile = event.target.elements['image-upload'].files[0];
        if (imageFile) {
            formData.Images = imageFile;
        }

        dispatch(addReview(formData));

        event.target.reset();
    };

    const handleColorChange = (event, selectedColor) => {
        console.log(event, selectedColor);

        const variantArray = [];
        variantArray.push(selectedColor);

        setVariant(variantArray)
    };

    let finaldata = variant.length > 0 ? variant : fdata


    return (

        <div id='app'>
            <div className="page-detail u-s-p-t-80">

                <div className="container">

                    {
                        finaldata.map((v) => {

                            return (
                                <>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">


                                            <div className="zoom-area">
                                                <div className="main-image">
                                                    <img className="img-fluid drift-demo-trigger" src={variant.length > 0 ? variant[0].fileurl[activeImageIndex] : fileUrls[activeImageIndex]} alt="Zoom Image" />
                                                </div>

                                                <div id="gallery" className="u-s-m-t-10">

                                                    {fileUrls.map((image, i) => (
                                                        <a
                                                            key={i}
                                                            className={activeImageIndex === i ? 'active' : ''}
                                                            data-image={image}
                                                            data-zoom-image={image}
                                                            onClick={() => handleImageClick(i)}
                                                        >
                                                            <img src={variant.length > 0 ? variant[0].fileurl[i] : image} alt={`Product Thumbnail ${i + 1}`} />

                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">

                                            <div className="all-information-wrapper">
                                                <div className="section-1-title-breadcrumb-rating">
                                                    <div className="product-title">
                                                        <h1>
                                                            <a href="single-product.html">{v.product_name}</a>
                                                        </h1>
                                                    </div>
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="home.html">Home</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">{v.category}</a>
                                                        </li>
                                                        <li className="is-marked">
                                                            <a href="shop-v3-sub-sub-category.html">{v.subcategory}</a>
                                                        </li>
                                                    </ul>
                                                    <div className="product-rating">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
                                                    </div>
                                                </div>
                                                <div className="section-3-price-original-discount u-s-p-y-14">
                                                    <div className="price">
                                                        <h4>${v.price}</h4>
                                                    </div>
                                                    <div className="original-price">
                                                        <h4>${v.mrp}</h4>
                                                    </div>
                                                    <div className="discount-price">
                                                        <h4>({Math.round((v.mrp - v.price) * 100 / v.mrp)}% off)</h4>
                                                    </div>
                                                </div>
                                                <div className="section-4-sku-information u-s-p-y-14">
                                                    <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
                                                    <div className="availability">
                                                        <span>Availability:</span>
                                                        {
                                                            v.sizes.some(sizeOption => sizeOption.stock > 0) ? <span>In Stock</span> : <span>Out of Stock</span>
                                                        }

                                                    </div>

                                                </div>
                                                <div className="section-5-product-variants u-s-p-y-14">
                                                    <h6 className="information-heading u-s-m-b-8">More Color:</h6>
                                                    <div className="color u-s-m-b-11">
                                                        <div className="color-variant select-box-wrapper">


                                                            {
                                                                matchingObjects.map((val, index) => (
                                                                    <img
                                                                        key={val.color}
                                                                        className={`color-option ${val.color === variant[0]?.color ? 'active' : ''}`}
                                                                        src={val.fileurl[0]}
                                                                        alt={val.color}
                                                                        onClick={(e) => handleColorChange(e, val)}
                                                                        data-color={val.color}
                                                                        style={{ width: '85px', height: '100px' }}
                                                                    />
                                                                ))
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className="sizes u-s-m-b-11">
                                                        <span>Available Size:</span>
                                                        <div className="size-variant select-box-wrapper">
                                                            <select className="select-box product-size">
                                                                {
                                                                    v.sizes.map((sizeOption, index) => (
                                                                        <option key={index}>{sizeOption.size}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                                                    <form action="#" className="post-form">
                                                        <div className="quick-social-media-wrapper u-s-m-b-22">
                                                            <span>Share:</span>
                                                            <ul className="social-media-list">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-facebook-f" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-google-plus-g" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fas fa-rss" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-pinterest" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="quantity-wrapper u-s-m-b-22">
                                                            <span>Quantity:</span>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    className="quantity-text-field"
                                                                    value={quantity}
                                                                />
                                                                <a className="plus-a" onClick={handleIncrease}>
                                                                    +
                                                                </a>
                                                                <a className="minus-a" onClick={handleDecrease}>
                                                                    -
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>

                                                            <button className="button button-outline-secondary" onClick={(event) => HandleAddtocart(event, v)} type="submit">Add to cart</button>
                                                            <button className="button button-outline-secondary far fa-heart u-s-m-l-6" onClick={(event) => handleWishlist(event, v.id)} />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>

            </div>

            {/* Product-Detail /- */}
            {/* Detail-Tabs */}

            {
                fdata.map((v) => {
                    return (
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="detail-tabs-wrapper u-s-p-t-80">
                                    <div className="detail-nav-wrapper u-s-m-b-30">
                                        <ul className="nav single-product-nav justify-content-center">



                                            <li className={`nav-item ${activeTab === 'description' ? 'active' : ''}`}>
                                                <a className="nav-link" onClick={() => setActiveTab('description')} href="#description">Description</a>
                                            </li>
                                            <li className={`nav-item ${activeTab === 'specification' ? 'active' : ''}`}>
                                                <a className="nav-link" onClick={() => setActiveTab('specification')} href="#specification">Specifications</a>
                                            </li>
                                            <li className={`nav-item ${activeTab === 'review' ? 'active' : ''}`}>
                                                <a className="nav-link" onClick={() => setActiveTab('review')} href="#review">Reviews (15)</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">

                                        <div className={`tab-pane fade ${activeTab === 'description' ? 'active show' : ''}`} id="description">
                                            <div className="description-whole-container">
                                                <p className="desc-p u-s-m-b-26">{v.description}</p>
                                            </div>
                                        </div>


                                        <div className={`tab-pane fade ${activeTab === 'specification' ? 'active show' : ''}`} id="specification">
                                            <div className="specification-whole-container">
                                                <div className="spec-ul u-s-m-b-50">
                                                    <h4 className="spec-heading">Key Features</h4>
                                                    <ul>
                                                        <li>Heather Grey</li>
                                                        <li>Black</li>
                                                        <li>White</li>
                                                    </ul>
                                                </div>
                                                <div className="u-s-m-b-50">
                                                    <h4 className="spec-heading">What's in the Box?</h4>
                                                    <h3 className="spec-answer">1 x hoodie</h3>
                                                </div>
                                                <div className="spec-table u-s-m-b-50">
                                                    <h4 className="spec-heading">General Information</h4>
                                                    <table>
                                                        <tbody><tr>
                                                            <td>Sku</td>
                                                            <td>AY536FA08JT86NAFAMZ</td>
                                                        </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="spec-table u-s-m-b-50">
                                                    <h4 className="spec-heading">Product Information</h4>
                                                    <table>
                                                        <tbody><tr>
                                                            <td>Main Material</td>
                                                            <td>Cotton</td>
                                                        </tr>
                                                            <tr>
                                                                <td>Color</td>
                                                                <td>Heather Grey, Black, White</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sleeves</td>
                                                                <td>Long Sleeve</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Top Fit</td>
                                                                <td>Regular</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Print</td>
                                                                <td>Not Printed</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Neck</td>
                                                                <td>Round Neck</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pieces Count</td>
                                                                <td>1 piece</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Occasion</td>
                                                                <td>Casual</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping Weight (kg)</td>
                                                                <td>0.5</td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'review' ? 'active show' : ''}`} id="review">
                                            <div className="review-whole-container">
                                                <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                                                    <div className="col-lg-6 col-md-6">

                                                        {/* {
                                                            reviewData.map((r) => {
                                                                if (id === r.productId) {
                                                                    console.log(r);

                                                                    const ratedReviews = reviewData.filter(r => r.rating !== null);

                                                                    // Calculate the average rating
                                                                    const totalRatings = ratedReviews.length;
                                                                    const sumOfRatings = ratedReviews.reduce((total, r) => total + r.rating, 0);
                                                                    const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

                                                                    return (
                                                                        <div className="total-score-wrapper" key={r.id}>
                                                                            <h6 className="review-h6">Average Rating</h6>
                                                                            <div className="circle-wrapper">
                                                                                <h1>{averageRating.toFixed(1)}</h1>
                                                                            </div>
                                                                            <h6 className="review-h6">Based on {totalRatings} Reviews</h6>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        } */}



                                                        <div className="total-score-wrapper" >
                                                            <h6 className="review-h6">Average Rating</h6>
                                                            <div className="circle-wrapper">
                                                                <h1>{averageRating.toFixed(1)}</h1>
                                                            </div>
                                                            <h6 className="review-h6">Based on {totalRatings} Reviews</h6>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-6 col-md-6">

                                                        <div className="total-star-meter">

                                                            {[5, 4, 3, 2, 1].map(starRating => {

                                                                const reviewsWithRating = reviewData.filter(review => review.rating === starRating && review.productId === id);

                                                                const totalReviews = reviewsWithRating.length;

                                                                const starWidth = totalReviews > 0 ? (totalReviews / reviewData.length) * 100 : 0;

                                                                return (
                                                                    <div className="star-wrapper" key={starRating}>
                                                                        <span>{starRating} Stars</span>
                                                                        <div className="star">
                                                                            <span style={{ width: `${starWidth}%` }} />
                                                                        </div>
                                                                        <span>({totalReviews})</span>
                                                                    </div>
                                                                );
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row r-2 u-s-m-b-26 u-s-p-b-22">
                                                    <div className="col-lg-12">
                                                        <div className="your-rating-wrapper">
                                                            <h6 className="review-h6">Your Review is matter.</h6>
                                                            <h6 className="review-h6">Have you used this product before?</h6>

                                                            <form onSubmit={handleSubmit}>

                                                                <div className="star-wrapper u-s-m-b-8">

                                                                    <div className="star-rating">
                                                                        <input id="star-5" type="radio" name="rating" defaultValue="5" />
                                                                        <label htmlFor="star-5" title="5 stars">
                                                                            <i className="active fa fa-star" aria-hidden="true" />
                                                                        </label>
                                                                        <input id="star-4" type="radio" name="rating" defaultValue="4" />
                                                                        <label htmlFor="star-4" title="4 stars">
                                                                            <i className="active fa fa-star" aria-hidden="true" />
                                                                        </label>
                                                                        <input id="star-3" type="radio" name="rating" defaultValue="3" />
                                                                        <label htmlFor="star-3" title="3 stars">
                                                                            <i className="active fa fa-star" aria-hidden="true" />
                                                                        </label>
                                                                        <input id="star-2" type="radio" name="rating" defaultValue="2" />
                                                                        <label htmlFor="star-2" title="2 stars">
                                                                            <i className="active fa fa-star" aria-hidden="true" />
                                                                        </label>
                                                                        <input id="star-1" type="radio" name="rating" defaultValue="1" />
                                                                        <label htmlFor="star-1" title="1 star">
                                                                            <i className="active fa fa-star" aria-hidden="true" />
                                                                        </label>
                                                                    </div>

                                                                    <input type="file" id="image-upload" name="image" />

                                                                </div>

                                                                <label htmlFor="your-email">Email
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <input id="your-email" type="text" className="text-field" placeholder="Your Email" />

                                                                <label htmlFor="review-text-area">Review
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <textarea className="text-area u-s-m-b-8" id="review-text-area" placeholder="Review" defaultValue={""} />
                                                                <button type='submit' className="button button-outline-secondary">Submit Review</button>
                                                            </form>


                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Get-Reviews */}
                                                <div className="get-reviews u-s-p-b-22">
                                                    {/* Review-Options */}
                                                    <div className="review-options u-s-m-b-16">
                                                        <div className="review-option-heading">
                                                            <h6>Reviews
                                                                <span> ({reviewData.length}) </span>
                                                            </h6>
                                                        </div>
                                                        <div className="review-option-box">
                                                            <div className="select-box-wrapper">
                                                                <label className="sr-only" htmlFor="review-sort">Review Sorter</label>
                                                                <select className="select-box" id="review-sort">
                                                                    <option value>Sort by: Best Rating</option>
                                                                    <option value>Sort by: Worst Rating</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Review-Options /- */}
                                                    {/* All-Reviews */}
                                                    <div className="reviewers">
                                                        {
                                                            reviewData.map((r) => {
                                                                console.log(r);
                                                                const starWidth = (r.rating / 5) * 100;

                                                                if (id === r.productId) {
                                                                    return (
                                                                        <div className="review-data">
                                                                            <div className="reviewer-name-and-date">
                                                                                <h6 className="reviewer-name">{r.email}</h6>
                                                                                <h6 className="review-posted-date">10 May 2018</h6>
                                                                            </div>  
                                                                            <div className="reviewer-stars-title-body">
                                                                                <div className="reviewer-stars">
                                                                                    <div className="star">
                                                                                        <span style={{ width: `${starWidth}%` }} />
                                                                                    </div>
                                                                                    <span className="review-title">Good!</span>
                                                                                </div>
                                                                                <p className="review-body">
                                                                                    {r.reviewText}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }

                                                            })
                                                        }


                                                    </div>
                                                    {/* All-Reviews /- */}
                                                    {/* Pagination-Review */}
                                                    <div className="pagination-review-area">
                                                        <div className="pagination-review-number">
                                                            <ul>
                                                                <li style={{ display: 'none' }}>
                                                                    <a href="single-product.html" title="Previous">
                                                                        <i className="fas fa-angle-left" />
                                                                    </a>
                                                                </li>
                                                                <li className="active">
                                                                    <a href="/reviewData">Show more Reviews</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Pagination-Review /- */}
                                                </div>
                                                {/* Get-Reviews /- */}
                                            </div>
                                        </div>
                                        {/* Reviews-Tab /- */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* Detail-Tabs /- */}
            {/* Different-Product-Section */}
            <div className="detail-different-product-section u-s-p-t-80">
                {/* Similar-Products */}
                <section className="section-maker">
                    <div className="container">
                        <div className="sec-maker-header text-center">
                            <h3 className="sec-maker-h3">Similar Products</h3>
                        </div>
                        <div className="slider-fouc">
                            <div className="products-slider owl-carousel" data-item={4}>
                                <div className="item">
                                    <div className="image-container">
                                        <a className="item-img-wrapper-link" href="single-product.html">
                                            <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                        </a>
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
                                                    <a href="shop-v1-root-category.html">Men's</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a href="shop-v2-sub-category.html">Tops</a>
                                                </li>
                                                <li>
                                                    <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                                </li>
                                            </ul>
                                            <h6 className="item-title">
                                                <a href="single-product.html">Casual Hoodie Full Cotton</a>
                                            </h6>
                                            <div className="item-stars">
                                                <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                    <span style={{ width: 0 }} />
                                                </div>
                                                <span>(0)</span>
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
                                <div className="item">
                                    <div className="image-container">
                                        <a className="item-img-wrapper-link" href="single-product.html">
                                            <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                        </a>
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
                                                    <a href="shop-v1-root-category.html">Men's</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a href="shop-v2-sub-category.html">Outwear</a>
                                                </li>
                                                <li>
                                                    <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                                </li>
                                            </ul>
                                            <h6 className="item-title">
                                                <a href="single-product.html">Fern Green Men's Jacket</a>
                                            </h6>
                                            <div className="item-stars">
                                                <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                    <span style={{ width: 0 }} />
                                                </div>
                                                <span>(0)</span>
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
                                    <div className="tag hot">
                                        <span>HOT</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a className="item-img-wrapper-link" href="single-product.html">
                                            <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                        </a>
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
                                                    <a href="shop-v1-root-category.html">Men's</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                </li>
                                                <li>
                                                    <a href="shop-v3-sub-sub-category.html">Round</a>
                                                </li>
                                            </ul>
                                            <h6 className="item-title">
                                                <a href="single-product.html">Brown Dark Tan Round Double Bridge Sunglasses</a>
                                            </h6>
                                            <div className="item-stars">
                                                <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                    <span style={{ width: 0 }} />
                                                </div>
                                                <span>(0)</span>
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
                                    <div className="tag hot">
                                        <span>HOT</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a className="item-img-wrapper-link" href="single-product.html">
                                            <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                        </a>
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
                                                    <a href="shop-v1-root-category.html">Men's</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                </li>
                                                <li>
                                                    <a href="shop-v3-sub-sub-category.html">Round</a>
                                                </li>
                                            </ul>
                                            <h6 className="item-title">
                                                <a href="single-product.html">Black Round Double Bridge Sunglasses</a>
                                            </h6>
                                            <div className="item-stars">
                                                <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                    <span style={{ width: 0 }} />
                                                </div>
                                                <span>(0)</span>
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
                                    <div className="tag hot">
                                        <span>HOT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Similar-Products /- */}

            </div>
            {/* Different-Product-Section /- */}
        </div >
    );
}

export default Singlepage;