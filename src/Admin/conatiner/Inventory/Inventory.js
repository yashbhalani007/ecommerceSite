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
  // const [data, setData] = React.useState(0);
  const [productDatas, setProductDatas] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [clickedProduct, setClickedProduct] = useState([]);
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

  console.log(filteredProducts);

  // const fData = productData.products.filter((v) => v.status == 'approve');
  // console.log(fData);

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
    setClickedProduct([Product])
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
                      <div className="product-container list-style">
                        <div className="product-item new-product-itam col-lg-4 col-md-5 col-sm-5">
                          <div className="new-item">
                            <div className="new-image-container">
                              <a className="item-img-wrapper-link" onClick={() => handleclick(v.id)}>
                                <img className="new-img-fluid" src={v.fileurl} alt="Product" />
                              </a>
                            </div>
                            <div className="item-content">
                              <div className="what-product-is">
                                <h6 className="new-tem-title">
                                  <a href="single-product.html">Mischka Plain Men T-Shirt</a>
                                </h6>
                                <div className="item-stars">
                                  <span>Group-Id : 1234567</span>
                                </div>
                              </div>
                              <div className="price-template">
                                <div className="new-item-new-price">
                                  <span>Category : T-Shirts</span>
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
                clickedProduct.length > 0 && clickedProduct.map((v) => {
                  return (
                    <>
                      <Col key={v.id}>
                        <div className="new-image-container">
                          <a className="item-img-wrapper-link">
                            <img className="new-img-fluid" src={v.fileurl} alt="Product" />
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="item-stars">
                          <span>Description: {v.description}</span>
                        </div>
                      </Col>

                      <Col>
                        {/* {
                          v.sizes.map((val) => {
                            console.log(val);
                            return (
                              <>
                                  <span style={{ textTransform: 'uppercase', display: 'block', fontSize: '14px' }}>{`${val.size}  -  ${val.stock} `}</span>
                              </>
                          )
                          })
                        } */}
                      </Col>

                    </>
                  );
                })
              }


            </Row>
          </div>
        </div>

      </Container>

      <Row>
        <Col className="contentTop">

          {
            value === 1 ?

              filteredProducts.map((val) => {
                console.log(val);
                return (
                  <div className="row product-container list-style">
                    <div className="product-item new-product-itam col-lg-4 col-md-5 col-sm-5">
                      <Link>
                        <div className="new-item">
                          <div className="new-image-container">
                            <a className="item-img-wrapper-link">
                              <img className="new-img-fluid" src={val.fileurl} alt="Product" />
                            </a>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <h6 className="new-tem-title">
                                <a>Mischka Plain Men T-Shirt</a>
                              </h6>
                              <div className="item-stars">
                                <span>Group-Id : 1234567</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="new-item-new-price">
                                <span>Category : T-Shirts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )

              }) : null
          }




        </Col>
      </Row>

    </>
  );
}

export default Inventory;
