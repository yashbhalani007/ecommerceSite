import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CategoryForm from '../Category/CategoryForm';
import { Link, NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCatelog from './AddCatelog';

function CatUpload(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [fileInputs, setFileInputs] = useState([{ id: 1, selectedFile: null }]);
    // const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // const data = getCategoryData()
        // setData(data)
        // data.then(value => setData(value.data))
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (id) => (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        setFileInputs((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, selectedFile: file } : input
            )
        );

        // Add a new file input when a file is selected
        setFileInputs((prevInputs) => [
            ...prevInputs,
            { id: prevInputs.length + 1, selectedFile: null },
        ]);
    };

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
    console.log(fileInputs);
    return (
        <>

            <br></br>
            <br></br>
            <div className='contentTop'>
                <Link to ='addcatelog'>
                <Button variant="outlined">
                    Add Catalog
                </Button>
                </Link>
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

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <div className='addProduct'>
                        {fileInputs.map((input) => (
                            <div key={input.id}>
                                <input
                                    type="file"
                                    id={`fileInput${input.id}`}
                                    onChange={handleFileChange(input.id)}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor={`fileInput${input.id}`} className="file-input-label">
                                    {input.selectedFile ? 'Change Image' : 'Choose Image'}
                                </label>

                                {input.selectedFile && (
                                    <div className="image-container" style={{ margin: '0 11px' }}>
                                        <img src={URL.createObjectURL(input.selectedFile)} alt="Selected Image" id='selected-image' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button >Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CatUpload;