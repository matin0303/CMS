import React from 'react'
import { Link } from 'react-router-dom'
import Chart from './../../components/chart/Chart'
import { productData } from '../../datas'
import PublishIcon from '@mui/icons-material/Publish';
import './Product.css'

export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h3 className="productTitle">Product</h3>
        <Link to='/newProduct'>
            <button className='productAddButton'>Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title = 'Sale In Month' data = {productData} dataKey='sales'/>
        </div>

        <div className="productTopRight">

          <div className="productInfoTop">
            <img src="/images/dell.jpg" alt='dell laptop' className='productInfoImg'/>
            <span className="productName">Dell Laptop</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey"> ID: </div>
              <div className="productInfoValue">132</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey"> Name: </div>
              <div className="productInfoValue">Dell Laptop</div>
            </div>


            <div className="productInfoItem">
              <div className="productInfoKey"> Sales: </div>
              <div className="productInfoValue">$6200</div>
            </div>
  
  
            <div className="productInfoItem">
              <div className="productInfoKey"> Active: </div>
              <div className="productInfoValue">Yes</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey"> In Stok: </div>
              <div className="productInfoValue">No</div>
            </div>

          </div>
        </div>
      </div>

      <div className="roductBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Dell Laptop' />

            <label>In Stock</label>
            <select id="InStock">
              <option value="Yes"></option>
              <option value="No"></option>
            </select>

            <label>Active</label>
            <select id="InStock">
              <option value="Yes"></option>
              <option value="No"></option>
            </select>
          </div>


          <div className="productFormRight">
            <div className="productUploader">
              <img src="/images/dell.jpg" alt="profile photo" className='productUploaderImg' />
              <label>
                <PublishIcon/>
              </label>
              <input type="file" style={{display:'none'}}/>
            </div>

            <button className='productButton'>Upload</button>
          </div>
        </form>
      </div>
    </div>
    
  )
}
