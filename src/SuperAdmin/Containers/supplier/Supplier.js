import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserData, getUsersData, updateUserData } from '../../../redux/slice/user.slice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Label } from '@mui/icons-material';

function Supplier(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [fData, setFdata] = useState([])
    const [showData, setShowData] = useState('')
    const usersData = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersData())
    }, [])

    useEffect(() => {
        setData(usersData.users)
    }, [usersData.users])

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const handleClickOpen = (value) => {
        setOpen(true);
        setShowData(value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleApprve = async (data) => {
        // const docRef = doc(db, "users", data.uid);

        // Set the "capital" field of the city 'DC'
        // await updateDoc(docRef, {...data,emailVerified: true});
        dispatch(updateUserData(data))
    }

    const handleRefuse = async (id) => {
        dispatch(deleteUserData(id))
    }

    const handleSearch = (value) => {
        console.log(value);
        
        let searData = usersData.users.filter((v) => v.full_name.toLowerCase().includes(value.toLowerCase()) || v.email.toLowerCase().includes(value.toLowerCase()) || JSON.stringify(v.mobile_number).includes(JSON.stringify(value)) || JSON.stringify(v.emailVerified).includes(value) || JSON.stringify(v.id).includes(value))

        setFdata(searData)
    }

    const FinalData = fData.length > 0 ? fData : data
    return (
        <>
            <div style={{ paddingTop: '70px', textAlign: 'center' }}>
                <TextField
                    label="Search input"
                    style={{ width: '50%', height: '12px !important' }}
                    id='searchB'
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <select style={{ height: '42px', padding: '7px', marginLeft: '7px', borderColor: 'grey', borderRadius: '3px' }} onChange={(e) => handleSearch(e.target.value)}>
                    <option value='0'>-- Select --</option>
                    <option value='true'>Approved</option>
                    <option value='false'>Requests</option>
                </select>
                <div style={{ marginTop: '35px' }}>
                    {
                        FinalData.map((v) => {
                            if (v.type === 'supplier') {
                                return (
                                    <>
                                        <List sx={{ width: '90%', bgcolor: 'background.paper' }} >
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    {/* <Avatar alt={v.full_name} src="/static/images/avatar/1.jpg" /> */}
                                                    <Avatar {...stringAvatar(v.full_name)} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    style={{cursor: 'pointer'}}
                                                    onClick={() => handleClickOpen(v.email)}
                                                    primary={v.full_name}
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
                                                            {" " + v.id}
                                                        </React.Fragment>
                                                    }
                                                />


                                                {
                                                    v.emailVerified ?
                                                        <Button color="secondary" style={{ margin: '10px 7px 0 7px', color: 'green', fontSize: '15px' }}>Approved</Button> :
                                                        <>
                                                            <Button variant="outlined" color="success" style={{ margin: '10px 7px 0 7px' }} onClick={() => handleApprve(v)}>
                                                                Approve
                                                            </Button>
                                                            <Button variant="outlined" color="error" style={{ margin: '10px 7px 0 7px' }} onClick={() => handleRefuse(v.id)}>
                                                                Refuse
                                                            </Button>
                                                        </>
                                                }
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </List>
                                    </>
                                )

                            }
                        })
                    }

                    {
                        FinalData.map((v) => {
                            if (v.email === showData) {
                                return (
                                    <Dialog open={open} onClose={() => handleClose()}>
                                        <DialogTitle>Supplier Detail</DialogTitle>
                                        <DialogContent style={{ width: '500px' }}>
                                            {/* <DialogContentText >
                                                    To subscribe to this website, please enter your email address here.
                                                </DialogContentText> */}

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Full Name:      </span>
                                                <Input value={v.full_name} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Email:      </span>
                                                <Input value={v.email} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Mobile Number:      </span>
                                                <Input value={v.mobile_number} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Store Name:      </span>
                                                <Input value={v.store_name} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >GST No:      </span>
                                                <Input value={v.gst_number} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Pickup adress:      </span>
                                                <Input value={v.pickup} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Pincode:      </span>
                                                <Input value={v.pincode} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Password:      </span>
                                                <Input value={v.password} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Type:      </span>
                                                <Input value={v.type} readOnly />
                                            </div>

                                            <div style={{ display: 'block', margin: '10px 0' }}>
                                                <span >Verified:      </span>
                                                <Input value={v.emailVerified} readOnly />
                                            </div>

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => handleClose()}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                )
                            }
                        })
                    }
                </div>

            </div>
        </>
    );
}

export default Supplier;