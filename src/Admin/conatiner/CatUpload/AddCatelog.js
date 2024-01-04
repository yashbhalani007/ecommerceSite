import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../../../redux/slice/category.slice';
import { getSubCategoryData } from '../../../redux/slice/subcategory.slice';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';

function AddCatelog({ data, setData, isSelected, imgFile }) {
  console.log(imgFile);
  const category = useSelector(state => state.category)
  const subcategory = useSelector(state => state.subcategory)
  const [fileInputs, setFileInputs] = useState([{ id: 1, selectedFile: imgFile }, { id: 2, selectedFile: null }]);
  const [categorys, setCategorys] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = () => {
      dispatch(getCategoryData())
      dispatch(getSubCategoryData())
    }
    getData()
    setValues(data)
  }, [])


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleFileChange = (id) => (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    setFileInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, selectedFile: file } : input
      )
    );

    // Add a new file input when a file is selected
    setFileInputs((prevInputs) => [
      ...prevInputs,
      { id: prevInputs.length + 1, selectedFile: null },
    ]);
  };

  // const change = (e) => {
  //   setData({ ...data, name: e.target.value })
  //   handleChange()
  // }

  const productSchema = yup.object({
    product_name: yup.string().required("Name is required"),
    sku: yup.string().required(),
    group_id: yup.string().required(),
    description: yup.string().max(1000).required(),
    Images: yup.array().of(
      yup.object().shape({
        url: yup.string().url('Invalid URL').required('Image URL is required'),
        alt: yup.string().required('Alt text is required'),
      })
    ),
    color: yup.string(),
    sizes: yup.array().of(yup.string()),
    price: yup.number().positive().required(),
    mrp: yup.number().positive().required(),
    stock: yup.number().integer().min(0).required(),
    category: yup.string().required(),
    subcategory: yup.string().required(),
    status: yup.string().required(),
    tags: yup.array().of(yup.string()),
    shipping_type: yup.string().required(),
    attributes: yup.string().required(),
  });


  const obj = {
    product_name: '',
    sku: '',
    group_id: '',
    description: '',
    Images: '',
    color: '',
    sizes: '',
    price: '',
    mrp: '',
    stock: '',
    category: '',
    subcategory: '',
    status: '',
    tags: '',
    shipping_type: '',
    attributes: ''
  }

  const formik = useFormik({
    initialValues: obj,
    validationSchema: productSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  const { handleBlur, handleChange, handleReset, handleSubmit, errors, values, setValues, touched } = formik

  // useEffect(() => {
  //   const productNameInput = document.getElementById('ecommerce-product-name');
  //   if (productNameInput) {
  //     productNameInput.focus();
  //   }
  // }, [values.product_name]);

  return (
    <div className="content-wrapper">
      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">Catalog upload /</span><span> Add Product</span>
        </h4>
        <div className="app-ecommerce">
          {/* Add Product */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
            <div className="d-flex flex-column justify-content-center">
              <h4 className="mb-1 mt-3">Add a new Product</h4>
              <p className="text-muted">Orders placed across your store</p>
            </div>
            <div className="d-flex align-content-center flex-wrap gap-3">
              <button className="btn btn-primary">Discard</button>
              <button className="btn btn-primary">Save draft</button>
              <button type="submit" className="btn btn-primary">Publish product</button>
            </div>
          </div>
          <div className="row">
            {/* First column*/}
            {/* Form Start */}
            <form className="form-repeater" onSubmit={handleSubmit}>
              <div className="col-12 col-lg-8">
                {/* Product Information */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="card-tile mb-0">Product information</h5>
                  </div>

                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="ecommerce-product-name">Name</label>
                      <input type="text" className="form-control" id="ecommerce-product-name" placeholder="Product title" aria-label="Product title"
                        name="product_name"
                        value={data.product_name}
                        onBlur={handleBlur}
                        onChange={(e) => {setData({ ...data, product_name: e.target.value })}}
                      />
                      {errors.product_name ? <div>{errors.product_name}</div> : null}
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label className="form-label" htmlFor="ecommerce-product-sku">SKU</label>
                        <input type="text" className="form-control" id="ecommerce-product-sku" placeholder="SKU" aria-label="Product SKU"
                          name="sku"
                        />
                      </div>
                      <div className="col">
                        <label className="form-label" htmlFor="ecommerce-product-barcode">Group id</label>
                        <input type="text" className="form-control" id="ecommerce-product-barcode" placeholder="0123-4567" name="group_id" aria-label="Product barcode" />
                      </div>
                    </div>
                    {/* Description */}
                    <div>
                      <label className="form-label">Description</label>
                      <br></br>
                      <textarea rows={"10"} cols={"77"} style={{ padding: '15px' }} name='description' />
                    </div>
                  </div>
                </div>
                {/* /Product Information */}
                {/* Variants */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Variants</h5>
                  </div>
                  <div className="card-body">
                    <div data-repeater-list="group-a">
                      <div data-repeater-item>
                        <label className="form-label" htmlFor="form-repeater-1-1">Images</label>
                        <div className='addProduct'>
                          {fileInputs.map((input) => (
                            <div key={input.id}>
                              <input
                                type="file"
                                id={`fileInput${input.id}`}
                                onChange={handleFileChange(input.id)}
                                style={{ display: 'none' }}
                              />
                              <label htmlFor={`fileInput${input.id}`} className="file-input-label">
                                {input.selectedFile ? 'Change Image' : 'Choose Image'}
                              </label>

                              {input.selectedFile && (
                                <div className="image-container" style={{ margin: '0 11px' }}>
                                  <img src={URL.createObjectURL(input.selectedFile)} alt="Selected Image" id='selected-image' />
                                </div>

                              )}

                            </div>
                          ))}
                        </div>
                        <div className="row">
                          <div className="mb-3 col-4">
                            <label className="form-label" htmlFor="form-repeater-1-1">Color</label>
                            <input type="text" className="form-control" id="ecommerce-product-color" placeholder="color" name="productSku" aria-label="Product SKU" />
                          </div>
                          <div className="mb-3 col-4">
                            <label className="form-label" htmlFor="form-repeater-1-1">Sizes</label>
                            <div className="dropdown">
                              <div className="dropdown-toggle" onClick={toggleDropdown}>
                                Select Sizes
                              </div>
                              {isOpen && (
                                <div className="dropdown-content">
                                  {sizes.map((size) => (
                                    <label key={size} className='labelcheck'>
                                      <input
                                        type="checkbox"
                                        value={size}
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => handleCheckboxChange(size)}
                                      />
                                      {size}
                                    </label>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Pricing Card */}
                    {/* Base Price */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="ecommerce-product-price">Price</label>
                      <input type="number" className="form-control" id="ecommerce-product-price" placeholder="Price" name="productPrice" aria-label="Product price" />
                    </div>
                    {/* Discounted Price */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="ecommerce-product-discount-price">MRP</label>
                      <input type="number" className="form-control" id="ecommerce-product-discount-price" placeholder="Discounted Price" name="productDiscountedPrice" aria-label="Product discounted price" />
                    </div>
                    {/* /Pricing Card */}
                    <div>
                      <button className="btn btn-primary" data-repeater-create>
                        Add another option
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Variants */}
                {/* Inventory */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Shipping</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {/* Navigation */}
                      {/* <div className="col-12 col-md-4 mx-auto card-separator">
                      <div className="d-flex justify-content-between flex-column mb-3 mb-md-0 pe-md-3">
                        <ul className="nav nav-align-left nav-pills flex-column">
                          <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#shipping">
                              <i className="bx bx-car me-2" />
                              <span className="align-middle">Shipping</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                      {/* /Navigation */}
                      {/* Options */}
                      <div className="col-12 col-md-8 pt-4 pt-md-0">
                        <div className="tab-content p-0 pe-md-5 ps-md-3">
                          {/* Restock Tab */}
                          {/* <div className="tab-pane fade show active" id="restock" role="tabpanel">
                          <h5>Options</h5>
                          <label className="form-label" htmlFor="ecommerce-product-stock">Add to Stock</label>
                          <div className="row mb-3 g-3">
                            <div className="col-12 col-sm-9">
                              <input type="number" className="form-control" id="ecommerce-product-stock" placeholder="Quantity" name="quantity" aria-label="Quantity" /></div>
                            <div className="col-12 col-sm-3">
                              <button className="btn btn-primary"><i className="bx bx-check me-2" />Confirm</button>
                            </div>
                          </div>
                          <div>
                            <h6>Product in stock now: <span className="text-muted">54</span></h6>
                            <h6>Product in transit: <span className="text-muted">390</span></h6>
                            <h6>Last time restocked: <span className="text-muted">24th June, 2023</span></h6>
                            <h6>Total stock over lifetime: <span className="text-muted">2430</span></h6>
                          </div>
                        </div> */}
                          {/* Shipping Tab */}
                          <div className="tab-pane fade" id="shipping" role="tabpanel" style={{ display: 'block !important' }}>
                            <h5 className="mb-4">Shipping Type</h5>
                            <div>
                              <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="shippingType" id="seller" />
                                <label className="form-check-label" htmlFor="seller">
                                  <span className="mb-1 h6">Fulfilled by Seller</span>
                                  <small className="text-muted">You'll be responsible for product delivery.<br />
                                    Any damage or delay during shipping may cost you a Damage fee.</small>
                                </label>
                              </div>
                              <div className="form-check mb-5">
                                <input className="form-check-input" type="radio" name="shippingType" id="companyName" defaultChecked />
                                <label className="form-check-label" htmlFor="companyName">
                                  <span className="mb-1 h6">Fulfilled by Company name &nbsp;<span className="badge rounded-2 badge-warning bg-label-warning fs-tiny py-1">RECOMMENDED</span></span>
                                  <br /><small className="text-muted">Your product, Our responsibility.<br />
                                    For a measly fee, we will handle the delivery process for you.</small>
                                </label>
                              </div>
                              <p className="mb-0">See our <a href="javascript:void(0);">Delivery terms and conditions</a> for details</p>
                            </div>
                          </div>
                          {/* Global Delivery Tab */}
                          {/* <div className="tab-pane fade" id="global-delivery" role="tabpanel"> */}
                          {/* <h5 className="mb-4">Global Delivery</h5> */}
                          {/* Worldwide delivery */}
                          {/* <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="globalDel" id="worldwide" />
                            <label className="form-check-label" htmlFor="worldwide">
                              <span className="mb-1 h6">Worldwide delivery</span>
                              <small className="text-muted">Only available with Shipping method:
                                <a href="javascript:void(0);">Fulfilled by Company name</a></small>
                            </label>
                          </div> */}
                          {/* Global delivery */}
                          {/* <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="globalDel" defaultChecked />
                            <label className="form-check-label w-75 pe-5" htmlFor="country-selected">
                              <span className="mb-2 h6">Selected Countries</span>
                              <input type="text" className="form-control" placeholder="Type Country name" id="country-selected" />
                            </label>
                          </div> */}
                          {/* Local delivery */}
                          {/* <div className="form-check">
                            <input className="form-check-input" type="radio" name="globalDel" id="local" />
                            <label className="form-check-label" htmlFor="local">
                              <span className="mb-1 h6">Local delivery</span>
                              <small className="text-muted">Deliver to your country of residence :
                                <a href="javascript:void(0);">Change profile address</a></small>
                            </label>
                          </div> */}
                          {/* </div> */}
                          {/* Attributes Tab */}
                          <div className="tab-pane fade" id="attributes" role="tabpanel">
                            <h5 className="mb-4">Attributes</h5>
                            <div>
                              {/* Fragile Product */}
                              <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" defaultValue="fragile" id="fragile" />
                                <label className="form-check-label" htmlFor="fragile">
                                  <span className="mb-0 h6">Fragile Product</span>
                                </label>
                              </div>
                              {/* Biodegradable */}
                              {/* <div className="form-check mb-3">
                              <input className="form-check-input" type="checkbox" defaultValue="biodegradable" id="biodegradable" />
                              <label className="form-check-label" htmlFor="biodegradable">
                                <span className="mb-0 h6">Biodegradable</span>
                              </label>
                            </div> */}
                              {/* Frozen Product */}
                              {/* <div className="form-check mb-3">
                              <input className="form-check-input" type="checkbox" defaultValue="frozen" />
                              <label className="form-check-label w-75 pe-5" htmlFor="frozen">
                                <span className="mb-1 h6">Frozen Product</span>
                                <input type="number" className="form-control" placeholder="Max. allowed Temperature" id="frozen" />
                              </label>
                            </div> */}
                              {/* Exp Date */}
                              <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" defaultValue="expDate" id="expDate" />
                                <label className="form-check-label w-75 pe-5" htmlFor="date-input">
                                  <span className="mb-1 h6">Expiry Date of Product</span>
                                  <input type="date" className="product-date form-control" id="date-input" />
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* /Attributes Tab */}
                        </div>
                      </div>
                      {/* /Options*/}
                    </div>
                  </div>
                </div>
                {/* /Inventory */}
              </div>
              {/* /Second column */}
              {/* Second column */}
              <div className="col-12 col-lg-4">
                {/* Pricing Card */}
                {/* <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Pricing</h5>
                </div>
                <div className="card-body"> */}
                {/* Base Price */}
                {/* <div className="mb-3">
                    <label className="form-label" htmlFor="ecommerce-product-price">Price</label>
                    <input type="number" className="form-control" id="ecommerce-product-price" placeholder="Price" name="productPrice" aria-label="Product price" />
                  </div> */}
                {/* Discounted Price */}
                {/* <div className="mb-3">
                    <label className="form-label" htmlFor="ecommerce-product-discount-price">MRP</label>
                    <input type="number" className="form-control" id="ecommerce-product-discount-price" placeholder="Discounted Price" name="productDiscountedPrice" aria-label="Product discounted price" />
                  </div>
                </div>
              </div> */}
                {/* /Pricing Card */}

                {/* Organize Card */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Organize</h5>
                  </div>
                  <div className="card-body">
                    {/* Vendor */}
                    <div className="mb-3 col ecommerce-select2-dropdown">
                      <label className="form-label mb-1" htmlFor="vendor">
                        Category
                      </label>
                      <select id="vendor" className="select2 form-select" data-placeholder="Select Vendor" onChange={(e) => setCategorys(e.target.value)}>
                        <option value>Select Category</option>
                        {
                          category.category.map((v) => {
                            return (
                              <option value={v.category}>{v.category}</option>
                            )
                          })
                        }
                      </select>
                    </div>

                    {/* Category */}
                    <div className="mb-3 col ecommerce-select2-dropdown">
                      <label className="form-label mb-1 d-flex justify-content-between align-items-center" htmlFor="category-org">
                        <span>Subcategory</span>
                      </label>
                      <select id="category-org" className="select2 form-select" data-placeholder="Select Category">
                        <option value>Select Subcategory</option>
                        {
                          subcategory.subcategory.map((v) => {
                            if (categorys === v.category) {
                              return (
                                <option value={v.subcategory}>{v.subcategory}</option>
                              )
                            }
                          })
                        }
                      </select>
                    </div>
                    {/* Status */}
                    <div className="mb-3 col ecommerce-select2-dropdown">
                      <label className="form-label mb-1" htmlFor="status-org">Status
                      </label>
                      <select id="status-org" className="select2 form-select" data-placeholder="Published">
                        <option value>None</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    {/* Tags */}
                    <div className="mb-3">
                      <label htmlFor="ecommerce-product-tags" className="form-label mb-1">Tags</label>
                      <input id="ecommerce-product-tags" className="form-control" name="ecommerce-product-tags" aria-label="Product Tags" />
                    </div>
                  </div>
                </div>
                {/* /Organize Card */}
              </div>
              {/* /Second column */}
            </form>
          </div>
        </div>
      </div></div >




  );
}

export default AddCatelog;