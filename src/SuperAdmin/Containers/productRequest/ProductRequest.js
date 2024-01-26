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

function ProductRequest(props) {
    const [state, setState] = React.useState(false);
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const number = Math.floor(Math.random() * 100000)

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUsersData())
    }, [])

    useEffect(() => {
        setData(products.products)
    }, [products.products])


    const toggleDrawer = (open, data) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
        console.log(data);

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
                                                onClick={toggleDrawer(true, v)}
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
                <h1>Hello</h1>
            </Drawer>
        </div>
    );
}

export default ProductRequest;