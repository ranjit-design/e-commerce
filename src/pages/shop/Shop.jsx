import React, { useState } from 'react'
import './Shop.css'
import { categoy } from '../../Category';
import { dummydata } from '../../dummydata';
import { FaShopify } from "react-icons/fa";
import Product from '../../components/Product/Product';
function Shop() {
    let [cate, setcate] = useState(dummydata);
      function filterProducts(category) {
        if(category==="All"){
            setcate(dummydata)
        }else{
            let updatedata = dummydata.filter((item) => item.category === category);
        setcate(updatedata);
        }
        
      }
  return (
    <div className='shop'>
        <div className="heading">
            <span>Shop</span>
            <FaShopify />
        </div>
        <div className="category-section">
                {categoy.map((item) => (
                  <div
                    className="category-card"
                    onClick={() => {
                      filterProducts(item.name);
                    }}
                  >
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="product-section">
        {cate.filter((item) => item).map((item) => (             // filter out undefined
        
            <Product
              
              name={item.name}
              price={item.price}
              image={item.image} id={item.id}
            />
          ))}
      </div>
    </div>
  )
}

export default Shop
