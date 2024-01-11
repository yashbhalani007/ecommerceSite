import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userLogoutRequest } from "../../../redux/action/adminauth.action";
import { getCategoryData } from "../../../redux/slice/category.slice";
import { getSubCategoryData } from "../../../redux/slice/subcategory.slice";
import Category from "../../container/Category/Category";


function Header({ setsubCategory }) {
  const userauth = useSelector(state => state.userauth);
  // const [selectcat, setcat] = useState([]);
  const dispatch = useDispatch()
  console.log(userauth.userAuth);

  const navigate = useNavigate();

  const category = useSelector(state => state.category)


  const subcategory = useSelector(state => state.subcategory)

  const subCategories = subcategory.subcategory;
  let uniqueCategories = [];
  subCategories.forEach((v) => {
    if (!uniqueCategories.includes(v.category)) {
      uniqueCategories.push(v.category);
    }
  });
  // console.log(uniqueCategories);


  // const namesList = subcategory.subcategory.map((obj) => obj.subcategory);


  useEffect(() => {
    dispatch(getCategoryData())
    dispatch(getSubCategoryData())
  }, []);

  const handleLogout = () => {
    console.log('kkk');
    dispatch(userLogoutRequest())
  }

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    // console.log(selectedCategory);
    setsubCategory(selectedCategory);
    // Check if a category is selected before navigating
    if (selectedCategory) {
      if (selectedCategory === 'All') {
        navigate(`/`);
      } else {
        navigate(`/category/${selectedCategory}`);
      }
    
    }
    // <Category subCat = {selectedCategory} />
  };



  return (
    <>
      <div id="app">

        <header>

          {/* Top-Header */}
          <div className="full-layer-outer-header">
            <div className="container clearfix">
              <nav>
                <ul className="primary-nav g-nav">
                  <li>
                    <a href="tel:+111444989">
                      <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                      Telephone:+111-444-989
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@domain.com">
                      <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                      E-mail: contact@domain.com
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul className="secondary-nav g-nav">
                  <li>
                    <a>
                      My Account
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{ width: 200 }}>
                      <li>
                        <NavLink to={"/Cart"}>
                          <i className="fas fa-cog u-s-m-r-9" />
                          My Cart
                        </NavLink>

                        {/* <NavLink className="fas fa-cog u-s-m-r-9" to={"/Cart"}>My Cart</NavLink> */}
                      </li>
                      <li>
                        <NavLink to={"/wishlist"}>
                          <i className="far fa-heart u-s-m-r-9" />
                          My Wishlist
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/checkout"}>
                          <i className="far fa-check-circle u-s-m-r-9" />
                          Checkout
                        </NavLink>
                      </li>

                      {userauth.userAuth

                        ? <li>
                          <NavLink to={"/"} onClick={handleLogout}>
                            <i className="fas fa-sign-in-alt u-s-m-r-9" />
                            Logout
                          </NavLink>
                        </li>
                        : <li>
                          <NavLink to={"/auth"}>
                            <i className="fas fa-sign-in-alt u-s-m-r-9" />
                            Login/Signup
                          </NavLink>
                        </li>}
                    </ul>
                  </li>
                  <li>
                    <a>
                      USD
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{ width: 90 }}>
                      <li>
                        <a href="#" className="u-c-brand">
                          ($) USD
                        </a>
                      </li>
                      <li>
                        <a href="#">(£) GBP</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      ENG
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{ width: 70 }}>
                      <li>
                        <a href="#" className="u-c-brand">
                          ENG
                        </a>
                      </li>
                      <li>
                        <a href="#">ARB</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Top-Header /- */}
          {/* Mid-Header */}
          <div className="full-layer-mid-header">
            <div className="container">
              <div className="row clearfix align-items-center">
                <div className="col-lg-3 col-md-9 col-sm-6">
                  <div className="brand-logo text-lg-center">
                    <NavLink to={"/"}>
                      <img
                        src="../assets/images/main-logo/groover-branding-1.png"
                        alt="Groover Brand Logo"
                        className="app-brand-logo"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 u-d-none-lg">
                  <form action className="form-searchbox">
                    <label className="sr-only" htmlFor="search-landscape">
                      Search
                    </label>
                    <input
                      id="search-landscape"
                      type="text"
                      className="text-field"
                      placeholder="Search everything"
                    />
                    <div className="select-box-position">
                      <div className="select-box-wrapper">
                        <label className="sr-only" htmlFor="select-category">
                          Choose category for search
                        </label>

                        <select className="select-box" id="select-category" onChange={handleCategoryChange} >

                          <option selected="selected" value='All'>
                            All
                          </option>


                          {category.category.map((v) => {
                            return (

                              <option key={v.category} value={v.category}>
                                {v.category}
                              </option>


                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <button
                      id="btn-search"
                      type="submit"
                      className="button button-primary fas fa-search"
                    />
                  </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <nav>
                    <ul className="mid-nav g-nav">
                      <li className="u-d-none-lg">
                        <a href="home.html">
                          <i className="ion ion-md-home u-c-brand" />
                        </a>
                      </li>
                      <li>
                        <NavLink to={"/wishlist"}>
                          <i className="far fa-heart" />
                        </NavLink>
                      </li>
                      <li>
                        <a id="mini-cart-trigger">
                          <i className="ion ion-md-basket" />
                          <span className="item-counter">4</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Mid-Header /- */}
          {/* Responsive-Buttons */}
          <div className="fixed-responsive-container">
            <div className="fixed-responsive-wrapper">
              <button
                type="button"
                className="button fas fa-search"
                id="responsive-search"
              />
            </div>
            <div className="fixed-responsive-wrapper">
              <a href="wishlist.html">
                <i className="far fa-heart" />
                <span className="fixed-item-counter">4</span>
              </a>
            </div>
          </div>
          {/* Responsive-Buttons /- */}
          {/* Mini Cart */}
          <div className="mini-cart-wrapper">
            <div className="mini-cart">
              <div className="mini-cart-header">
                YOUR CART
                <button
                  type="button"
                  className="button ion ion-md-close"
                  id="mini-cart-close"
                />
              </div>
              <ul className="mini-cart-list">
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" />
                    <span className="mini-item-name">
                      Casual Hoodie Full Cotton
                    </span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" />
                    <span className="mini-item-name">
                      Black Rock Dress with High Jewelery Necklace
                    </span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" />
                    <span className="mini-item-name">
                      Xiaomi Note 2 Black Color
                    </span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" />
                    <span className="mini-item-name">Dell Inspiron 15</span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
              </ul>
              <div className="mini-shop-total clearfix">
                <span className="mini-total-heading float-left">Total:</span>
                <span className="mini-total-price float-right">$220.00</span>
              </div>
              <ul>
                <div className="mini-action-anchors">
                  <NavLink className="cart-anchor" to={"/Cart"}>
                    View Cart
                  </NavLink>
                  {/* <a href="/cart" className="cart-anchor">View Cart</a> */}
                  {/* <a href="checkout.html" className="checkout-anchor">Checkout</a> */}
                  <NavLink className="checkout-anchor" to={"/checkout"}>
                    Checkout
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
          {/* Mini Cart /- */}
          {/* Bottom-Header */}
          <div className="full-layer-bottom-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 new">
                  <ul className="bottom-nav g-nav u-d-none-lg">
                    <li>
                      {/* <a href="custom-deal-page.html">New Arrivals
                                            <span className="superscript-label-new">NEW</span>
                                        </a> */}
                      <NavLink to={"/newarrival"}>
                        New Arrivals
                        <span className="superscript-label-new">NEW</span>
                      </NavLink>
                    </li>
                    <li>
                      <a href="custom-deal-page.html">
                        Exclusive Deals
                        <span className="superscript-label-hot">HOT</span>
                      </a>
                    </li>
                    <li>
                      <a href="custom-deal-page.html">Flash Deals</a>
                    </li>
                    <li className="mega-position">
                      <a>
                        Pages
                        <i className="fas fa-chevron-down u-s-m-l-9" />
                      </a>
                      <div className="mega-menu mega-3-colm">
                        <ul>
                          <li className="menu-title">Home &amp; Static Pages</li>
                          <li>
                            <NavLink to={"/"} className="u-c-brand">
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={"/about"}>About</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/faq"}>FAQ</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/storeDirectory"}>
                              Store Directory
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={"/termAndCondition"}>
                              Terms &amp; Conditions
                            </NavLink>
                          </li>
                          <li className="menu-title">Single Product Page</li>
                          <li>
                            <NavLink to={"/singlepage"}>
                              Single Product Fullwidth
                            </NavLink>
                          </li>
                          <li className="menu-title">Blog</li>
                          <li>
                            <NavLink to={"/blog"}>Blog Page</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/blogdetails"}>Blog Details</NavLink>
                          </li>
                        </ul>
                        <ul>
                          <li className="menu-title">Ecommerce Pages</li>
                          <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/Cart"}>Cart</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/checkout"}>Checkout</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/auth"}>My Account</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/wishlist"}>Wishlist</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/trackorder"}>Track your Order</NavLink>
                          </li>
                        </ul>
                        <ul>
                          <li className="menu-title">Shop Variations</li>
                          <li>
                            <NavLink to={"/"}>Shop Ver 1 Root Category</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/"}>Shop Ver 2 Sub Category</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/"}>
                              Shop Ver 3 Sub Sub Category
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={"/"}>
                              Shop Ver 4 Filter as Category
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={"/"}>
                              Shop Ver 5 Product Not Found
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={"/"}>Shop Ver 6 Search Results</NavLink>
                          </li>
                          <li className="menu-title">My Account Variation</li>
                          <li>
                            <NavLink to={"/"}>Lost Your Password ?</NavLink>
                          </li>
                          <li className="menu-title">Checkout Variation</li>
                          <li>
                            <NavLink to={"/conformation"}>
                              Checkout Confirmation
                            </NavLink>
                          </li>
                          <li className="menu-title">Custom Deals Page</li>
                          <li>
                            <NavLink to={"/newarrival"}>Custom Deal Page</NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="custom-deal-page.html">
                        Super Sale
                        <span className="superscript-label-discount">-15%</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom-Header /- */}
        </header>
      </div>

    </>
  );
}

export default Header;
