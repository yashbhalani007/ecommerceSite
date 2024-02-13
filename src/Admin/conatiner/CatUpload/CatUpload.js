import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/slice/product.slice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function CatUpload(props) {
    const [data, setData] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const dispatch = useDispatch();

    const productData = useSelector(state => state.products)

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        dispatch(getProduct());
    }, [])

    useEffect(() => {
        if (productData.products) {
            const filteredData = productData.products
                .filter((product) => product.supplier_id === currentUser)
                .filter((product) => product.fileurl); // Only include items with fileurl
            setData(filteredData);
        }
    }, [currentUser, productData.products])

    const getUser = async () => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setCurrentUser(uid)
                } else {

                }
            });
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const columns = [
        {
            field: 'fileurl',
            headerName: 'Product-Images',
            type: 'file',
            width: 150,
            editable: true,
            renderCell: (params) => (
                <strong style={{ width: '100px', height: '100px' }}>
                    <img src={params.row.fileurl[0]} style={{ backgroundSize: 'contain', height: '100%', width: '100%' }} />
                </strong>
            )
        },
        {
            field: 'product_name',
            headerName: 'Product Name',
            width: 300,
            editable: true,
        },
        {
            field: 'color',
            headerName: 'Color',
            width: 80,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,
            editable: true,
            renderCell: ({ row }) => {
                const { status } = row;
                return (
                    <strong>
                        {status === 'pending' ? <PendingIcon style={{ width: 50, color: 'orange' }} /> :
                            status === 'approve' ? <CheckCircleIcon style={{ width: 50, color: 'green' }} /> :
                                <ReportProblemIcon style={{ width: 50, color: 'red' }} />}
                    </strong>
                );
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: (params) => (
                <strong>
                    <Button variant="contained" color="success">
                        View Catelog
                    </Button>
                </strong>
            )
        }

    ];

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="py-3 mb-4">
                <span> Catalog upload/</span>
            </h4>
            <div className='contentTop'>
                <Link to='addcatelog'>
                    <Button variant="outlined">
                        Add Catalog
                    </Button>
                </Link>
            </div>
            <Box sx={{ height: '100vh', width: '100%', marginTop: '25px' }}>
                <DataGrid
                    rows={data ? data : productData.products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    rowHeight={80}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );
}

export default CatUpload;