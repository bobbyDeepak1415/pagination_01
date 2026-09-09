import React, { useState } from 'react'

const Demo = () => {

  const [item,setItem]=useState("")
  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>

      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      
    </div>
  )
}

export default Demo
