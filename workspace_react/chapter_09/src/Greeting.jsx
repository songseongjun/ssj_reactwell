import React from "react";
import LoginButton from "./LoginButton";

function UserGreeting(props) {
  return <h1>다시 왔군!</h1>;
}

function GuestGreeting(props) {
  return <h1>회원가입 해야지?!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;