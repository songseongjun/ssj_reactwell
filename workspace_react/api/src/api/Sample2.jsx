import React, {useState, useEffect, use} from "react";
import axios from "axios";

function Sample2(props){
  const [data,setData] = useState(null);

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/typicode/demo/posts`)
        .then((res) => {
          console.log('Content-Type:', res.headers['content-type']);
          setData(res.data);
        })
        .catch((error) => {
          console.log("error: ",error);
        })
  },[]);

  return(
      <div>
        <h1>API (AXIOS)</h1>
        {data && data.map((d) => {
          return <p key={d.id}>{d.id} : {d.title}</p>
        })}
      </div>
  );
}

export default Sample2;
