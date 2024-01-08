import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, NavLink } from 'react-router-dom';


function CatUpload(props) {
    const [data, setData] = useState([])

    const columns = [
        {
            field: 'category',
            headerName: 'Category Name',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 300,
            editable: true,
        },
        {
            field: 'artical',
            headerName: 'Artical',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'icon',
            headerName: 'Icon',
            type: 'file',
            width: 110,
            editable: true,
        },
        {
            field: 'poster',
            headerName: 'Poster',
            type: 'file',
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
                <DataGrid
                    rows={data}
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
                />
            </Box>
        </>
    );
}

export default CatUpload;