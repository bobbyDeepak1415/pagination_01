import axios from "axios";
// import "./App.css";

import React, { useEffect, useState } from "react";

const Page_Size = 10;

function Demo() {
  const [comments, setComments] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setComments(response.data);
      } catch (e) {
        console.log("failed To fetch", e);
      }
    };

    fetchData();
  });

  const handleClickPrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleClickNext = () => {
    if (startIndex + Page_Size >= comments.length) return;

    setPage((prev) => prev + 1);
  };

  const startIndex = page * Page_Size;

  const currentComments = comments.slice(startIndex, startIndex + Page_Size);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <div>
        <ol start={startIndex + 1}>
          {currentComments.map((comment) => {
            return <li>{comment.name}</li>;
          })}
        </ol>
      </div>
      <div>
        <button disabled={page === 0} onClick={() => handleClickPrev()}>
          Prev
        </button>
        <button
          disabled={startIndex + Page_Size >= comments.length}
          onClick={() => handleClickNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Demo;
