import PostForm from "./PostForm";
import {useState} from "react";
import PostList from "./PostList";

export default function Board() {
  const [list,setList] = useState([]);

  function handleAdd(board){
    setList([...list, board]); //list는 담는것 setlist는 내보내는것 그래서 ...list는 객체가 안에4개있다는것 board느,ㄴ 다른것
  }
  return(
      <div>
        <PostForm onAdd={handleAdd}/>
        <PostList board={list}/>
      </div>
  )
}