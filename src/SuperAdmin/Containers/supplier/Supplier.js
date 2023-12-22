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

function Supplier(props) {
    const [data, setData] = useState([])
    const usersData = useSelector(state => state.users)
    console.log(usersData);
    console.log(usersData.users);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersData())
    }, [usersData.users])

    console.log(usersData.users);

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

    const handleApprve = async (data) => {
        // setAlert("Supplier Approved")
        console.log("suppliser Approved");
        // const docRef = doc(db, "users", data.uid);

        // Set the "capital" field of the city 'DC'
        // await updateDoc(docRef, {...data,emailVerified: true});
        dispatch(updateUserData(data))
    }

    const handleRefuse = async (id) => {
        dispatch(deleteUserData(id))
    }

    return (
        <div style={{paddingTop: '70px'}}>
            {
                usersData.users.map((v) => {
                    if (v.type === 'supplier') {
                        return (
                            <List sx={{ width: '90%', bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        {/* <Avatar alt={v.full_name} src="/static/images/avatar/1.jpg" /> */}
                                        <Avatar {...stringAvatar(v.full_name)} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={v.full_name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    UID:
                                                </Typography>
                                                {" " + v.id}
                                            </React.Fragment>
                                        }
                                    />

                                    {
                                        v.emailVerified ? 
                                        <Button color="secondary" style={{ margin: '10px 7px 0 7px',color: 'green',fontSize: '15px' }}>Approved</Button> :
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
                        )
                    }
                })
            }

        </div>
    );
}

export default Supplier;