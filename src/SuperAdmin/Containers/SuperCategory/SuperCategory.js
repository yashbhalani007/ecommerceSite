import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { addCategory, getCategoryData } from '../../../redux/slice/category.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, FormControl, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

function SuperCategory(props) {
    const [data, setData] = useState([])
    const [open, setOpen] = React.useState(false);
    const [subCategory, setSubCategory] = React.useState('');
    const category = useSelector(state => state.category)
    console.log(category.category);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryData())
        // setData(category.category)
    }, [category.category])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            field: 'category',
            headerName: 'Category Name',
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



    const handleChanges = (event) => {
        setSubCategory(event.target.value);
    };

    const handleEdit = (value) => {

    }

    const handleDelete = (value) => {
        console.log(value);
    }

    const handleData = (e) => {
        console.log(e.row);
    }

    let categorySchema = yup.object().shape({
        category: yup
            .string('Please enter valid name')
            .max(15)
            .required('Please enter title')
    });

    const formik = useFormik({
        initialValues: {
            category: ''
        },
        validationSchema: categorySchema,
        onSubmit: (values, action) => {
            dispatch(addCategory(values))   // Lifiting State Up

            action.resetForm();
            handleClose();
        },
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = formik;

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className='contentTop' >
                <Button variant="outlined" onClick={handleClickOpen} style={{ marginTop: '18px' }}>
                    Add Category
                </Button>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>Add Category</DialogTitle>
                    <DialogContent style={{ width: '600px' }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="dense"
                                id="category"
                                label="Category Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.category}
                            />
                            <p className='error'>{errors.category && touched.category ? errors.category : ''}</p>

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>

                </Dialog>
            </div>
            <Divider variant="middle" style={{ margin: '15px 0' }} />
            <div>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        // label="Subcategory"
                        placeholder='subCategory'
                        value={subCategory}
                        Select
                        onChange={handleChanges}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            category.category.map(v => {
                                return (
                                    <MenuItem value={v.category}>{v.category}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </div>
        </>
    );
}

export default SuperCategory;