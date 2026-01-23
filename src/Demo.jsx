import axios from 'axios'
import React, { useEffect } from 'react'

const Demo = () => {

    useEffect(()=>{
const fetchData=async()=>{
    try{

        const response=await axios.get("https://jsonplaceholder.typicode.com/comments")
        set
    }catch(e){
console.log("failed to fetch...",e)
    }

}
fetchData()
    },[])

  return (
    <div>
      Hello
    </div>
  )
}

export default Demo


//   "",