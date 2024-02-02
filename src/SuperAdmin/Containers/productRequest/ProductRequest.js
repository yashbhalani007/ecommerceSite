import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, updateProduct } from '../../../redux/slice/product.slice';
import { getUsersData } from '../../../redux/slice/user.slice';
import { ButtonGroup, Drawer } from '@mui/joy';
import ModalClose from '@mui/joy/ModalClose';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import BlockIcon from '@mui/icons-material/Block';
import { CloseOutlined } from '@mui/icons-material';

function ProductRequest(props) {
    const [state, setState] = React.useState(false);
    const [data, setData] = useState([])
    const [clickProduct, setClickProduct] = useState([])
    const [clickSize, setClickSize] = useState([])
    const [fileUrl, setFileUrl] = useState([])
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [fdata, setFdata] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const number = Math.floor(Math.random() * 100000)

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUsersData())
    }, [dispatch])

    useEffect(() => {
        setData(products.products)
    }, [products.products])


    const toggleDrawer = (open, data) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
        console.log(data);
        setClickProduct(data)
        setClickSize(data.sizes)
        setFileUrl(data.fileurl)
    };

    let targetGroupId;
    if (fdata.length > 0) {
        targetGroupId = fdata[0].group_id;
    }

    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };
    const handleAction = async (data, action) => {
        // const docRef = doc(db, "users", data.uid);

        // Set the "capital" field of the city 'DC'
        // await updateDoc(docRef, {...data,emailVerified: true});
        // dispatch(updateUserData(data))
        dispatch(updateProduct({ ...data, status: action }))
    }

    const handleFilter = (value) => {
        console.log(value);
        let filterData = products.products.filter((product) => product.product_name.toLowerCase().includes(value.toLowerCase()) || product.supplier_id.toLowerCase().includes(value.toLowerCase()) || product.category.toLowerCase().includes(value.toLowerCase()) || product.subcategory.toLowerCase().includes(value.toLowerCase()) || product.status.toLowerCase().includes(value.toLowerCase()))

        setFilteredData(filterData)
    }
    console.log(clickProduct);

    const hasImages = fileUrl.length > 0;
    const FinalData = filteredData.length > 0 ? filteredData : data

    return (
        <div >
            {/* <br></br>
            <br></br>
            <br></br> */}
            <div style={{ width: '50%', height: '12px !important', textAlign: 'center', margin: '50px auto' }}>
                <TextField
                    label="Search input"
                    id='searchB'
                    style={{ width: '80%' }}
                    onChange={(e) => handleFilter(e.target.value)}
                />
                <select style={{ height: '42px', padding: '7px', marginLeft: '7px', borderColor: 'grey', borderRadius: '3px' }} onChange={(e) => handleFilter(e.target.value)}>
                    <option value='0'>All</option>
                    <option value='approve'>Approved</option>
                    <option value='pending'>Requests</option>
                    <option value='error'>Error</option>
                </select>
            </div>
            <div style={{ marginTop: '35px' }}>
                {
                    FinalData.map((v) => {
                        return users.users.map((user) => {
                            // const usersMap = new Map(users.users.map(user => [user.email, user]));
                            // const user = usersMap.get(v.supplier_email);
                            if (user.email === v.supplier_email) {
                                return (
                                    <List key={`product_request_${number}`} sx={{ width: '90%', bgcolor: 'background.paper' }} >
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar id='avatarProduct'>
                                                <img src={v.fileurl[0]} style={{ width: '100%', height: '100%', borderRadius: '5px', backgroundSize: 'cover' }} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                // onClick={() => handleClickOpen(v.email)}
                                                style={{ cursor: 'pointer', marginLeft: '10px', textAlign: 'left' }}
                                                onClick={toggleDrawer(true, { ...v, user_id: user.id })}
                                                primary={v.product_name}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            DID:
                                                        </Typography>
                                                        {user.email == v.supplier_email ? " " + user.id : 'not Available'}
                                                        <br></br>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Supplier id:
                                                        </Typography>
                                                        {" " + v.supplier_id}
                                                        <br></br>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Categorys:
                                                        </Typography>
                                                        {" " + v.category + '/' + v.subcategory}
                                                    </React.Fragment>
                                                }
                                            />


                                            {/* {
                                                v.status === 'approve' ?
                                                    <Button color="secondary" style={{ margin: 'auto 5px', color: 'green', fontSize: '15px' }}>Approved</Button> : v.status !== 'error' ?
                                                        <>
                                                            <Button variant="outlined" color="success" style={{ margin: 'auto 5px' }} onClick={() => handleAction(v, 'approve')}>
                                                                Approve
                                                            </Button>
                                                            <Button variant="outlined" color="error" style={{ margin: 'auto 5px' }} onClick={() => handleAction(v, 'error')}>
                                                                Refuse
                                                            </Button>
                                                        </> : <Button color="secondary" style={{ margin: 'auto 5px', color: 'red', fontSize: '15px' }}>Refused</Button>
                                            } */}
                                            {
                                                v.status === 'approve' ?
                                                    <Button color="secondary" style={{ margin: 'auto 5px', color: 'green', fontSize: '15px' }}>Approved </Button> : v.status === 'error' ?
                                                        <Button color="secondary" style={{ margin: 'auto 5px', color: 'red', fontSize: '15px' }}>Refused </Button>
                                                        : v.status === 'block' ? <Button color="secondary" style={{ margin: 'auto 5px', color: 'red', fontSize: '15px' }}>Blocked </Button>
                                                            : <Button style={{ margin: 'auto 5px', color: 'red', fontSize: '15px', color: 'orange' }}>Pending </Button> 

                                            }
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                )
                            }
                        })
                    })
                }
            </div>
            <Drawer
                size="lg"
                open={state}
                anchor='right'
            >
                <ModalClose onClick={() => setState(false)} />
                <div id='app'>
                    <div className="page-detail u-s-p-t-80">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-12">


                                    <div className="zoom-area">
                                        <div className="main-image">
                                            {hasImages && (
                                                <img className="img-fluid" src={fileUrl[activeImageIndex]} alt="Zoom Image" key={activeImageIndex} />
                                            )}
                                        </div>

                                        {hasImages && (
                                            <div id="gallery" className="u-s-m-t-10">
                                                {
                                                    fileUrl.map((image, i) => (
                                                        <a
                                                            className={activeImageIndex === i ? 'active' : ''}
                                                            data-image={image}
                                                            data-zoom-image={image}
                                                            onClick={() => handleImageClick(i)}
                                                        >
                                                            <img src={clickProduct.length > 0 ? clickProduct.fileurl[0] : image} alt={`Product Thumbnail ${i + 1}`} />

                                                        </a>
                                                    ))}
                                            </div>
                                        )}
                                    </div>

                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <div className="all-information-wrapper">
                                        <div className="section-1-title-breadcrumb-rating">
                                            <div className="product-title">
                                                <h3>
                                                    <a>{clickProduct.product_name}</a>
                                                </h3>
                                            </div>
                                            <ul className="bread-crumb">
                                                <li className="has-separator">
                                                    <a>Home</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a>{clickProduct.category}</a>
                                                </li>
                                                <li className="is-marked">
                                                    <a>{clickProduct.subcategory}</a>
                                                </li>
                                            </ul>
                                            <div className="product-rating">
                                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                    <span style={{ width: 67 }} />
                                                </div>
                                                <span>(23)</span>
                                            </div>
                                        </div>
                                        <div className="section-3-price-original-discount u-s-p-y-14">
                                            <div className="price">
                                                <h4> ₹{clickProduct.price}</h4>
                                            </div>
                                            <div className="original-price">
                                                <span>Original Price:</span>
                                                <span> ₹{clickProduct.mrp}</span>
                                            </div>
                                            <div className="discount-price">
                                                <span>Discount:</span>
                                                <span>  {Math.round((clickProduct.mrp - clickProduct.price) * 100 / clickProduct.mrp)}%</span>
                                            </div>
                                            <div className="total-save">
                                                <span>Save:</span>
                                                <span> ₹{clickProduct.mrp - clickProduct.price}</span>
                                            </div>
                                        </div>
                                        {/* <div className="section-4-sku-information u-s-p-y-14">
                                            <div className="availability">
                                                <span>Availability:</span>
                                                {
                                                    clickProduct.stock > 0 ? <span>  In Stock</span> : <span style={{ color: 'red' }}>  Out of Stock</span>
                                                }
                                            </div>
                                            <div className="left">
                                                <span>Quantity:</span>
                                                <span>  {clickProduct.stock}</span>
                                            </div>
                                        </div> */}
                                        <div className="section-5-product-variants u-s-p-y-14">
                                            <h6 className="information-heading u-s-m-b-8">SKU:  <span>{clickProduct.sku}</span></h6>
                                            <h6 className="information-heading u-s-m-b-8">Group_id:  <span>{clickProduct.group_id}</span></h6>
                                            <h6 className="information-heading u-s-m-b-8">Supplier_id:  <span>{clickProduct.supplier_id}</span></h6>
                                            <h6 className="information-heading u-s-m-b-8">Document_id:  <span>{clickProduct.user_id}</span></h6>
                                            <h6 className="information-heading u-s-m-b-8">Color:  <span style={{ textTransform: 'uppercase' }}>{clickProduct.color}</span></h6>

                                            <h6 className="information-heading u-s-m-b-8">Sizes:  </h6>
                                            <div className="size-variant select-box-wrapper" style={{ display: 'block' }}>
                                                {clickSize &&
                                                    clickSize.map((obj) => {
                                                        return (
                                                            <>
                                                                <span style={{ textTransform: 'uppercase', display: 'block', fontSize: '14px' }}>{`${obj.size}  -  ${obj.stock <= 0 ? 'Out of stock' : obj.stock} `}</span>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                                            <form action="#" className="post-form">
                                                <div className="quick-social-media-wrapper u-s-m-b-22">
                                                    <span>Share:</span>
                                                    <ul className="social-media-list">
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fas fa-rss" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-pinterest" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <div id="description">
                                        <div className="description-whole-container">
                                            <p className="desc-p u-s-m-b-26">{clickProduct.description}</p>
                                        </div>
                                    </div>
                                    <div className='approve_div'>
                                        {
                                            clickProduct.status === 'approve' ?
                                                <Button variant="outlined" color="error" style={{ float: 'right' }} onClick={() => handleAction(clickProduct, 'block')}>
                                                    Block <BlockIcon style={{ marginLeft: '5px' }} />
                                                </Button> : clickProduct.status !== 'error' ?
                                                    <div className='pro_request_product_approve'>
                                                        <Button variant="outlined" color="success" style={{ margin: 'auto 5px' }} onClick={() => handleAction(clickProduct, 'approve')}>
                                                            Approve <CheckCircleOutlineIcon style={{ marginLeft: '5px' }} />
                                                        </Button>
                                                        <Button variant="outlined" color="error" style={{ margin: 'auto 5px' }} onClick={() => handleAction(clickProduct, 'error')}>
                                                            Refuse <CancelIcon style={{ marginLeft: '5px' }} />
                                                        </Button>
                                                    </div> : <Button color="secondary" style={{ margin: 'auto 5px', color: 'red', fontSize: '15px' }}>Refused</Button>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </Drawer>
        </div>
    );
}

export default ProductRequest;