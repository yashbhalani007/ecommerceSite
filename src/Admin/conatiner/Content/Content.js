import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ContentForm from './ContentForm';
// import { addCategoryData, getCategoryData } from '../../../common/api/category.api';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Content(props) {

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
          <EditIcon id='editico' style={{color: 'blue'}} onCellClick/>
          <DeleteIcon id='deleteico' style={{color: 'red'}}/>
        </strong>
      )
    }

  ];

  const handleFormSubmit = (data) => {
    // addCategoryData(data)
  }

  const handleData = (e) =>{
    console.log(e.row);
  }

  return (
    <>
      <div className='contentTop'>
        <Button variant="outlined" style={{ marginTop: '75px' }}>
          Post Blog
        </Button>
        <ContentForm onHandleSubmit={handleFormSubmit} />
      </div>
      <Box sx={{ height: 400, width: '100%', marginTop: '15px' }}>
        <DataGrid
          rows={data}
          columns={columns}
          onCellClick={(e) => handleData(e)}
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

export default Content;