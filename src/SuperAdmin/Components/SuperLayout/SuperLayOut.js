import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import Logo from '../../../user/container/Images/Logo';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IosShareIcon from '@mui/icons-material/IosShare';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function SuperLayOut({ children }) {

    let [toggle, setToogle] = useState(true);

    const handleToggleSwitch = () => {
        setToogle(!toggle)
    }

    return (
        <div>
            <nav className={toggle ? 'sidebar' : 'close'}>
                <div className="logo-name">
                    <div className="logo-image">
                        {/* <img src="assets/Images/logo.png" alt /> */}
                        <Logo />
                    </div>
                    <span className="logo_name">CodingLab</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li><Link to="/super/">
                            {/* <i className="uil uil-estate" /> */}
                            <DashboardIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Dashboard</span>
                        </Link></li>
                        <li><NavLink to="/super/supplier">
                            {/* <i className="uil uil-files-landscapes" /> */}
                            <SupervisedUserCircleIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Supplier</span>
                        </NavLink></li>
                        <li><NavLink to="/super/pro-requests">
                            {/* <i className="uil uil-files-landscapes" /> */}
                            <InventoryIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Product Requests</span>
                        </NavLink></li>
                        <li><NavLink to="/super/consumer">
                            {/* <i className="uil uil-files-landscapes" /> */}
                            <PeopleIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Consumer</span>
                        </NavLink></li>
                        <li><NavLink to="/super/supercategory">
                            {/* <i className="uil uil-files-landscapes" /> */}
                            <CategoryIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Category</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            {/* <i className="uil uil-chart" /> */}
                            <AnalyticsIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Analytics</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            {/* <i className="uil uil-thumbs-up" /> */}
                            <ThumbUpAltIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Like</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            {/* <i className="uil uil-comments" /> */}
                            <CommentIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Comment</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            {/* <i className="uil uil-share" /> */}
                            <IosShareIcon style={{marginRight: '18px', fontSize: '28px',color: '#707070'}}/>
                            <span className="link-name">Share</span>
                        </NavLink></li>
                    </ul>
                    <ul className="logout-mode">
                        <li><a href="#">
                            {/* <i className="uil uil-signout" /> */}
                            <ExitToAppIcon style={{marginRight: '10px', fontSize: '26px',color: '#707070'}}/>
                            <span className="link-name">Logout</span>
                        </a></li>
                        <li className="mode">
                            <a href="#">
                                {/* <i className="uil uil-moon" /> */}
                                <DarkModeIcon style={{marginRight: '10px', fontSize: '26px',color: '#707070'}}/>
                                <span className="link-name">Dark Mode</span>
                            </a>
                            <div className="mode-toggle">
                                <span className="switch" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav >
            <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle" onClick={() => handleToggleSwitch()} />
                    {/* <div className="search-box">
                        <i className="uil uil-search" />
                        <input type="text" placeholder="Search here..." />
                    </div> */}
                    <img src="assets/images/admin/profile.jpg" alt />
                </div>
                {children}
            </section>
        </div >

    );
}

export default SuperLayOut;