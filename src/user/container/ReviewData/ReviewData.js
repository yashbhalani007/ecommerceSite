import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../redux/slice/rating.slice';
import { useParams } from 'react-router-dom';

function ReviewData(props) {
    const dispatch = useDispatch()

    const { id } = useParams()

    const reviewData = useSelector(state => state.review.reviews)


    useEffect(() => {
        dispatch(getReviews())
    }, [])

    let productReviews = reviewData.filter(r => id === r.productId);
    let ratedReviews = productReviews.filter(r => r.rating !== null);
    let totalRatings = ratedReviews.length;
    let sumOfRatings = ratedReviews.reduce((total, r) => total + r.rating, 0);
    let averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

    // const paginate = pageNumber => {
    //     if (pageNumber > totalPages) {
    //         setCurrentPage(1);
    //     } else {
    //         setCurrentPage(pageNumber);
    //         window.scrollTo(0, 250);
    //     }
    // }

    return (
        <div id='app'>

            <div className="page-shop u-s-p-t-80">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-12">

                            <div className="fetch-categories productReview_details">
                                <div className="image-container">
                                    <a className="item-img-wrapper-link">
                                        <img className="img-fluid" src="../assets/images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                </div>


                                <h6 className="item-title reviewlink">
                                    <a href="">Product Name</a>
                                </h6>


                                <h6 className="item-title">
                                    Product Rating
                                </h6>

                                <div className="price-template">
                                    <div className="item-new-price">
                                        $55.00
                                    </div>
                                </div>


                                <h6 className="item-title reviewlink">
                                    User Images
                                </h6>

                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">

                            <div className="page-bar clearfix">
                                <div className="shop-settings">
                                    <h6 className="item-title reviewlink">
                                        <a href="">Product Name</a>
                                    </h6>
                                </div>

                                <div className="toolbar-sorter">
                                    <div className="select-box-wrapper">
                                        <label className="sr-only" htmlFor="sort-by">Sort By</label>
                                        <select className="select-box" id="sort-by">
                                            <option selected="selected" value>Most Helpful</option>
                                            <option value>Most Recent</option>
                                            <option value>Positive First</option>
                                            <option value>Negative First</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                                <div className="col-lg-6 col-md-6">

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

                            <div className="row product-container list-style">
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">

                                    <div className="item">
                                        <h3>all reviews</h3>

                                    </div>

                                </div>
                            </div>

                            {/* <div className="pagination-area">
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
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ReviewData;