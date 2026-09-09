import React from 'react'

const Demo = () => {

  const inputFileRef=useRef(0)

  const handleClick=()=>{
    inputFileRef.current.click()
    inputFileRef.current.value=""

  }

  return (
    <div>
      <input ref={inputFileRef} type='file' hidden/>
      <button onClick={handleClick}>Browse files</button>
    </div>
  )
}

export default Demo

