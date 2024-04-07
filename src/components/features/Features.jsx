import React from 'react';
import './Features.css';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function Features() {
  return (
    <div className='features'>
      <div className="featureItem">
        <span className='featureTitle'>Revanue</span>
        <div className="featureContainer">
            <span className="featureMoney">$2,415</span>
            <span className="featureRate">
                -11.4<ArrowDownwardOutlinedIcon className='featureIcon negative '/>
            </span>
        </div>
        <span className="freatureSub">Compared to last month</span>
      </div>
      
      <div className="featureItem">
        <span className='featureTitle'>Sales</span>
        <div className="featureContainer">
            <span className="featureMoney">$4,415</span>
            <span className="featureRate">
                -1.4<ArrowDownwardOutlinedIcon className='featureIcon negative '/>
            </span>
        </div>
        <span className="freatureSub">Compared to last month</span>
      </div>

      <div className="featureItem">
        <span className='featureTitle'>Cost</span>
        <div className="featureContainer">
            <span className="featureMoney">$2,225</span>
            <span className="featureRate">
                +2.4<ArrowUpwardOutlinedIcon className='featureIcon '/>
            </span>
        </div>
        <span className="freatureSub">Compared to last month</span>
      </div>
    </div>
  )
}
