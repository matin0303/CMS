import React from 'react'
import './NewUser.css'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function NewUser() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <div className='newUserContainer'>
      <div className="newUserCard">
        <div className="uploadAvatarContainer">
          <DriveFolderUploadIcon className='userAvatar'/>
        </div>
        <Button 
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          
        >
          Upload Avatar
          <VisuallyHiddenInput type="file" accept="image/png, image/jpeg"/>
        </Button>
        <div className="inputContainer">
          <input type="text" className='firstNameInput' placeholder='First Name'/>
          <input type="text" className='lastNameInput' placeholder='Last Name'/>
          <input type="text" className='emailInput' placeholder='Email'/>
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  )
}
