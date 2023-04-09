import React from 'react'
import Electronics from './Electronics'
import Jewelries from './Jewelries'
import Men from './Men'
import Women from './Women'

const Products = ({cartItem,setcartItems,handleAddToCart}) => {
  return (
    <div className='data'>
      <Jewelries cartItem={cartItem} setcartItems={setcartItems} handleAddToCart={handleAddToCart}/>
      <Women cartItem={cartItem} setcartItems={setcartItems} handleAddToCart={handleAddToCart}/>
      <Men cartItem={cartItem} setcartItems={setcartItems} handleAddToCart={handleAddToCart}/>
      <Electronics cartItem={cartItem} setcartItems={setcartItems} handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default Products