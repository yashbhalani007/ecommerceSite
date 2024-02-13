import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/slice/product.slice';
import { removefromwishlist } from '../../../redux/slice/wishlist.slice';
import { addtocart } from '../../../redux/slice/cart.slice';

function Wishlist({ CartIncDec }) {

    const dispatch = useDispatch()

    const product = useSelector(state => state.products)
    const allproduct = product.products;
    console.log(allproduct);

    const wishlist = useSelector(state => state.wishlist);
    const allWishlist = wishlist.wishlist
    console.log(allWishlist);

    useEffect(() => {
        dispatch(getProduct())
    }, []);

    const matchedProducts = allproduct.filter(product => allWishlist.includes(product.id));
    console.log(matchedProducts);


    const HandleAddtocart = (event, v) => {
        event.preventDefault();

        dispatch(addtocart({ id: v.id, qty: 1 }))

        CartIncDec((prev) => prev + 1)

    }

    const handleRemove = (id) => {
        console.log(id);
        dispatch(removefromwishlist({ id }));
    }



    return (
        <div id='app'>
            <div>
                {/* Page Introduction Wrapper /- */}
                {/* Wishlist-Page */}
                <div className="page-wishlist u-s-p-t-80">
                    <div className="container">

                        {/* <div className="page-intro">
                            <h2>Wishlist</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i className="ion ion-md-home" />
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="is-marked">
                                    <a href="cart.html">Wishlist</a>
                                </li>
                            </ul>
                        </div> */}

                        <div className="row">
                            <div className="col-lg-12">
                                {/* Products-List-Wrapper */}
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Stock Status</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                matchedProducts.map((v) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img src={v.fileurl?.[0]} alt="Product" />
                                                                        <h6>{v.product_name}</h6>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-price">
                                                                    ${v.price}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-stock">

                                                                    {
                                                                        v.sizes.some(sizeOption => sizeOption.stock > 0) ? <span>In Stock</span> : <span>Out of Stock</span>
                                                                    }
                                                                </div>
                                                            </td>
                                                           
                                                            <td>
                                                                <div className="action-wrapper">
                                                                    <button onClick={(event) => HandleAddtocart(event, v)} className="button button-outline-secondary">Add to Cart</button>
                                                                    <button onClick={() => handleRemove(v.id)} className="button button-outline-secondary fas fa-trash" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }



                                        </tbody>
                                    </table>
                                </div>
                                {/* Products-List-Wrapper /- */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Wishlist;