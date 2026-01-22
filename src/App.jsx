import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


const Page_Size=10

function App() {
  const [allComments, setAllComments] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );

      setAllComments(response.data);
    };

    fetchData();
  }, []);

const startIndex=page*Page_Size

const currentComments=allComments.slice(startIndex,startIndex+Page_Size)

  const handleClickBack = () => {};

  const handleClickForward = () => {};

  return (
    <div>
      <ol>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <button disabled={page===0} onClick={handleClickBack}>back</button>
      <button disabled={startIndex+Page_Size>=allComments.length} onClick={handleClickForward}>next</button>
    </div>
  );
}

export default App;
