import React from 'react'
import useFetchData from './useFetchData'

const Demo = () => {

        let url="https://jsonplaceholder.typicode.com/comments"

        const {allComments}=useFetchData(url)

  return (
    <div>
      Hello
    </div>
  )
}

export default Demo
