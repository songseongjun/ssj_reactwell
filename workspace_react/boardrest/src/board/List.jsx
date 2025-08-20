import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {data, useNavigate} from "react-router-dom";

function List(props){
const [list, setList] = useState(null);

// List 컴포넌트가 생성될때 한번만 호출하도록 구성
  useEffect(() =>{
    axios.get('boardrest/list')
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          console.log("error:", error);
        });
  },[]);
  return(
    <table className="table">
      <thead>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>작성자</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(list?.list) && list.list.map((dto) => {
          return <tr>
            <td>{dto.bno}</td>
            <td>{dto.title}</td>
            <td>{dto.writerName}</td>
          </tr>
      })}
      </tbody>
    </table>
  );
}

export default List;