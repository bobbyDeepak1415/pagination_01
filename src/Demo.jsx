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
  }, []);

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + Page_Size <= allComments.length) {
      setPage((prev) => prev + 1);
    }
  };

  const startIndex = page * Page_Size;

  const currentComments = allComments.slice(startIndex, startIndex + Page_Size);

  return (
    <div>
      <ol start={page * Page_Size + 1}>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <button onClick={handlePrev} disabled={page === 0}>
        Prev
      </button>
      <button
        disabled={startIndex + Page_Size >= allComments.length}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Demo;

//   "",
