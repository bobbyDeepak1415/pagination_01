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

  return (
    <div>
      <h2>Comments List:</h2>
      <ol>

      {currentComments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}
      </ol>
      
    </div>
  )
}

export default Demo
