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
import { getProduct } from '../../../redux/slice/product.slice';
import { getUsersData } from '../../../redux/slice/user.slice';

function ProductRequest(props) {
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const number = Math.floor(Math.random() * 100000)

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUsersData())
        setUserData(users.users)
        setData(products.products)
    }, [])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{ width: '50%', height: '12px !important', textAlign: 'center', margin: '0 auto' }}>
                <TextField
                    label="Search input"
                    id='searchB'
                    style={{ width: '100%' }}
                // onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '35px' }}>
                {
                    data.map((v) => {
                        return userData.map((user) => {
                            if (user.email === v.supplier_email) {
                                return (
                                    <List key={`product_request_${number}`} sx={{ width: '90%', bgcolor: 'background.paper' }} >
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar id='avatarProduct'>
                                                {/* <Avatar alt={v.full_name} src="/static/images/avatar/1.jpg" /> */}
                                                {/* <Avatar {...stringAvatar(v.full_name)} /> */}
                                                <img src={ v.fileurl[0] } style={{width: '100%',height: '100%',borderRadius: '5px',backgroundSize: 'cover'}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                style={{ cursor: 'pointer',marginLeft: '10px' }}
                                                // onClick={() => handleClickOpen(v.email)}
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


                                            {
                                                v.emailVerified ?
                                                    <Button color="secondary" style={{ margin: 'auto 5px', color: 'green', fontSize: '15px' }}>Approved</Button> :
                                                    <>
                                                        <Button variant="outlined" color="success" style={{ margin: 'auto 5px' }} >
                                                            Approve
                                                        </Button>
                                                        <Button variant="outlined" color="error" style={{ margin: 'auto 5px' }} >
                                                            Refuse
                                                        </Button>
                                                    </>
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
        </div>
    );
}

export default ProductRequest;