import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Board(props){
  const [data, setData] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`/boardrest/list?page=2`)
        .then((res) => {
          console.log('Content-Type:' , res.headers['content-type']);
          console.log("data:", res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log('error: ',error);
        });
  },[]);
  return (

  <div className="container">
    <h1>Board List</h1>
    <button onClick={() => {
      navigate("reply/98");
    }}>페이지 이동 테스트
    </button>

    <button onClick={() =>{
      navigate("/boardform/100")
    }}>글작성하기</button>

    <ul>
      {Array.isArray(data?.list) && data.list.map((d) => {
            return <li key={d.bno} onClick={(event) => {
              navigate(`reply/${d.bno}`)
            }}>{d.title}</li>
          })}
        </ul>
      </div>
  );
}

export default Board;
