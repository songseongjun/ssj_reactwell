import React,{useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginController(props){
  const [isLoggedIn, setIsLoggedIn] =useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick}/>;
  }
  else{
    button = <LoginButton onClick={handleLoginClick}/>;
  }
  return(
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
  )
}

export default LoginController;