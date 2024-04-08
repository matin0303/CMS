import React from 'react'
import './WidgetLg.css'
import { transactions } from '../../datas'

export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className = {'widgetLgButton ' + type} >{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest TransAction</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Data</th>
                <th className="widgetLgTh">Amout</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            {transactions.map((user)=>(
                <tr className="widgetLgTr">
                    <td className="widgetLguser">
                        <img src={user.img} className='widgetLgImg'/>
                        <span className="widgetLgName">{user.customer}</span>
                    </td>
                    <td className="widgetLgDate">
                        {user.date}
                    </td>

                    <td className="widgetLgAmout">
                        {user.amout}
                    </td>

                    <td className="widgetLgStatus">
                        <Button type={user.status}/>
                    </td>
                </tr>
            ))}
            

            
        </table>
    </div>
  )
}
