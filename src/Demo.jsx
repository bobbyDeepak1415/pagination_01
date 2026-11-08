import React, { useState } from 'react'

const Demo = () => {

  const [item,setItem]=useState('')
  const [list,setList]=useState([])

  const handleClick=()=>{
    if(!item.trim()) return

    setList([item])
setItem("")
  }

  return (
    <div>
    
<input value={item} onChange={(e)=>setItem(e.target.value)} type='text'/>
<button onClick={handleClick}>Add to list</button>
<br></br>
<br></br>
<br></br>
<ul>

{list.map((item,index)=>{
  return <li key={index}>{item}</li>
})}
</ul>

    </div>
  )
}

export default Demo
