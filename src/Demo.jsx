import React, { useEffect, useRef, useState } from 'react'

const Demo = () => {

  const fileRef=useRef(null)

  const [files,setFiles]=useState([])


  const handleSelect=()=>{
const files=Array.from(e.target.files)

const fileNames=files.map((file)=>{
  return {
    name:file.name
  }
})

setFiles(fileNames)

  }

  const handleClick=()=>{
fileRef.current.click()
fileRef.current.value=""

  }

  return (
    <div>
    
<input ref={fileRef} onChange={(e)=>handleSelect(e)} type='file' multiple hidden/>
<button onClick={handleClick}>Browse files</button>
<br></br>
<br></br>
<br></br>
<ul>

{files.map((file,index)=>{
  return <li key={index}>{file}</li>
})}
</ul>

    </div>
  )
}

export default Demo
