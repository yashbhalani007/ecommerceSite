import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';

function CategoryForm({ onHandleSubmit }) {
    const [open, setOpen] = React.useState(false);

    // useEffect(() => {
    //     if (updateData) {
    //         handleClickOpen();
    //         setValues(updateData);
    //     }
    // }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let categorySchema = yup.object().shape({
        category: yup
            .string('Please enter valid name')
            .max(12)
            .required('Please enter title'),
        description: yup
            .string()
            .min(200,'Minimum 200 characters required')
            .max(1000,'Minimum 1000 characters required')
            .required('Please enter description')
    });

    const formik = useFormik({
        initialValues: {
            category: '',
            description: '',
            poster: '',
            icon: '',
            Articles: 0
        },
        validationSchema: categorySchema,
        onSubmit: (values, action) => {
            onHandleSubmit(values)   // Lifiting State Up

            action.resetForm();
            handleClose();
        },
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = formik;

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginTop: '18px' }}>
                Add Catelog
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent style={{width: '600px'}}>
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

                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        <p className='error'>{errors.description && touched.description ? errors.description : ''}</p>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </React.Fragment >
    );
}

export default CategoryForm;