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

function SuperCategoryForm(onHandleSubmit) {
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
            type1: yup
            .string()
            .required('Please enter type'),
            type2: yup
            .string()
            .required('Please enter type'),
            type3: yup
            .string()
            .required('Please enter type'),
    });

    const formik = useFormik({
        initialValues: {
            category: '',
            type1: '',
            type2: '',
            type3: '',

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

                        <TextField
                            margin="dense"
                            id="type1"
                            label="type-1"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type1}
                        />
                        <p className='error'>{errors.type1 && touched.type1 ? errors.type1 : ''}</p>
                        <TextField
                            margin="dense"
                            id="type2"
                            label="type-2"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type2}
                        />
                        <p className='error'>{errors.type2 && touched.type2 ? errors.type2 : ''}</p>
                        
                        <TextField
                            margin="dense"
                            id="type3"
                            label="type-3"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type3}
                        />
                        <p className='error'>{errors.type3 && touched.type3 ? errors.type3 : ''}</p>

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

export default SuperCategoryForm;