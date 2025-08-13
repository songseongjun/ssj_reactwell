import React,{useState} from "react";

function Button3(props){
  const [isToggleOn,setIsToggleOn] = useState(false);


  function handleClick(){
    setIsToggleOn((isToggleOn) => !isToggleOn)
  }


  const handleConfirm = () => {
    const check =window.confirm("확인하시겠습니까?");
    setIsToggleOn(check);
  }

  return(
      <button onClick={handleConfirm} disabled={isToggleOn}>
        {isToggleOn ? '확인됨' : "확인하기"}
      </button>
  );
}

export default Button3;