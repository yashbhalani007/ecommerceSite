import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userLogoutRequest } from "../../../redux/action/adminauth.action";
import { getCategoryData } from "../../../redux/slice/category.slice";
import { getSubCategoryData } from "../../../redux/slice/subcategory.slice";
import { getProduct } from "../../../redux/slice/product.slice";
import { setSelectedCategory } from "../../../redux/slice/selectcategory.slice";


function Header({ favItem }) {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();

  const product = useSelector(state => state.products)

  const selectedCategory = useSelector(state => state.selectcategory.selectedCategory);

  const allproduct = product.products;

  const c1 = useSelector(state => state.cart)
  let qty = 0;

  c1.cart.map((v) => {
    qty += v.qty
  })

  let cartitems = c1.cart.map((v) => {

    let productsItems = allproduct.find((p) => p.id === v.id);

    let NewData = { ...productsItems, qty: v.qty };

    return NewData
  })

  const userauth = useSelector(state => state.userauth);

  const category = useSelector(state => state.category)

  const subcategory = useSelector(state => state.subcategory)

  const subCategories = subcategory.subcategory;
  let uniqueCategories = [];
  subCategories.forEach((v) => {
    if (!uniqueCategories.includes(v.category)) {
      uniqueCategories.push(v.category, v.id);
    }
  });

  useEffect(() => {
    dispatch(getCategoryData())
    dispatch(getSubCategoryData())
    dispatch(getProduct())

  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(userLogoutRequest())
  }

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    dispatch(setSelectedCategory(selectedCategory))

    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }

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
                      </li>
                      <li>
                        <NavLink to={"/order"}>
                          <i className="fas fa-cog u-s-m-r-9" />
                          My Orders
                        </NavLink>
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
                    <a href="/admin">
                      Become a Seller
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
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
                    <a href="/">
                      <img
                        src="../assets/images/main-logo/groover-branding-1.png"
                        alt="Groover Brand Logo"
                        className="app-brand-logo"
                      />
                    </a>
                    {/* <a href="/">
                          <i className="ion ion-md-home u-c-brand" />
                        </a> */}

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

                        <select className="select-box" value={selectedCategory} id="select-category" onChange={handleCategoryChange} >
                        
                          <option value='All'>
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
                        <a href="/">
                          <i className="ion ion-md-home u-c-brand" />
                        </a>
                      </li>
                      <li>
                        <NavLink to={"/wishlist"}>
                          <i className="far fa-heart" />
                          <span className="item-counter">{favItem.length}</span>
                        </NavLink>
                      </li>
                      <li>

                        <Link id="mini-cart-trigger">
                          <i className="ion ion-md-basket" />
                          <span className="item-counter">{qty} </span>
                        </Link>
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
              <a href="wishlist">
                <i className="far fa-heart" />
                <span className="item-counter">
                </span>
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

                {
                  cartitems.map((v) => {
                    return (
                      <li className="clearfix">
                        <a href="single-product.html">
                          <img src={v.fileurl?.[0]} />
                          <span className="mini-item-name">
                            {v.product_name}
                          </span>
                          <span className="mini-item-price">${v.price}</span>
                          <span className="mini-item-quantity"> x {v.qty} </span>
                        </a>
                      </li>
                    )
                  })
                }

              </ul>
              <div className="mini-shop-total clearfix">
                <span className="mini-total-heading float-left">Total:</span>
                <span className="mini-total-price float-right">
                  ${cartitems.reduce((total, v) => total + v.price * v.qty, 0).toFixed(2)}
                </span>
              </div>
              <ul>
                <div className="mini-action-anchors">
                  <a href="/Cart" className="cart-anchor">View Cart</a>
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
