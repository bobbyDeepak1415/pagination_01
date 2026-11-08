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

const handlePrevClick=()=>{

  if(page===0) return

  setPage(prev=>prev-1)


}

const handleNextClick=()=>{

  if(startIndex+PAGE_SIZE>allComments)  return

  setPage(prev=>prev+1)

}
  
  return (
    <div>
      <h2>Your comments here:</h2>
<ol start={startIndex+1}>

{currentComments.map((comment)=>{
  return <li key={comment.id}>{comment.name}</li>
})}
</ol>

<button disabled={page===0} onClick={handlePrevClick}>Prev</button>
<button disabled={startIndex+PAGE_SIZE>allComments.length} onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Demo
