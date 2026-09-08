import React, { useState } from 'react'
import useFetchData from './useFetchData'


const url="https://jsonplaceholder.typicode.com/comments"

let PAGE_SIZE=10



const Demo = () => {


        const {allComments}=useFetchData(url)
        const [page,setPage]=useState(0)

        let startIndex=page*PAGE_SIZE

       let currentComments=allComments.slice(startIndex,startIndex+PAGE_SIZE)

const handlePrevClick=()=>{
  
}


  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Comment List:</h2>
      <ol>

      {currentComments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}
      </ol>
      <button onClick={handlePrevClick}>Prev</button>
      <p>Page:{page}</p>
    </div>
  )
}

export default Demo
