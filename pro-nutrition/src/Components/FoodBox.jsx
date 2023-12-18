import React, { useState } from 'react'

function FoodBox(props) {

  let {data,index} = props;
  let {cal,id,img,name} = data;
  // let {data: {calorie,id,img,name},{index}} = props;

  const[input,setInput] = useState(0)
  const [quantity,setQuantity] = useState(0)

 const quantityHandler =()=>{
  setQuantity(input)
  }
  return (
    <div className='foodbox-main'>
      <div className='foodbox-main-left'>
        <img src={img} alt="" />
        <div className='foodbox-main-left-1'>
          <h2>{name}</h2>
          <h3>{cal}</h3>
        </div>
        <div className='foodbox-main-left-2'>
          <input type="number"
          style={{
            padding : "8px 8px",
            fontSize : "larger",
            color : 'black',
            background: "white", 
            height:"25px"
          }}
          value={input}
          className='int'
          onChange={(e)=>{
            setInput(e.target.value)
          }}
          min={0}
          />
          <button className='plus' onClick={quantityHandler}>+</button>
        </div>
      </div>
      <div className='foodbox-main-right'>
        <h4>{name} x {quantity} = {cal * quantity} calories</h4>
        <button className='reset' onClick={()=>{setQuantity(0),setInput(0)}}>RESET</button>
      </div>

    </div>
  )
}
export default FoodBox