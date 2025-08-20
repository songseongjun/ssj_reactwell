import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {data, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Read(props){
  const [dto, setDto] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log(location);
    console.log(queryParams.toString());
    const  bno = queryParams.get('bno'); //쿼리스트링에서 bno값저장

    axios.get(`/boardrest/read?${queryParams.toString()}`)
        .then((res) => {
          // setDto(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log("error:", error);
        });

  },[]);

  return(
      <div className="container">
        <ul>
          {Array.isArray(data?.read) && data.read.map((d) => {
            return <li key={d.bno} onClick={(event) => {
              // navigate(`read/${d.bno}`)
            }}>{d.title}</li>
          })}
        </ul>

      </div>
  );
}


export default Read;