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

    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(users.users);
    console.log(products.products);

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUsersData())
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
                        return users.users.map((user) => {
                            return (
                                <List sx={{ width: '90%', bgcolor: 'background.paper' }} >
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            {/* <Avatar alt={v.full_name} src="/static/images/avatar/1.jpg" /> */}
                                            {/* <Avatar {...stringAvatar(v.full_name)} /> */}
                                        </ListItemAvatar>
                                        <ListItemText
                                            style={{ cursor: 'pointer' }}
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
                                                    {v.email === user.email ? user.id : null}
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
                                                </React.Fragment>
                                            }
                                        />


                                        {
                                            v.emailVerified ?
                                                <Button color="secondary" style={{ margin: '10px 7px 0 7px', color: 'green', fontSize: '15px' }}>Approved</Button> :
                                                <>
                                                    <Button variant="outlined" color="success" style={{ margin: '10px 7px 0 7px' }} >
                                                        Approve
                                                    </Button>
                                                    <Button variant="outlined" color="error" style={{ margin: '10px 7px 0 7px' }} >
                                                        Refuse
                                                    </Button>
                                                </>
                                        }
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            )
                        })
                    })
                }
            </div>
        </div>
    );
}

export default ProductRequest;