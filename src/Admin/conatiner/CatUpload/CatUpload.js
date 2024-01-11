import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/slice/product.slice';


function CatUpload(props) {
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const productData = useSelector(state => state.products)
    console.log(productData.products.id);

    useEffect(() => {
        dispatch(getProduct());
    }, [])

    const columns = [
        {
            field: 'fileurl',
            headerName: 'Product-Images',
            type: 'file',
            width: 150,
            editable: true,
        },
        {
            field: 'product_name',
            headerName: 'Product Name',
            width: 150,
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
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            renderCell: (params) => (
                <strong>
                    <EditIcon id='editico' style={{ color: 'blue' }} onCellClick={(e) => handleEdit(e.row)} />
                    <DeleteIcon id='deleteico' style={{ color: 'red' }} onClick={(e) => handleDelete(e.data)} />
                </strong>
            )
        }

    ];

    const handleDelete = (value) => {
        console.log(value);
    }

    const handleEdit = () => {

    }

 
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
            <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}>
                {/* <DataGrid
                    rows={productData.products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                /> */}
            </Box>
        </>
    );
}

export default CatUpload;