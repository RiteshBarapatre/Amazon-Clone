import React, { useContext, useEffect } from 'react'
import '../css/subtotal.css'
import { UserContext } from './StateProvider'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {

  const navigate = useNavigate()
  
  const {basketItem,totalPrice,setFinalAmount} = useContext(UserContext)
  const totalAmount = totalPrice.reduce((a,b)=> a + b,0).toFixed(2)
  useEffect(()=>{
    setFinalAmount(totalAmount)
  },[setFinalAmount])

  
  return (
    <div className='subtotal'>
        <p><span>{`Subtotal (${basketItem.length} items):`}</span><b>{` $${totalAmount}`}</b></p>
        <small className='subtotal__gift'><input type="checkbox"/> This order contains a gift</small>
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal