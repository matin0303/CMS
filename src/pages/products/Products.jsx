import React, { useState } from 'react';
import './Products.css';
import { products } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function UserList() {
  const [productsDatas , setProductsDatas] = useState(products)

  const productsDelete = (userID)=>{
    setProductsDatas(productsDatas.filter(user=>user.id != userID))
  }

  const columns = [
    {
      field : 'id' ,
      headerName : 'ID',
      width :50,
    },
    {
      field : 'title' ,
      headerName : 'Name',
      width :200,
      renderCell: (params)=>{
        return(
          <Link to={`/product/${params.row.id}`}>
            <div className="userListUser">
              <img src={params.row.img} className='userListImg'/>
              {params.row.title}
            </div>
          </Link>
        )
      }
    },

    {
      field : 'price',
      headerName : 'Price',
      width : 200,
    },
    {
      field :'action',
      headerName:'Action',
      width:100,
      renderCell : (params)=>{
        console.log(params)
        return(
          <div className='userListAction'>
            <Link to={`/product/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className='userListDelete' onClick ={()=>productsDelete(params.row.id)}/>
          </div>)
      }
    },
    
    

  ]
  return (
    
    <div className='userList'>
      <DataGrid
        rows = {productsDatas}
        columns ={columns}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}

      />
    </div>
  )
}
