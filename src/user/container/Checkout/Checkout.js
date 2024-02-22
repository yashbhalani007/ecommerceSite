import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addOrder } from '../../../redux/slice/order.slice';

function Checkout(props) {
    const [isChecked, setIsChecked] = useState(false);
    const cart = useSelector(state => state.cart)
    const cartData = cart.cart
    const product = useSelector(state => state.products)
    const productData = product.products
    const [shipping, setShipping] = useState()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [getState, setgetState] = useState([]);
    const [selectedState, getselectedState] = useState();
    const [getCity, setgetCity] = useState([]);
    const [counteryData, setcountryData] = useState();

    // const cartItem = cartData.map((Obj) => {
    //     const matchingProduct = productData.filter((product) => Obj.id === product.id)[0];
    //     return matchingProduct;
    // });

    useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    let country = [...new Set(data.map(item => item.country))];
    country.sort()

    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e.target.value);
        states = [...new Set(states.map(item => item.subcountry))];
        states.sort()

        setgetState(states);
    }

    const handlestate = (e) => {
        let citys = data.filter(city => city.subcountry === e.target.value)
        setgetCity(citys)
    }


    const orderTotal = cartData.reduce((total, item) => {
        const product = productData.find(product => item.id === product.id);
        let shippingCharge = 0
        let tax = 0

        if (product && product.id === item.id) {
            if (product.weight <= 0.5) {
                shippingCharge = 64
            } else if (product.weight > 0.5 && product.weight <= 4) {
                const additionalWeight = product.weight - 0.5
                shippingCharge = ((additionalWeight / 0.5) * 61) + 64
            } else if (product.weight > 4 && product.weight <= 5) {
                shippingCharge = 302
            } else if (product.weight > 5 && product.weight <= 9) {
                const additionalWeight = product.weight - 5
                shippingCharge = 302 + (additionalWeight * 41)
            } else if (product.weight > 9 && product.weight <= 10) {
                shippingCharge = 419
            } else if (product.weight > 10) {
                const additionalWeight = product.weight - 10
                shippingCharge = 419 + (additionalWeight * 42)
            }
            tax = parseFloat(product.price * (product.tax / 100)) * item.qty

            total.tax += tax
            total.shippingCharges += parseFloat(shippingCharge * item.qty)
            total.orderTotal += (product.price * item.qty) + (item.qty * shippingCharge) + tax
        }

        return total;
    }, { orderTotal: 0, shippingCharges: 0, tax: 0 });

    const grandTotal = orderTotal.orderTotal;
    const totalShippingCharges = orderTotal.shippingCharges;
    const tax = orderTotal.tax;
    // console.log(cartItem);    

    const handleCheckboxChange = (event) => {
        // Update the state when the checkbox is checked or unchecked
        setIsChecked(!isChecked);
    };

    let billingSchema;
    if (!isChecked) {
        // console.log('Not Checked');
        billingSchema = yup.object().shape({
            firstName: yup.string().required('Please Enter First Name'),
            lastName: yup.string().required('Please Enter Last Name'),
            address: yup.string().required('Please Enter Address'),
            city: yup.string().required('Please Enter City'),
            state: yup.string().required('Please Enter State'),
            country: yup.string().required('Please Enter Country'),
            zipCode: yup.string().required('Please Enter Zip Code'),
            phoneNumber: yup.string().required('Please Enter Phone Number'),
            email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
            paymentMethod: yup.string().required('Please Select a Payment Method'),
            terms: yup.boolean(true).required('Please Accept Terms and Conditions'),
            orderNotes: yup.string(),
        })
    } else {
        // console.log('Checked');
        billingSchema = yup.object().shape({
            firstName: yup.string().required('Please Enter First Name'),
            lastName: yup.string().required('Please Enter Last Name'),
            address: yup.string().required('Please Enter Address'),
            city: yup.string().required('Please Enter City'),
            state: yup.string().required('Please Enter State'),
            country: yup.string().required('Please Enter Country'),
            zipCode: yup.string().required('Please Enter Zip Code'),
            phoneNumber: yup.string().required('Please Enter Phone Number'),
            email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
            paymentMethod: yup.string().required('Please Select a Payment Method'),
            terms: yup.boolean(true).required('Please Accept Terms and Conditions'),

            shippingFirstName: yup.string().required('Please Enter First Name'),
            shippingLastName: yup.string().required('Please Enter Last Name'),
            shippingAddress: yup.string().required('Please Enter Address'),
            shippingCity: yup.string().required('Please Enter City'),
            shippingState: yup.string().required('Please Enter State'),
            shippingCountry: yup.string().required('Please Enter Country'),
            shippingZipCode: yup.string().required('Please Enter Zip Code'),
            shippingPhoneNumber: yup.string().required('Please Enter Phone Number'),
            shippingEmail: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
            orderNotes: yup.string(),


        })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm({ resolver: yupResolver(billingSchema) });

    const onSubmit = (formData) => {
        console.log('Form submitted');
        console.log({ ...formData, grandTotal, totalShippingCharges, tax, product: cartData });
        dispatch(addOrder({ ...formData, grandTotal, totalShippingCharges, tax, product: cartData }));
    }

    return (
        <div id='app'>
            <div>
                <div className="page-style-a">
                    <div className="container">
                        <div className="page-intro">
                            <h2>Checkout</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i className="ion ion-md-home" />
                                    <Link to='/' >Home</Link>
                                </li>
                                <li className="is-marked">
                                    <a href="#">Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Introduction Wrapper /- */}
                {/* Checkout-Page */}
                <div className="page-checkout u-s-p-t-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        {/* Billing-&-Shipping-Details */}
                                        <div className="col-lg-6">
                                            <h4 className="section-h4">Billing Details</h4>
                                            {/* Form-Fields */}
                                            <div className="group-inline u-s-m-b-13">
                                                <div className="group-1 u-s-p-r-16">
                                                    <label htmlFor="first-name">First Name
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="first-name" className={`text-field ${errors.firstName ? 'is-invalid' : ''}`} {...register('firstName')} />
                                                    {errors.firstName && (
                                                        <div className="invalid-feedback">{errors.firstName.message}</div>
                                                    )}
                                                </div>
                                                <div className="group-2">
                                                    <label htmlFor="last-name">Last Name
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="last-name" className={`text-field ${errors.lastName ? 'is-invalid' : ''}`} {...register('lastName')} />
                                                    {errors.lastName && (
                                                        <div className="invalid-feedback">{errors.lastName.message}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-13">
                                                <label htmlFor="select-country">Country
                                                    <span className="astk">*</span>
                                                </label>
                                                <div className="select-box-wrapper">
                                                    <select className="select-box" id="select-country" onChange={(e) => handleCountry(e)}>
                                                        {/* <option selected="selected" value>Choose your country...</option>
                                                        <option value>India (IN)</option>
                                                        <option value>United Kingdom (UK)</option>
                                                        <option value>United States (US)</option>
                                                        <option value>United Arab Emirates (UAE)</option> */}
                                                        <option value=''>--- select country ---</option>
                                                        {
                                                            country.map(item => <option key={item} value={counteryData}>{item}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                {errors.country && (
                                                    <div className="invalid-feedback">{errors.country.message}</div>
                                                )}
                                            </div>


                                            <div className="u-s-m-b-13">
                                                <label htmlFor="select-state">State / Country
                                                    <span className="astk"> *</span>
                                                </label>
                                                <div className="select-box-wrapper">
                                                    <select className="select-box" id="select-state" onChange={(e) => handlestate(e)}>
                                                        {/* <option selected="selected" value>Choose your state...</option>
                                                        <option value>Alabama</option>
                                                        <option value>Alaska</option>
                                                        <option value>Arizona</option> */}

                                                        {
                                                            getState.map(item => <option key={item} value={selectedState}>{item}</option>)
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-13">

                                                <label htmlFor="select-state">Town / City
                                                    <span className="astk"> *</span>
                                                </label>
                                                <div className="select-box-wrapper">
                                                    <select className="select-box" id="select-state">
                                                        {
                                                            getCity.map(item => <option key={item.name}>{item.name}</option>)
                                                        }
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="street-address u-s-m-b-13">
                                                <label htmlFor="req-st-address">Street Address
                                                    <span className="astk">*</span>
                                                </label>
                                                <input type="text" id="req-st-address" className={`text-field ${errors.address ? 'is-invalid' : ''}`} placeholder="House name/no and apartment/scoety, landmark" {...register('address')} />
                                                {errors.address && (
                                                    <div className="invalid-feedback">{errors.address.message}</div>
                                                )}
                                            </div>
                                            <div className="u-s-m-b-13">
                                                <label htmlFor="postcode">Postcode / Zip
                                                    <span className="astk">*</span>
                                                </label>
                                                <input type="text" id="postcode" className={`text-field ${errors.zipCode ? 'is-invalid' : ''}`} {...register('zipCode')} />
                                                {errors.zipCode && (
                                                    <div className="invalid-feedback">{errors.zipCode.message}</div>
                                                )}
                                            </div>
                                            <div className="group-inline u-s-m-b-13">
                                                <div className="group-1 u-s-p-r-16">
                                                    <label htmlFor="email">Email address
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="email" className={`text-field ${errors.email ? 'is-invalid' : ''}`} {...register('email')} />
                                                </div>
                                                {errors.email && (
                                                    <div className="invalid-feedback">{errors.email.message}</div>
                                                )}
                                                <div className="group-2">
                                                    <label htmlFor="phone">Phone
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="phone" className={`text-field ${errors.phoneNumber ? 'is-invalid' : ''}`} {...register('phoneNumber')} />
                                                </div>
                                                {errors.phoneNumber && (
                                                    <div className="invalid-feedback">{errors.phoneNumber.message}</div>
                                                )}
                                            </div>
                                            {/* <div className="u-s-m-b-30">
                                                <input type="checkbox" className="check-box" id="create-account" />
                                                <label className="label-text" htmlFor="create-account">Create Account</label>
                                            </div> */}
                                            {/* Form-Fields /- */}
                                            <h4 className="section-h4">Shipping Details</h4>
                                            <div className="u-s-m-b-24">
                                                <input type="checkbox" className="check-box" id="ship-to-different-address" data-toggle="collapse" data-target="#showdifferent" checked={isChecked}
                                                    onClick={handleCheckboxChange} />
                                                <label className="label-text" htmlFor="ship-to-different-address">Ship to a different address?</label>
                                            </div>
                                            <div className="collapse" id="showdifferent">
                                                {/* Form-Fields */}
                                                <div className="group-inline u-s-m-b-13">
                                                    <div className="group-1 u-s-p-r-16">
                                                        <label htmlFor="first-name-extra">First Name
                                                            <span className="astk">*</span>
                                                        </label>
                                                        <input type="text" id="first-name-extra" className={`text-field ${errors.shippingFirstName ? 'is-invalid' : ''}`} {...register('shippingFirstName')} />
                                                    </div>
                                                    {errors.shippingFirstName && (
                                                        <div className="invalid-feedback">{errors.shippingFirstName.message}</div>
                                                    )}
                                                    <div className="group-2">
                                                        <label htmlFor="last-name-extra">Last Name
                                                            <span className="astk">*</span>
                                                        </label>
                                                        <input type="text" id="last-name-extra" className={`text-field ${errors.shippingLastName ? 'is-invalid' : ''}`} {...register('shippingLastName')} />
                                                    </div>
                                                    {errors.shippingLastName && (
                                                        <div className="invalid-feedback">{errors.shippingLastName.message}</div>
                                                    )}
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <label htmlFor="select-country-extra">Country
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <div className="select-box-wrapper">
                                                        <select className="select-box" id="select-country" onChange={(e) => handleCountry(e)}>
                                                            {/* <option selected="selected" value>Choose your country...</option>
                                                        <option value>India (IN)</option>
                                                        <option value>United Kingdom (UK)</option>
                                                        <option value>United States (US)</option>
                                                        <option value>United Arab Emirates (UAE)</option> */}
                                                            <option value=''>--- select country ---</option>
                                                            {
                                                                country.map(item => <option key={item} value={counteryData}>{item}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <label htmlFor="select-state-extra">State / Country
                                                        <span className="astk"> *</span>
                                                    </label>
                                                    <div className="select-box-wrapper">
                                                        <select className="select-box" id="select-state" onChange={(e) => handlestate(e)}>
                                                            {/* <option selected="selected" value>Choose your state...</option>
                                                        <option value>Alabama</option>
                                                        <option value>Alaska</option>
                                                        <option value>Arizona</option> */}

                                                            {
                                                                getState.map(item => <option key={item} value={selectedState}>{item}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <label htmlFor="select-state">Town / City
                                                        <span className="astk"> *</span>
                                                    </label>
                                                    <div className="select-box-wrapper">
                                                        <select className="select-box" id="select-state">
                                                            {
                                                                getCity.map(item => <option key={item.name}>{item.name}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                    {errors.shippingCountry && (
                                                        <div className="invalid-feedback">{errors.shippingCountry.message}</div>
                                                    )}
                                                </div>
                                                <div className="street-address u-s-m-b-13">
                                                    <label htmlFor="req-st-address-extra">Street Address
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="req-st-address-extra" className={`text-field ${errors.shippingAddress ? 'is-invalid' : ''}`} placeholder="House name/no, Appartment/society, landmark" {...register('shippingAddress')} />
                                                    {/* <label className="sr-only" htmlFor="opt-st-address-extra" />
                                                    <input type="text" id="opt-st-address-extra" className="text-field" placeholder="Apartment, suite unit etc. (optional)"/> */}
                                                    {errors.shippingAddress && (
                                                        <div className="invalid-feedback">{errors.shippingAddress.message}</div>
                                                    )}
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <label htmlFor="postcode-extra">Postcode / Zip
                                                        <span className="astk">*</span>
                                                    </label>
                                                    <input type="text" id="postcode-extra" className={`text-field ${errors.shippingZipCode ? 'is-invalid' : ''}`} {...register('shippingZipCode')} />
                                                    {errors.shippingZipCode && (
                                                        <div className="invalid-feedback">{errors.shippingZipCode.message}</div>
                                                    )}
                                                </div>


                                                <div className="group-inline u-s-m-b-13">
                                                    <div className="group-1 u-s-p-r-16">
                                                        <label htmlFor="email-extra">Email address
                                                            <span className="astk">*</span>
                                                        </label>
                                                        <input type="text" id="email-extra" className={`text-field ${errors.shippingEmail ? 'is-invalid' : ''}`} {...register('shippingEmail')} />
                                                    </div>
                                                    {errors.shippingEmail && (
                                                        <div className="invalid-feedback">{errors.shippingEmail.message}</div>
                                                    )}
                                                    <div className="group-2">
                                                        <label htmlFor="phone-extra">Phone
                                                            <span className="astk">*</span>
                                                        </label>
                                                        <input type="text" id="phone-extra" className={`text-field ${errors.shippingPhoneNumber ? 'is-invalid' : ''}`} {...register('shippingPhoneNumber')} />
                                                    </div>
                                                    {errors.shippingPhoneNumber && (
                                                        <div className="invalid-feedback">{errors.shippingPhoneNumber.message}</div>
                                                    )}
                                                </div>
                                                {/* Form-Fields /- */}
                                            </div>
                                            <div>
                                                <label htmlFor="order-notes">Order Notes</label>
                                                <textarea className="text-area" id="order-notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} {...register('orderNotes')} />
                                            </div>
                                        </div>
                                        {/* Billing-&-Shipping-Details /- */}
                                        {/* Checkout */}
                                        <div className="col-lg-6">
                                            <h4 className="section-h4">Your Order</h4>
                                            <div className="order-table">
                                                <table className="u-s-m-b-13">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartData &&
                                                            cartData.map((Obj) => {
                                                                return productData.map((product) => {
                                                                    if (Obj.id === product.id) {
                                                                        return (
                                                                            <>
                                                                                <tr>
                                                                                    <td>
                                                                                        <h6 className="order-h6">{product.product_name}</h6>
                                                                                        <span className="order-span-quantity">x {Obj.qty}</span>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h6 className="order-h6">${product.price * Obj.qty}</h6>
                                                                                    </td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            })
                                                        }
                                                        <tr>
                                                            <td>
                                                                <h3 className="order-h3">Shipping</h3>
                                                            </td>
                                                            <td>
                                                                <h3 className="order-h3">${totalShippingCharges}</h3>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h3 className="order-h3">Tax</h3>
                                                            </td>
                                                            <td>
                                                                <h3 className="order-h3">${tax}</h3>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h3 className="order-h3">Total</h3>
                                                            </td>
                                                            <td>
                                                                <h3 className="order-h3">${grandTotal}</h3>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="u-s-m-b-13">
                                                    <input type="radio" className="radio-box" name="payment-method" id="cash-on-delivery" value={'Cash on Delivery'} {...register('paymentMethod')} />
                                                    <label className="label-text" htmlFor="cash-on-delivery">Cash on Delivery</label>
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <input type="radio" className="radio-box" name="payment-method" id="credit-card-stripe" value={'Credit Card (Stripe)'}  {...register('paymentMethod')} />
                                                    <label className="label-text" htmlFor="credit-card-stripe">Credit Card (Stripe)</label>
                                                </div>
                                                <div className="u-s-m-b-13">
                                                    <input type="radio" className="radio-box" name="payment-method" id="paypal" value={'Paypal'}  {...register('paymentMethod')} />
                                                    <label className="label-text" htmlFor="paypal">Paypal</label>
                                                </div>
                                                {errors.paymentMethod && (
                                                    <div className="invalid-feedback">{errors.paymentMethod.message}</div>
                                                )}
                                                <div className="u-s-m-b-13">
                                                    <input type="checkbox" className="check-box" id="accept" {...register('terms')} />
                                                    <label className="label-text no-color" htmlFor="accept">I’ve read and accept the
                                                        <a href="terms-and-conditions.html" className="u-c-brand">terms &amp; conditions</a>
                                                    </label>
                                                </div>
                                                <button type="submit" className="button button-outline-secondary">Place Order</button>
                                            </div>
                                        </div>
                                        {/* Checkout /- */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;

{/* <tr>
                                                            <td>
                                                                <h6 className="order-h6">Black Rock Dress with High Jewelery Necklace</h6>
                                                                <span className="order-span-quantity">x 1</span>
                                                            </td>
                                                            <td>
                                                                <h6 className="order-h6">$55.00</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="order-h6">Xiaomi Note 2 Black Color</h6>
                                                                <span className="order-span-quantity">x 1</span>
                                                            </td>
                                                            <td>
                                                                <h6 className="order-h6">$55.00</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="order-h6">Dell Inspiron 15</h6>
                                                                <span className="order-span-quantity">x 1</span>
                                                            </td>
                                                            <td>
                                                                <h6 className="order-h6">$55.00</h6>
                                                            </td>
                                                        </tr> */}