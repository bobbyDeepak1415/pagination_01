import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import axios from "axios";

function App() {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
    );

    let localCommentsArr = response.data;
    setComments(localCommentsArr.slice(0, 10));
  };



  useEffect(() => {
    fetchData();
  }, []);

  const handleClickBack = () => {};

  const handleClickForward = () => {
    if (localCommentsArr.length>0) {
        
    }
  };

  return (
    <div>
      <ol>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <button onClick={handleClickBack}>back</button>
      <button onClick={handleClickForward}>next</button>
    </div>
  );
}

export default App;
