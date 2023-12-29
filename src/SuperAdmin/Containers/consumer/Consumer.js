// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsersData } from '../../../redux/slice/user.slice';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import { Autocomplete } from '@mui/material';
// import TextField from '@mui/material/TextField';

// function Consumer(props) {

//     const [data, setData] = useState([])
//     const [fData, setFdata] = useState([])
//     const usersData = useSelector(state => state.users)

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getUsersData())
//         setData(usersData.users)
//     }, [usersData.users])

//     function stringToColor(string) {
//         let hash = 0;
//         let i;

//         /* eslint-disable no-bitwise */
//         for (i = 0; i < string.length; i += 1) {
//             hash = string.charCodeAt(i) + ((hash << 5) - hash);
//         }

//         let color = '#';

//         for (i = 0; i < 3; i += 1) {
//             const value = (hash >> (i * 8)) & 0xff;
//             color += `00${value.toString(16)}`.slice(-2);
//         }
//         /* eslint-enable no-bitwise */

//         return color;
//     }

//     function stringAvatar(name) {
//         return {
//             sx: {
//                 bgcolor: stringToColor(name),
//             },
//             children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//         };
//     }


//     const handleSearch = (value) => {
//         console.log(value);
//         let finData
//         // finData = usersData.users.filter((v) => v.name.toLowerCase().includes(value.toLowerCase()) || v.email.toLowerCase().includes(value.toLowerCase()))
//         finData = usersData.users.filter((v) => v.name.includes(value))

//         setFdata(finData)
//         console.log(finData);
//     }

//     const FinalData = fData.length > 0 ? fData : data
//     console.log(FinalData);

//     return (
//         <>
//             <div style={{ paddingTop: '70px', textAlign: 'center' }}>
//                 <TextField
//                     label="Search input"
//                     style={{ width: '50%', height: '12px !important' }}
//                     id='searchB'
//                     onChange={(e) => handleSearch(e.target.value)}
//                 />
//                 <div style={{ marginTop: '35px' }}>
//                     {
//                         // FinalData.map((v) => {

//                             // if (v.type === 'consumer') {
//                             //     return (
//                             //         <List sx={{ width: '90%', bgcolor: 'background.paper' }}>
//                             //             <ListItem alignItems="flex-start">
//                             //                 <ListItemAvatar>
//                             //                     {/* <Avatar alt={v.full_name} src="/static/images/avatar/1.jpg" /> */}
//                             //                     <Avatar {...stringAvatar(v.name)} />
//                             //                 </ListItemAvatar>
//                             //                 <ListItemText
//                             //                     primary={v.name}
//                             //                     secondary={
//                             //                         <React.Fragment>
//                             //                             <Typography
//                             //                                 sx={{ display: 'inline' }}
//                             //                                 component="span"
//                             //                                 variant="body2"
//                             //                                 color="text.primary"
//                             //                             >
//                             //                                 Email:
//                             //                             </Typography>
//                             //                             {" " + v.email}
//                             //                         </React.Fragment>
//                             //                     }
//                             //                 />
//                             //             </ListItem>
//                             //             <Divider variant="inset" component="li" />
//                             //         </List>
//                             //     )
//                             // }
//                         // })
//                     }
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Consumer;