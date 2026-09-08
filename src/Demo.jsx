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
  if(page===0) return
  setPage(prev=>prev-1)

}
const handleNextClick=()=>{
  if(startIndex+PAGE_SIZE<allComments.length){
    setPage(prev=>prev+1)
  }

}


  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Comment List:</h2>
      <ol start={page*PAGE_SIZE+1}>

      {currentComments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}
      </ol>
      <button disabled={page===0} onClick={handlePrevClick}>Prev</button>
      <button disabled={startIndex+PAGE_SIZE>=allComments.length} onClick={handleNextClick}>Prev</button>
      <p>Page:{page+1}</p>
    </div>
  )
}

export default Demo
