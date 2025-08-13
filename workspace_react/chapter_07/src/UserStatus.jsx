import React, {useState,useEffect} from "react";

function UserStatus(){
  const [isOnline,setIsOnline] = useState(null);

  function  handleStatusChange(status){
    setIsOnline(status,isOnline);
  }

  useEffect(() =>{
    ServeAPI.subscribeUserStatus(props.id, handleStatusChange);
    return() => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  },[]);
      if (isOnline == null){
        return'대기중...';
  }
      return isOnline ? "온라인" : "오프라인";
}