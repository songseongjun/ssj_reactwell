import React, {useEffect, useState} from "react";
import Board from "./Board";
import axios from "axios";

function BoardForm (props){

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  // 이벤트가 먹지않게 지정해준것
    if (!title.trim() || !content.trim()) return; //공백이있을경우 공백을 없애준다 처음과끝에있는것들 ex)띄어쓰기하고 송성준하면 그냥송성준으로나옴
    setTitle("");   // 애네는 기본값을 공백
    setContent("");
  }

  useEffect(() => {
    axios.get(`/boardform/`)
        .then((res) => {
          console.log('Content-Type:' , res.headers['content-type']);
          console.log("data:", res.data);
          setTitle(res.data);
        })
        .catch((error) => {
          console.log('error: ',error);
        });
  },[]);

  return(
      <div style={{ marginBottom: "20px", border: "1px solid gray", padding: "10px" }}>
      <h3>새 글 작성하기</h3>
  <input
      type="text"
      placeholder="제목을 입력하세요"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{ width: "300px", marginBottom: "10px", display: "block" }}
  />
  <textarea
      placeholder="내용을 입력하세요"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      style={{ width: "300px", height: "100px", display: "block" }}
  />
  <form onSubmit={handleSubmit}>
    <button type="submit" onClick={handleSubmit}>등록</button>
  </form>
      </div>
);
}

export default BoardForm;