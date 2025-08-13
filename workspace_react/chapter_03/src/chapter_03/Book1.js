import React from "react";

function Book1(props){
  return(
    React.createElement('div', null, [
        React.createElement('h1',null, `!이책의 이름은 ${props.name} 입니다.`),
        React.createElement('h2',null, `!이책은 총 ${props.numOfPage} 페이지로 이루어짐.`),
    ])
  );
}

export default Book1;