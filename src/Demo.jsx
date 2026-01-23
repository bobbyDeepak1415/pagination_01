import axios from "axios";
import React, { useEffect, useState } from "react";


const Page_Size=10

function Demo() {
  const [allComments, setAllComments] = useState([]);
  const [page,setPage]=useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setAllComments(response.data);
      } catch (e) {
        console.log("failed to fetch..", e);
      }
    };

    fetchData();
  });

  const startIndex=page*Page_Size

  const currentComments=allComments.slice(startIndex,startIndex+Page_Size)


  return (
    <div>
      {/* <h1>Hello</h1> */}
      <ol>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}

export default Demo;
