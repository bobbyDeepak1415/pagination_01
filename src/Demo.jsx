import axios from "axios";
import React, { useEffect, useState } from "react";

const Page_Size = 10;
const Demo = () => {
  const [allComments, setAllComments] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );

        setAllComments(response.data);
      } catch (e) {
        console.log("failed to fetch...", e);
      }
    };

    fetchData();
  });

  const startIndex = Page_Size * page;

  const currentComments = allComments.slice(startIndex, startIndex + Page_Size);

  const handleClickBack=()=>{
    
  }

  return (
    <div>
      <ul>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
      <div>
        <button onClick={handleClickBack} disabled={page === 0}>
          Prev
        </button>
        <button
          onClick={handleClickNext}
          disabled={startIndex + Page_Size >= allComments.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Demo;
