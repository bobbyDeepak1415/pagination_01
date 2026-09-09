import axios from 'axios'
import React, { useEffect, useState } from 'react'


let PAGE_SIZE=10

const url="https://jsonplaceholder.typicode.com/comments"
const Demo = () => {


  const [allComments,setAllComments]=useState([])
  const [page,setPage]=useState(0)


  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get(url)
      
setAllComments(res.data)

    }
    fetchData()
  },[])


  let startIndex=page*PAGE_SIZE

  const currentComments=allComments.slice(startIndex,startIndex+PAGE_SIZE)


  const handlePrevClick=()=>{
    if(page===0) return

    setPage(prev=>prev-1)

  }

  const handleNextClick=()=>{
    if(startIndex+PAGE_SIZE>=allComments.length) return
    setPage(prev=>prev+1)



  }

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Comments List:</h2>
      <ol start={page*PAGE_SIZE+1}>

      {currentComments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}
      </ol>

<button disabled={page===0} onClick={handlePrevClick}>prev</button>
<button disabled={startIndex+PAGE_SIZE>=allComments.length} onClick={handleNextClick}>next</button>
      
    </div>
  )
}

export default Demo
