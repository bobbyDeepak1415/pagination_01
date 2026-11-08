import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetchData from './useFetchData'

const Demo = () => {

  const url="https://jsonplaceholder.typicode.com/comments"


  const {allComments}=useFetchData(url)

  
  return (
    <div>
      <h2>Your comments here:</h2>
<ul>

{allComments.map((comment)=>{
  return <li key={comment.id}>{comment.title}</li>
})}
</ul>
    </div>
  )
}

export default Demo
