import {useState} from "react";

export default function PostList({board}){

  const {clicked,setClicked} =useState(null);

  const handleClick = (e) => {
    setClicked(!clicked);
  }


  return (
      <ul>
        {board.map((b, i) => (<li key={i}><p>{b.title}</p><p>{b.content}</p></li>))}
      </ul>
  )              //map은 뒤죽박죽섞인 객체를 순환하는것 그래서 b,i  b안에는 handleTitle,handleContent값이있는것
        //  i는 인덱스 0,1,2,3이렇게 차례대로 순차적으로부를려고 지정해줌 그래서 key에 {i}를넣었다
}

