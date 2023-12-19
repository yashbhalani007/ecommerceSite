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

function Order(props) {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const [data, setData] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const handleFormSubmit = (data) => {
    // addCategoryData(data)
}

const handleEdit = (value) => {

}

const handleDelete = (value) => {
    console.log(value);
}

const handleCustomTabPannel = () =>{
    
  return (
      <> 
    <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}>
    <DataGrid
        rows={data}
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
    />
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
            <Tab label="Pending Order" {...a11yProps(0)} />
            <Tab label="Ready to Ship" {...a11yProps(1)} />
            <Tab label="Shipeed" {...a11yProps(2)} />
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

export default Order;
