import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetchData from './useFetchData'

let PAGE_SIZE=10
const Demo = () => {





  const url="https://jsonplaceholder.typicode.com/comments"

  const [page,setPage]=useState(0)


  const {allComments}=useFetchData(url)

let startIndex=page*PAGE_SIZE

let lastIndex=startIndex+PAGE_SIZE

const currentComments=allComments.slice(startIndex,lastIndex)

  
  return (
    <div>
      <h2>Your comments here:</h2>
<ol>

{currentComments.map((comment)=>{
  return <li key={comment.id}>{comment.name}</li>
})}
</ol>
    </div>
  )
}

export default Demo
