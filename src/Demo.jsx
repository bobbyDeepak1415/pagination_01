import axios from "axios";
import React, { useEffect, useState } from "react";

const PageSize = 10;

const Demo = () => {
  const [comments, setComments] = useState([]);

  const [page,setPage]=useState(0)



  useEffect(() => {
    const fetchData = () => {
      try {
        const response = axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setComments(response.data);
      } catch (e) {
        console.log("failed to fecth", e);
      }
    };



    fetchData();
  });

const startIndex=page*PageSize
  const currentComments=comments.splice(startIndex,startIndex+PageSize)


  return <div className="h-[100vh] bg-slate-400"></div>;
};

export default Demo;
