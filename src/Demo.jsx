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

  const startIndex = page * Page_Size;

  const currentComments = comments.slice(startIndex, startIndex + Page_Size);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <div>
        <ul>
          {currentComments.map((comment) => {
            return <li>{comment.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Demo;
