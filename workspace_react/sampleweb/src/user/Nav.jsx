import React from "react";

function Nav(props) {
  const topics = props.topics;
  //const {topics} = props; props안에 topics가있을경우만 사용가능

  //1 map사용
  // const listItems = topics.map((topic) =>
  //   <li key={topic.id}><a href="/">{topic.title}</a></li>
  //     )


  //2 for문사용
  const lis = [];
  for (let i =0; i<topics.length; i++){
    let  topic = topics[i];
    lis.push(<li key={topic.id}><a id ={topic.id} href="/" onClick={(event) =>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{topic.title}</a></li>);
  }


  return (
      <div>
        <ol>
          {lis}
        </ol>
      </div>
  );
}

export default Nav;