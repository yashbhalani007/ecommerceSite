import React from "react";
import SupportTab from "./SupportTab";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

function Support1(props) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Use history.push to redirect to the desired path
    navigate("/admin/support");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h5 style={{ color: "black" }}>Support</h5>

      <SupportTab />

      <div style={{ display: "flex" }}>
        <div onClick={handleRedirect}>
          <p style={{ marginLeft: "10px" }}>Help</p>
        </div>

        <ArrowForwardIosIcon style={{ fontSize: "20px" }} />
        <p className="return & rto" style={{ marginLeft: "10px" }}>
          Return & RTO Exchange
        </p>
      </div>

      <div style={{display : "flex"}}>
       
          <ReplayRoundedIcon style={{ color: "#3c29b7" }} />

          <h6 style={{ color: "black", fontSize: "17px" , marginLeft : "10px" }}>
            Returns/RTO & Exchange
          </h6>
      </div>
    </div>
  );
}

export default Support1;
