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
  console.log(productData.products);

  const fData = productData.products.filter((v) => v.status == 'approve');
  console.log(fData);

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

const handleCustomTabPannel = () =>{
    
  return (
      <> 
    <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}>
    
</Box>

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
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        {handleCustomTabPannel()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        {handleCustomTabPannel()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        {handleCustomTabPannel()}
        </CustomTabPanel>
      </Box>

      <div className="contentTop col-4"></div>
     
    </>
  );
}

export default Inventory;
