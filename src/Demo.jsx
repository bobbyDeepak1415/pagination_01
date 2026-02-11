import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev=>prev + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default Demo;
