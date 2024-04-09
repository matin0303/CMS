import React from 'react'
import './Sidebar.css'
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to='/'>
                        <li className="sidebarListItem active">
                            <LineStyleOutlinedIcon className='sidebaricon'/>
                            Home
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <TimelineOutlinedIcon className='sidebaricon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpOutlinedIcon className='sidebaricon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to='/Users'>
                        <li className="sidebarListItem ">
                            <PermIdentityOutlinedIcon className='sidebaricon'/>
                            Users
                        </li>
                    </Link>
                    <Link to='/newUser'>
                        <li className="sidebarListItem">
                            <PermIdentityOutlinedIcon className='sidebaricon'/>
                            New User
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li className="sidebarListItem">
                            <StorefrontOutlinedIcon className='sidebaricon'/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyOutlinedIcon className='sidebaricon'/>
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <BarChartOutlinedIcon className='sidebaricon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem ">
                        <MailOutlineOutlinedIcon className='sidebaricon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedOutlinedIcon className='sidebaricon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlinedIcon className='sidebaricon'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem ">
                        <WorkOutlineOutlinedIcon className='sidebaricon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineOutlinedIcon className='sidebaricon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportOutlinedIcon className='sidebaricon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}  
