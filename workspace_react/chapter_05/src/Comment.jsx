import React from "react";
import Avatar from "./Avatar";
import CommentText from "./CommentText";
function formatDate(date){

}

function Comment(props){
  return(
      <div className="comment">
        <div className="user-info">
          <Avatar user={props.author}/>

          <div className="user-info-name">
            {props.author.name}
          </div>
        </div>

        <CommentText text={props.text} date={formatDate(props.date)}/>

      </div>
  );
}

export default Comment;