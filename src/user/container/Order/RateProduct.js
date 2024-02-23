import React, { useEffect, useState } from 'react';
import { addReview, getReviews } from '../../../redux/slice/rating.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function RateProduct(props) {

    const [rating, setRating] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]); // State to store selected image files
    const [imageNames, setImageNames] = useState([]); // State to store image names

    const dispatch = useDispatch()

    const reviewData = useSelector(state => state.review.reviews)
    console.log(reviewData);

    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        dispatch(getReviews())
    }, [])

    const handleClick = (value) => {
        setRating(value);
    };

    const getRatingLabel = () => {
        switch (rating) {
            case 1:
                return <span className="very-bad">Very Bad</span>;
            case 2:
                return <span className="bad">Bad</span>;
            case 3:
                return <span className="good">Good</span>;
            case 4:
                return <span className="very-good">Very Good</span>;
            case 5:
                return <span className="excellent">Excellent</span>;
            default:
                return "";
        }
    };

    const handleImageChange = (event) => {
        const imageFiles = Array.from(event.target.files);
        if (imageFiles.length > 0) {
            setSelectedImages(prevImages => [...prevImages, ...imageFiles]);
            setImageNames(prevNames => [...prevNames, ...imageFiles.map(image => image.name)]);
        }
    };

    const removeImage = (indexToRemove) => {
        setSelectedImages(prevImages => prevImages.filter((image, index) => index !== indexToRemove));
        setImageNames(prevNames => prevNames.filter((name, index) => index !== indexToRemove));
    };

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
        };

        const imageFile = event.target.elements['image-upload'].files[0];
        if (imageFile) {
            formData.Images = imageFile;
        }

        dispatch(addReview(formData));

        event.target.reset();
    };

    return (
        <div id='app'>

            <div className="page-shop u-s-p-t-80">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-12">

                            <div className="fetch-categories">
                                <h3 className="title-name">What makes a good review</h3>

                                <h3 className="fetch-mark-category">
                                    Have you used this product?
                                </h3>

                                <p>Your review should be about your experience with the product.</p>

                            </div>
                            <div className="fetch-categories">
                                <h3 className="title-name"></h3>

                                <h3 className="fetch-mark-category">
                                    Why review a product?
                                </h3>

                                <p>Your valuable feedback will help fellow shoppers decide!</p>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">

                            <form onSubmit={handleSubmit}>

                                <div className="page-bar clearfix">

                                    <div className="star-wrapper u-s-m-b-8 order_review">

                                        <div className="star-rating newstar-rating">
                                            <input id="star-5" type="radio" name="rating" defaultValue="5" onClick={() => handleClick(5)} />
                                            <label htmlFor="star-5" title="5 stars">
                                                <i className="active fa fa-star" aria-hidden="true" />
                                            </label>
                                            <input id="star-4" type="radio" name="rating" defaultValue="4" onClick={() => handleClick(4)} />
                                            <label htmlFor="star-4" title="4 stars">
                                                <i className="active fa fa-star" aria-hidden="true" />
                                            </label>
                                            <input id="star-3" type="radio" name="rating" defaultValue="3" onClick={() => handleClick(3)} />
                                            <label htmlFor="star-3" title="3 stars">
                                                <i className="active fa fa-star" aria-hidden="true" />
                                            </label>
                                            <input id="star-2" type="radio" name="rating" defaultValue="2" onClick={() => handleClick(2)} />
                                            <label htmlFor="star-2" title="2 stars">
                                                <i className="active fa fa-star" aria-hidden="true" />
                                            </label>
                                            <input id="star-1" type="radio" name="rating" defaultValue="1" onClick={() => handleClick(1)} />
                                            <label htmlFor="star-1" title="1 star">
                                                <i className="active fa fa-star" aria-hidden="true" />
                                            </label>
                                        </div>

                                        <div className='rating_name'>
                                            <p>{getRatingLabel()}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="row product-container list-style">
                                    <div className="product-item col-lg-4 col-md-6 col-sm-6">

                                        <div className="item reviewItem">
                                            <label htmlFor="your-email">Email
                                                <span className="astk"> *</span>
                                            </label>
                                            <input id="your-email" type="text" className="text-field" placeholder="Your Email" />
                                            <label htmlFor="review-text-area">Review
                                                <span className="astk"> *</span>
                                            </label>
                                            <textarea className="text-area u-s-m-b-8" id="review-text-area" placeholder="Review" defaultValue={""} />

                                            <input type="file" id="image-upload" name="image" multiple onChange={handleImageChange} />
                                            {selectedImages.length > 0 && (
                                                <div className='review_img'>
                                                    {selectedImages.map((image, index) => (
                                                        <div className='image-area' key={index}>
                                                            <img src={URL.createObjectURL(image)} alt={`Selected Image ${index + 1}`} />
                                                            {/* <button className='reviewImg_btw' type="button" onClick={() => removeImage(index)}>

                                                            </button> */}

                                                            <a className="remove-image" href="#" style={{ display: 'inline' }} onClick={() => removeImage(index)}>×</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="review_submit">
                                                <button type='submit' className="button button-outline-secondary">Submit Review</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default RateProduct;