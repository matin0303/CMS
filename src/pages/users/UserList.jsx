import React, { useState } from 'react';
import './UsersList.css';
import { userRows } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function UserList() {
  const [userDatas , setUserDatas] = useState(userRows)

  const userDelete = (userID)=>{
    setUserDatas(userDatas.filter(user=>user.id != userID))
  }

  const columns = [
    {
      field : 'id' ,
      headerName : 'ID',
      width :50,
    },
    {
      field : 'username' ,
      headerName : 'User',
      width :200,
      renderCell: (params)=>{
        return(
            <Link>
              <div className="userListUser">
                <img src={params.row.img} className='userListImg'/>
                {params.row.username}
              </div>
            </Link>
        )
      }
    },
    {
      field :'email',
      headerName:'Email',
      width:250,
    },
    {
      field : 'status',
      headerName : 'Status',
      width : 200,
    },
    {
      field :'transaction',
      headerName:'Transaction',
      width:200,
    },
    {
      field :'action',
      headerName:'Action',
      width:100,
      renderCell : (params)=>{
        return(
          <div className='userListAction'>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className='userListDelete' onClick ={()=>userDelete(params.row.id)}/>
          </div>)
      }
    },
    
    

  ]
  return (
    
    <div className='userList'>
      <DataGrid
        rows = {userDatas}
        columns ={columns}
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
