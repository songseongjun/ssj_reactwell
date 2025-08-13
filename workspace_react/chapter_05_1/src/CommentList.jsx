import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments =[
  {
    name:"송성준",
    comment:"내가 만든 첫 컴포넌트다"
  },
  {
    name:"김지유",
    comment:"내가 만든 첫 컴포넌트다"
  },
  {
    name:"김밥",
    comment:"내가 만든 첫 컴포넌트다"
  },
];

function CommentList(props){
  return(
    <div>
      {comments.map((comment=>
      {
          return(
            <Comment name={comment.name} comment={comment.comment}/>
        );
      }
      ))}
    </div>
  );
}

export default CommentList;