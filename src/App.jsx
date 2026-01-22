import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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

  const handleClickBack = () => {};

  const handleClickForward = () => {};

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
