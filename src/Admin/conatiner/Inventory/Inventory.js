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
  console.log(value);
  const [data, setData] = React.useState(0);
  const dispatch = useDispatch();
  const productData = useSelector(state => state.products)

  const allproduct = productData.products;

  console.log(allproduct);

  const uniqueProducts = allproduct.reduce((accumulator, currentProduct) => {
    // Check if the current product's group_id is already in the accumulator
    const existingProduct = accumulator.find(
      (product) => product.group_id === currentProduct.group_id
    );

    // If not found, add the current product to the accumulator
    if (!existingProduct) {
      accumulator.push(currentProduct);
    }

    return accumulator;
  }, []);

  console.log(uniqueProducts);

  // const fData = productData.products.filter((v) => v.status == 'approve');
  // console.log(fData);

  useEffect(() => {
    dispatch(getProduct());
  }, [productData.products])


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

    return (
      <>
        {/* <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}> */}
        {/* <DataGrid
        rows={fData}
        columns={ [
            {
                field: 'category',
                headerName: 'Category Name',
                width: 150,
                editable: true,
            },
            {
                field: 'description',
                headerName: 'Description',
                width: 300,
                editable: true,
            },
            {
                field: 'artical',
                headerName: 'Artical',
                type: 'number',
                width: 110,
                editable: true,
            },
            {
                field: 'icon',
                headerName: 'Icon',
                type: 'file',
                width: 110,
                editable: true,
            },
            {
                field: 'poster',
                headerName: 'Poster',
                type: 'file',
                width: 110,
                editable: true,
            },
            {
                field: 'action',
                headerName: 'Action',
                renderCell: (params) => (
                    <strong>
                        <EditIcon id='editico' style={{ color: 'blue' }} onCellClick={(e) => handleEdit(e.row)} />
                        <DeleteIcon id='deleteico' style={{ color: 'red' }} onClick={(e) => handleDelete(e.data)} />
                    </strong>
                )
            }
    
        ]}
        // onCellClick={(e) => handleData(e)}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 5,
                },
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
    /> */}
        {/* </Box> */}

      </>
    )
  }



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

      {
        value === 0 ?
        
          uniqueProducts.map((v) => {
            return (
              <div className="contentTop">
                <div className="row product-container list-style col-6">
                  <div className="product-item new-product-itam col-lg-4 col-md-6 col-sm-6">
                    <div className="new-item">
                      <div className="new-image-container">
                        <a className="item-img-wrapper-link" href="single-product.html">
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

              </div>
            )

          })



          : null
      }



    </>
  );
}

export default Inventory;
