import React from 'react'
import "./CartCard.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from '../../assets/image1.jpg';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

function CartCard({name,price,image,id}) {
    let dispatch=useDispatch()
  return (
    <div className='Cartcard'>
        <div className="left-card">
            <img src={image} alt="" />
            <div className="name-price">
                <span>{name}</span>
                <span>Rs {price}/-</span>
            </div>
        </div>
        <div className="right-card">
            <button onClick={()=>{
                dispatch(RemoveItem(id))
            }}>Remove <RiDeleteBin6Line /></button>
        </div>
    </div>
  )
}

export default CartCard