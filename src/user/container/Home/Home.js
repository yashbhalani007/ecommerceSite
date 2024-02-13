import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/slice/product.slice';
import Slider from "react-slick";



function Home(props) {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const dispatch = useDispatch()

    const product = useSelector(state => state.products)
    const allproduct = product.products;
    console.log(allproduct);


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
    }, []);


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
                                                if (v.category === 'Men Fashion') {
                                                    return (
                                                        <div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                                        </a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                    if (v.category === 'Men Fashion') {
                                        return (
                                            <div>
                                                <div className="item">
                                                    <div className="image-container">
                                                        <a className="item-img-wrapper-link" href="single-product.html">
                                                            <img className="img-fluid" src={v.fileurl[0]} alt="Product" />
                                                        </a>
                                                        <div className="item-action-behaviors">
                                                            <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                            </a>
                                                            <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                    }

                                })
                            }


                        </Slider>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default Home;