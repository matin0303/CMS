import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMember } from '../../datas';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMember.map((user)=>(
            <li key={user.id} className="widgetSmListItem">
                <img src={user.img} className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                    <span className="widgetSmUserTitle">{user.title}</span>
                </div>
                <button className="widgetSmBtn">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>
        ))}
        
      </ul>
    </div>
  )
}
