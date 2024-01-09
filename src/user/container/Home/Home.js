import React, { useEffect } from 'react';


function Home(props) {

    

    return (

        <div id='app'>
            {/* Main-Slider */}
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
            {/* Main-Slider /- */}
            {/* Banner-Layer */}
            <section className="banner-layer">
                <div className="container">
                    <div className="image-banner">
                        <a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                            <img className="img-fluid" src="../assets/images/banners/b1.jpg" alt="Winter Season Banner" />
                        </a>
                    </div>
                </div>
            </section>
            {/* Banner-Layer /- */}
            {/* Men-Clothing */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#men-latest-products">Latest Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="men-latest-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Mischka Plain Men T-Shirt</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v4-filter-as-category.html">T-Shirts</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black Bean Plain Men T-Shirt</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Regular Rock Blue Men Jean</a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v3-sub-sub-category.html">Suits</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black Maire Full Men Suit</a>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                        <a href="single-product.html">Woodsmoke Rookie Parka Jacket</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v2-sub-category.html">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Ties</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Blue Zodiac Boxes Reg Tie
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Zambezi Carved Leather Business Casual Shoes
                                                        </a>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="men-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="men-top-rating-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v3-sub-sub-category.html">Suits</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black Maire Full Men Suit</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                        <a href="single-product.html">Woodsmoke Rookie Parka Jacket</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v2-sub-category.html">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Ties</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Blue Zodiac Boxes Reg Tie</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
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
                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Zambezi Carved Leather Business Casual Shoes
                                                        </a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="men-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Men-Clothing-Timing-Section */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <span className="sec-maker-span-text">Men's Clothing</span>
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
                    {/* Carousel */}
                    <div className="products-slider owl-carousel" data-item={4}>
                        <div className="item">
                            <div className="image-container">
                                <a className="item-img-wrapper-link" href="single-product.html">
                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
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
                                        <a href="single-product.html">Maire Battlefield Jeep Men's Jacket</a>
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
                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
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
                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
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
                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
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
                    {/* Carousel /- */}
                </div>
            </section>
            {/* Men-Clothing-Timing-Section /- */}
            {/* Banner-Image & View-more */}
            <div className="banner-image-view-more">
                <div className="container">
                    <div className="image-banner u-s-m-y-40">
                        <a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                            <img className="img-fluid" src="../assets/images/banners/ban-men.jpg" />
                        </a>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Banner-Image & View-more /- */}
            {/* Men-Clothing /- */}
            {/* Women-Clothing */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">WOMEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#women-latest-products">Latest Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="women-latest-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">White Solitude Dress with mid heel &amp; Bag
                                                        </a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black Rock Dress with High Jewelery Necklace
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Haiti Full Dress with Boots &amp; Jacket</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black &amp; White Wrap Dress with High Jewelery Necklace</a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Grey Nickel Special Occasion Dress</a>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Red Carmine Winter Special Occasion Dress
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Wax Flower with Corn Silk Heel
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Intimates</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Bras</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Red Wild Bra
                                                        </a>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="women-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="women-top-rating-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Grey Nickel Special Occasion Dress</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Red Carmine Winter Special Occasion Dress
                                                        </a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Wax Flower with Corn Silk Heel</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li className="has-separator">
                                                            <a href="shop-v1-root-category.html">Women's</a>
                                                        </li>
                                                        <li className="has-separator">
                                                            <a href="shop-v2-sub-category.html">Intimates</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Bras</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Red Wild Bra</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="women-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Women-Clothing /- */}
            {/* Toys-Hobbies-&-Robots */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Toys Hobbies &amp; Robots</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest Products</a>
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
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Phantom with 1080p Camera</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Inspire with 1080p Camera</a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Phantom with Battery Lights</a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Mavic Air
                                                        </a>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">U45 Raven RC Quadcopter
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Inspire 1 with 1080p Camera
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Inspire 1 with 360° Camera
                                                        </a>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="toys-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="toys-top-rating-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Mavic Air
                                                        </a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag sale">
                                                <span>SALE</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">U45 Raven RC Quadcopter
                                                        </a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Inspire 1 with 1080p Camera</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
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
                                                            <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">DJI Inspire 1 with 360° Camera</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                            <span style={{ width: 67 }} />
                                                        </div>
                                                        <span>(23)</span>
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
                                            <div className="tag discount">
                                                <span>-15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="toys-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Toys-Hobbies-&-Robots /- */}
            {/* Mobiles-&-Tablets */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Mobiles &amp; Tablets</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#mobiles-latest-products">Latest Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-featured-products">Featured Products</a>
                            </li>
                        </ul>
                        <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="mobiles-latest-products">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-12">
                                            <ul className="nav tab-nav-style-2-a">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#smart-phones" title="Smart Phones">
                                                        <i className="ion ion-ios-phone-portrait" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tablets" title="Tablets">
                                                        <i className="ion ion-md-phone-landscape" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#smart-watches" title="Smart Watches">
                                                        <i className="ion ion-md-watch" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#device-accessories" title="Device Accessories">
                                                        <i className="ion ion-md-settings" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#power-banks" title="Power Banks">
                                                        <i className="ion ion-md-battery-charging" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-11 col-md-12">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="smart-phones">
                                                    <div className="specific-category-slider owl-carousel" data-item={3}>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Xiaomi Note 2 Black Color
                                                                        </a>
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
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Iphone X Silver Color</a>
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
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Samsung S7 Green Metallic Color
                                                                        </a>
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
                                                            <div className="tag sale">
                                                                <span>SALE</span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Sony Xperia 3 Black Color
                                                                        </a>
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
                                                            <div className="tag discount">
                                                                <span>-15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tablets">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="smart-watches">
                                                    <div className="specific-category-slider owl-carousel" data-item={3}>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartwatches
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Outatime Mix Smartwatch
                                                                        </a>
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
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartwatches
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Mombo Full Wrist Smartwatch
                                                                        </a>
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
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartwatches
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Apollo Sport Think Smartwatch
                                                                        </a>
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
                                                            <div className="tag sale">
                                                                <span>SALE</span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Smartwatches
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Rhythm Pulse Smartwatch
                                                                        </a>
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
                                                            <div className="tag discount">
                                                                <span>-15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="device-accessories">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="power-banks">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="mobiles-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="mobiles-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="mobiles-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Mobiles-&-Tablets /- */}
            {/* Consumer-Electronics */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Consumer Electronics</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#consumer-latest-products">Latest Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-featured-products">Featured Products</a>
                            </li>
                        </ul>
                        <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="consumer-latest-products">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-12">
                                            <ul className="nav tab-nav-style-2-a">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#laptops" title="Laptops">
                                                        <i className="ion ion-md-laptop" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#pc-and-accessories" title="PC & Accessories">
                                                        <i className="ion ion-ios-settings" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tv" title="TV's">
                                                        <i className="ion ion-md-tv" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#cam-corder" title="Camera & Camcorders">
                                                        <i className="ion ion-md-camera" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#audio-amplifiers" title="Audio & Amplifiers">
                                                        <i className="ion ion-md-microphone" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-11 col-md-12">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="laptops">
                                                    <div className="specific-category-slider owl-carousel" data-item={3}>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Laptops</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">HP Pavilion 15 Notebook
                                                                        </a>
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
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Laptops</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Apple Macbook Pro 2017</a>
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
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Laptops</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Dell Inspiron 15</a>
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
                                                            <div className="tag sale">
                                                                <span>SALE</span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Laptops</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Dell Inspiron 1525</a>
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
                                                            <div className="tag discount">
                                                                <span>-15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pc-and-accessories">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="tv">
                                                    <div className="specific-category-slider owl-carousel" data-item={3}>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Hisense 4k LED TV</a>
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
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">TCL 4k LED TV</a>
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
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">Sony 4k LED TV
                                                                        </a>
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
                                                            <div className="tag sale">
                                                                <span>SALE</span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="image-container">
                                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                                </a>
                                                                <div className="item-action-behaviors">
                                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
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
                                                                            <a href="shop-v1-root-category.html">Consumer Electronics
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">China Petrei 4k LED TV</a>
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
                                                            <div className="tag discount">
                                                                <span>-15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="cam-corder">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="audio-amplifiers">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h1>SORRY!</h1>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="consumer-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="consumer-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="consumer-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Consumer-Electronics /- */}
            {/* Books-&-Audible */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Books &amp; Audible</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#books-latest-products">Latest Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="books-latest-products">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li>
                                                            <a href="shop-v1-root-category.html">Books</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">JavaScript The Definitive Guide by David Flanagan
                                                        </a>
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
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li>
                                                            <a href="shop-v1-root-category.html">Books</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Eloquent JavaScript by Marijn Haverbeke
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li>
                                                            <a href="shop-v1-root-category.html">Books</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Secret of the JavaScript Ninja by Bear Bibeault &amp; John Resig
                                                        </a>
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
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="../assets/images/product/product@3x.jpg" />
                                                </a>
                                                <div className="item-action-behaviors">
                                                    <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                    </a>
                                                    <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="what-product-is">
                                                    <ul className="bread-crumb">
                                                        <li>
                                                            <a href="shop-v1-root-category.html">Books</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">JavaScript The Good Parts by Douglas Crockford
                                                        </a>
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
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="books-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="books-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="books-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h1>SORRY!</h1>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Books-&-Audible /- */}
            {/* Continue-Link */}
            <div className="continue-link-wrapper u-s-p-b-80">
                <a className="continue-link" href="store-directory.html" title="View all products on site">
                    <i className="ion ion-ios-more" />
                </a>
            </div>
            {/* Continue-Link /- */}
            {/* Brand-Slider */}
            <section className="brand-slider u-s-p-b-80">
                <div className="container">
                    <div className="brand-slider-content owl-carousel" data-item={5}>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="../assets/images/brand-logos/b1.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Brand-Slider /- */}
            {/* Site-Priorities */}
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