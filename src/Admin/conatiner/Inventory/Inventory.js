import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CategoryForm from "../Category/CategoryForm";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/slice/product.slice";
import { SignalCellularNullRounded } from "@mui/icons-material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function Inventory(props) {
  const [value, setValue] = React.useState(0);
  const [productDatas, setProductDatas] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [clickedProduct, setClickedProduct] = useState([]);
  const [clickedsecondProduct, setClickedsecondProduct] = useState([]);
  const [clickedlowstock, setClickedlowstock] = useState([]);
  const dispatch = useDispatch();
  const productData = useSelector(state => state.products)

  const allproduct = productData.products;

  const uniqueProducts = productDatas.reduce((accumulator, currentProduct) => {

    const existingProduct = accumulator.find(
      (product) => product.group_id === currentProduct.group_id
    );

    if (!existingProduct) {
      accumulator.push(currentProduct);
    }

    return accumulator;
  }, []);

  console.log(uniqueProducts);

  const filteredProducts = uniqueProducts.filter(uniqueProducts => {
    return uniqueProducts.sizes.some(size => size.stock === 0);
  });

  const lowstockProducts = uniqueProducts.filter(uniqueProducts => {
    return uniqueProducts.sizes.some(size => size.stock > 0 && size.stock < 7);
  });

  console.log(lowstockProducts);

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    dispatch(getProduct());
  }, [])

  useEffect(() => {
    if (productData.products) {
      const filteredData = productData.products
        .filter((product) => product.supplier_id === currentUser)
        .filter((product) => product.fileurl); // Only include items with fileurl
      setProductDatas(filteredData);
    }
  }, [currentUser, productData.products])

  const getUser = async () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setCurrentUser(uid)
        } else {

        }
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFormSubmit = (data) => {
    // addCategoryData(data)
  }

  const handleDelete = (value) => {
    console.log(value);
  }


  const handleCustomTabPannel = () => {

  }

  const handleclick = (id) => {
    const Product = uniqueProducts.find((product) => product.id === id);
    const productsArray = [];

    Product.sizes.forEach((size) => {
      const clonedProduct = { ...Product };
      clonedProduct.sizes = [size];
      productsArray.push(clonedProduct);
    });

    setClickedProduct(productsArray)

  }

  const handlesecondclick = (id) => {
    const Product = uniqueProducts.find((product) => product.id === id);
    const productsArray = [];

    Product.sizes.forEach((size) => {
      const clonedProduct = { ...Product };
      clonedProduct.sizes = [size];
      productsArray.push(clonedProduct);
    });

    setClickedsecondProduct(productsArray)
  }

  const handlesLowstock = (id) => {
    const Product = uniqueProducts.find((product) => product.id === id);
    const productsArray = [];

    Product.sizes.forEach((size) => {
      const clonedProduct = { ...Product };
      clonedProduct.sizes = [size];
      productsArray.push(clonedProduct);
    });

    setClickedlowstock(productsArray)
  }

  console.log(clickedProduct);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Stock(1)" {...a11yProps(0)} />
            <Tab label="Out of Stock(0)" {...a11yProps(1)} />
            <Tab label="Low Stock(0)" {...a11yProps(2)} />
            <Tab label="Block Stock(0)" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={0} index={0}>
          {handleCustomTabPannel()}
        </CustomTabPanel>
      </Box>
      <Container>
        <div className="mainbox">

          <div className="box1">
            {
              value === 0 ?

                uniqueProducts.map((v) => {

                  return (
                    <>
                      <div className="product-container new_style list-style">
                        <div className="product-item new-product-itam col-lg-4 col-md-5 col-sm-5">
                          <div className="new-item">
                            <div className="new-image-container">
                              <a className="item-img-wrapper-link" onClick={() => handleclick(v.id)}>
                                <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                              </a>
                            </div>
                            <div className="item-content">
                              <div className="what-product-is">
                                <h6 className="new-tem-title">
                                  <a href="single-product.html">{v.product_name}</a>
                                </h6>
                                <div className="item-stars">
                                  <span>Group-Id : {v.group_id}</span>
                                </div>
                              </div>
                              <div className="price-template">
                                <div className="new-item-new-price">
                                  <span>Category : {v.subcategory}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )

                }) : null
            }
          </div>
          <div className="box2">
            <Row>
              {
                value === 0 ?
                  clickedProduct.length > 0 && clickedProduct.map((v) => {
                    return (
                      <>
                        <div className="productsize">
                          <div key={v.id} className="new-image-container">
                            <a className="item-img-wrapper-link">
                              <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                            </a>
                          </div>

                          <div className="item-newstar">
                            <span>product name: {v.product_name}</span>
                            <span>SKU: {v.sku}</span>
                            <span>Group-Id : {v.group_id}</span>
                          </div>

                          <div className="item-newstar">
                            {
                              v.sizes.map((val) => {
                                console.log(val);
                                return (
                                  <>
                                    <span>{`${val.size}  -  ${val.stock} `}</span>
                                  </>
                                )
                              })
                            }
                          </div>

                          <button className="button button-outline-secondary">Edit</button>
                        </div>



                      </>
                    );
                  }) : null
              }
            </Row>
          </div>
        </div>

      </Container>

      <Container>
        <div className="mainbox">

          <div className="box1">
            {
              value === 1 ?

                filteredProducts.map((v) => {

                  return (
                    <>
                      <div className="product-container new_style list-style">
                        <div className="product-item new-product-itam col-lg-4 col-md-5 col-sm-5">
                          <div className="new-item">
                            <div className="new-image-container">
                              <a className="item-img-wrapper-link" onClick={() => handlesecondclick(v.id)}>
                                <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                              </a>
                            </div>
                            <div className="item-content">
                              <div className="what-product-is">
                                <h6 className="new-tem-title">
                                  <a href="single-product.html">{v.product_name}</a>
                                </h6>
                                <div className="item-stars">
                                  <span>Group-Id : {v.group_id}</span>
                                </div>
                              </div>
                              <div className="price-template">
                                <div className="new-item-new-price">
                                  <span>Category : {v.subcategory}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )

                }) : null
            }
          </div>
          <div className="box2">
            <Row>
              {
                value === 1 ?
                  clickedsecondProduct.length > 0 && clickedsecondProduct.map((v) => {
                    return (
                      <>
                        <div className="productsize">
                          <div key={v.id} className="new-image-container">
                            <a className="item-img-wrapper-link">
                              <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                            </a>
                          </div>

                          <div className="item-newstar">
                            <span>product name: {v.product_name}</span>
                            <span>SKU: {v.sku}</span>
                            <span>Group-Id : {v.group_id}</span>
                          </div>

                          <div className="item-newstar">
                            {
                              v.sizes.map((val) => {
                                console.log(val);
                                return (
                                  <>
                                    <span>{`${val.size}  -  ${val.stock} `}</span>
                                  </>
                                )
                              })
                            }
                          </div>

                          <button className="button button-outline-secondary">Edit</button>
                        </div>



                      </>
                    );
                  }) : null
              }
            </Row>
          </div>
        </div>

      </Container>

      <Container>
        <div className="mainbox">

          <div className="box1">
            {
              value === 2 ?

                lowstockProducts.map((v) => {

                  return (
                    <>
                      <div className="product-container new_style list-style">
                        <div className="product-item new-product-itam col-lg-4 col-md-5 col-sm-5">
                          <div className="new-item">
                            <div className="new-image-container">
                              <a className="item-img-wrapper-link" onClick={() => handlesLowstock(v.id)}>
                                <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                              </a>
                            </div>
                            <div className="item-content">
                              <div className="what-product-is">
                                <h6 className="new-tem-title">
                                  <a href="single-product.html">{v.product_name}</a>
                                </h6>
                                <div className="item-stars">
                                  <span>Group-Id : {v.group_id}</span>
                                </div>
                              </div>
                              <div className="price-template">
                                <div className="new-item-new-price">
                                  <span>Category : {v.subcategory}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )

                }) : null
            }
          </div>
          <div className="box2">
            <Row>
              {
                value === 2 ?
                  clickedlowstock.length > 0 && clickedlowstock.map((v) => {
                    return (
                      <>
                        <div className="productsize">
                          <div key={v.id} className="new-image-container">
                            <a className="item-img-wrapper-link">
                              <img className="new-img-fluid" src={v.fileurl[0]} alt="Product" />
                            </a>
                          </div>

                          <div className="item-newstar">
                            <span>product name: {v.product_name}</span>
                            <span>SKU: {v.sku}</span>
                            <span>Group-Id : {v.group_id}</span>
                          </div>

                          <div className="item-newstar">
                            {
                              v.sizes.map((val) => {
                                console.log(val);
                                return (
                                  <>
                                    <span>{`${val.size}  -  ${val.stock} `}</span>
                                  </>
                                )
                              })
                            }
                          </div>

                          <button className="button button-outline-secondary">Edit</button>
                        </div>



                      </>
                    );
                  }) : null
              }
            </Row>
          </div>
        </div>

      </Container>

    </>
  );
}

export default Inventory;
