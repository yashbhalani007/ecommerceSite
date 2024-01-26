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
import RotateLeftIcon  from '@mui/icons-material/RotateLeft';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import ArrowForwardIosIcon  from '@mui/icons-material/ArrowForwardIos';
import PaymentIcon from '@mui/icons-material/Payment';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import FeaturedVideoOutlinedIcon from '@mui/icons-material/FeaturedVideoOutlined';
import PendingIcon from '@mui/icons-material/Pending';
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
  console.log(value);
  const [data, setData] = React.useState(0);
  const dispatch = useDispatch();
  const productData = useSelector(state => state.products)
  console.log(productData.products);

  const returnArray = [

  ]

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

const handleCustomTabPannel = () => {

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
            <Tab label="Help" {...a11yProps(0)} />
            <Tab label="My Tickets" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        {handleCustomTabPannel()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        {handleCustomTabPannel()}
        </CustomTabPanel>
      </Box>

    
        <h5 style={{color : "black", fontSize : "17px"}}>Select Issue Category</h5>
        <div class="content-item row border">
            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px", height : "250px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <ReplayRoundedIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Returns/RTO & Exchange</h6>
                    </div>


                    <div style={{padding : "20px" , fontSize : "15px"}}>
                      <div class = "row">
                      <div class = "col-10">
                        <p style={{fontSize : "13px"}}>I have received wrong return</p>
                      </div>


                      <div class = "col-2">
                      <ArrowForwardIosIcon style= {{color : "#3c29b7",fontSize : "15px"}}/>
                      </div>

                    <span style={{borderStyle : "dashed 1px"}}></span>

                      </div>

                      <div class = "row">
                      <div class = "col-10">                      
                      <p style={{fontSize : "13px"}}> Item/s are missing in my return</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" ,fontSize : "15px"}}/>
                      </div>

                      </div>


                      <div class = "row">
                      <div class = "col-10">
                      <p style={{fontSize : "13px"}}>I have not received my Return/RTO shipment</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" , fontSize : "15px"}}/>
                      </div>
                      </div>  

                      <Link to="1">
                      <Button style = {{color : "#3c29b7" ,width : "100%"}}>View All</Button>
                      </Link>

                      <div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px", height : "250px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <ReplayRoundedIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Cateloging & Pricing</h6>
                    </div>

                    <div style={{padding : "20px" , fontSize : "15px"}}>
                      <div class = "row">
                      <div class = "col-10">
                        <p style={{fontSize :"13px"}}>My uploaded file is not live yet</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon style= {{color : "#3c29b7",fontSize : "15px"}}/>
                      </div>
                      </div>

                      <div class = "row">
                      <div class = "col-10">                      
                      <p style={{fontSize : "13px"}}> I want to edit catalog details</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" ,fontSize : "15px"}}/>
                      </div>



                      </div>


                      <div class = "row">
                      <div class = "col-10">
                      <p style={{fontSize : "13px"}}>I want catalog upload training</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" , fontSize : "15px"}}/>

                      </div>
                      <Link to ="2">
                      <Button style = {{color : "#3c29b7" ,width : "100%" , marginTop : "20px"}}>View All</Button>
                      </Link>

                      </div>  
                     



                      <div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px" , height : "300px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <ReplayRoundedIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Order & Delievery</h6>
                    </div>

                    <div style={{padding : "20px" , fontSize : "15px"}}>
                      <div class = "row">
                      <div class = "col-10">
                        <p style={{fontSize : "13px"}}>My orders are not picked up yet</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon style= {{color : "#3c29b7",fontSize : "15px"}}/>
                      </div>
                      </div>

                      <div class = "row">
                      <div class = "col-10">                      
                      <p style={{fontSize : "13px"}}>My order is picked up but still in ready to ship tab</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" ,fontSize : "15px"}}/>
                      </div>

                      </div>


                      <div class = "row">
                      <div class = "col-10">
                      <p style={{fontSize : "13px"}}>I want to know the delivery status of my order</p>
                      </div>

                      <div class = "col-2">
                      <ArrowForwardIosIcon  style= {{color : "#3c29b7" , fontSize : "15px"}}/>

                      </div>
                      <Link to= "3">
                      <Button style = {{color : "#3c29b7" ,width : "100%", marginTop : "20px"}}>View All</Button>
                      </Link>

                      </div>  
                     



                      <div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


            <div class="content-item row">
            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <PaymentIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Payment</h6>
                    </div>
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px" , marginLeft : "10px"}}>
                  <div class = "row">
                    <div class = "col-2">
                      <InventoryIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Inventory</h6>
                    </div>

                   
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px", marginLeft : "15px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <PersonIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Account</h6>
                    </div>

                   
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <FeaturedVideoOutlinedIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Advertisment</h6>
                    </div>

                   
                  </div>
                </div>
            </div>

            <div class="col-4" style={{ padding : "10px"}}>
                <div class="border" style={{ borderRadius: "7px", padding : "10px" , marginLeft : "13px"}}>
                  <div class = "row" >
                    <div class = "col-2">
                      <PendingIcon style= {{color : "#3c29b7"}}/>
                    </div>

                    <div class = "col-9" style={{marginTop : "4.8px"}}>
                      <h6 style={{color : "black", fontSize : "17px"}}>Others</h6>
                    </div>

                   
                  </div>
                </div>
            </div>
			</div>      
			</div>
    </>
  );
}

export default Inventory;
