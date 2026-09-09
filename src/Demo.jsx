import React, { useState } from 'react'

const Demo = () => {

  
  const [item,setItem]=useState("")
const [itemList,setItemList]=useState([])


const handleAddItem=()=>{
  if(!item.trim()) return
  setItemList([...itemList,item])
  setItem("")
}

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>

      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={handleAddItem}>Add Item</button>
      <div>
        <ul>

        {itemList.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default Demo
