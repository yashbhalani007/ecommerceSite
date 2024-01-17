import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  addCategory,
  getCategoryData
} from "../../../redux/slice/category.slice";
import { useDispatch, useSelector } from "react-redux";
import { Divider, FormControl, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Input from "@mui/joy/Input";
import {
  addSubCategory,
  getSubCategoryData
} from "../../../redux/slice/subcategory.slice";

function SuperCategory(props) {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [categorys, setCategory] = React.useState("");
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subcategory);

  // Dublicate Category Remove From an Array:-

  const subCategories = subCategory.subcategory;
  let uniqueCategories = [];
  subCategories.forEach((v) => {
    if (!uniqueCategories.includes(v.category)) {
      uniqueCategories.push(v.category);
    }
  });

  const [formValues, setFormValues] = useState({
    categorys: "",
    newSubCategory: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      dispatch(getCategoryData());
      dispatch(getSubCategoryData());
    };

    getData();
  }, [category.category]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubCategory = (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);

    dispatch(addSubCategory(formValues));

    resetForm();
  };

  const resetForm = () => {
    // Reset form state
    setFormValues({
      categorys: "",
      newSubCategory: ""
    });

    // Reset the actual HTML form element
    document.getElementById("categoryForm").reset();
  };

  let categorySchema = yup.object().shape({
    category: yup
      .string("Please enter valid name")
      .max(15)
      .required("Please enter title")
  });

  const formik = useFormik({
    initialValues: {
      category: ""
    },
    validationSchema: categorySchema,
    onSubmit: (values, action) => {
      dispatch(addCategory(values)); // Lifiting State Up

      action.resetForm();
      handleClose();
    }
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues
  } = formik;

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="contentTop">
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          style={{ marginTop: "18px" }}
        >
          Add Category
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Category</DialogTitle>
          <DialogContent style={{ width: "600px" }}>
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
              <p className="error">
                {errors.category && touched.category ? errors.category : ""}
              </p>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Divider variant="middle" style={{ margin: "15px 0" }} />
      <div>
        <form id="categoryForm" onSubmit={handleSubCategory}>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div>
              <span style={{ display: "block" }}>Select Category: </span>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Category"
                placeholder="Category"
                name="categorys"
                value={formValues.categorys}
                onChange={handleChanges}
                style={{ width: "200px", height: "45px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {category.category.map((v) => (
                  <MenuItem key={v.category} value={v.category}>
                    {v.category}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <span>Add Subcategory: </span>
              <Input
                placeholder="Type in here…"
                variant="outlined"
                size="lg"
                name="newSubCategory"
                value={formValues.newSubCategory}
                onChange={handleChanges}
              />
            </div>
            <Button
              type="submit"
              variant="outlined"
              style={{ width: "150px", height: "45px", marginTop: "22px" }}
            >
              Submit
            </Button>
          </Box>
        </form>

        <div class="card" style={{marginTop: '20px'}}>
          <div class="card-datatable table-responsive">
            <table class="datatables-products table border-top">
              <thead>
                <tr>
                  <th>category</th>
                  <th>SubCategory</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div>
          <div style={{width: '43%'}}>


            {uniqueCategories && uniqueCategories.map((category) => (
              <div key={category} style={{ display: 'flex', columnGap: '270px', marginBottom: '20px' }}>
                <p style={{ width: '200px' }}>{category}</p>

                <select style={{ margin: '0 auto', padding: '5px 7px' ,borderColor: '#cdd7e1',borderRadius: '5px' }} aria-readonly>
                  <option>See All Categorys</option>
                  {subCategory.subcategory && subCategory.subcategory.map((item) => {
                    if (item.category === category) {

                      return (
                        <option>{item.subcategory}</option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default SuperCategory;
