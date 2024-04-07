import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topleft">
            <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topright">
            <div className="topbarIconContainer">
              <NotificationsIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon/>
            </div>
            <img src="images/prof.jpg"/>
        </div>
      </div>
    </div>
  )
}
