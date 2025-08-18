// Web.jsx
import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";


// 함수형 컴포넌트
// 컴포넌트의 이름의 첫글자는 대문자로 쓴다.
function Web(props) {
  const topics =[
    {id:1, title:"html",content:"html is....",},
    {id:2, title:"css",content:"css is....",},
    {id:3, title:"javascript", content:"js is....",},
  ];
  // Header
  // Nav
  // Article
  return (
      // 최상단 element는 하나여야 합니다.
      <div>
        <Header title="WEB"/>
        <Nav topics={topics} />
        <Article title="Welcomses" content="Hello,WEB!!!"/>
      </div>
  );
}

// 다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언입니다.
export default Web;