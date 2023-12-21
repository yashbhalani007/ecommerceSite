import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SuperCategoryForm from './SuperCategoryForm';

function SuperCategory(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        // const data = getCategoryData()
        // setData(data)
        // data.then(value => setData(value.data))
    }, [])

    const columns = [
        {
            field: 'category',
            headerName: 'Category Name',
            width: 200,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Type-1',
            width: 200,
            editable: true,
        },
        {
            field: 'icon',
            headerName: 'Type-2',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'icon',
            headerName: 'Type-3',
            type: 'file',
            width: 200,
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

    const handleFormSubmit = (data) => {
        // addCategoryData(data)
    }

    const handleEdit = (value) => {

    }

    const handleDelete = (value) => {
        console.log(value);
    }

    const handleData = (e) => {
        console.log(e.row);
    }

    return (
        <>

        <br></br>
        <br></br>
            <div className='contentTop'>
                <SuperCategoryForm onHandleSubmit={handleFormSubmit} />
            </div>
            <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    // onCellClick={(e) => handleData(e)}
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
                />
            </Box>
        </>
    );
}

export default SuperCategory;