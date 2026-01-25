import axios from "axios";
// import { comment } from "postcss";
import React, { useEffect, useState } from "react";

const PageSize = 10;

const Demo = () => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const response = axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setAllComments(response.data);
      } catch (e) {
        console.log("failed to fecth", e);
      }
    };

    fetchData();
  });

  return (
    <div>
       <ol>
        {allComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol> 
      
    </div>
  );
};

export default Demo;
