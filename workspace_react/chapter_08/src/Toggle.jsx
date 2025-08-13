import React,{useState} from "react";

function Toggle(props){
  const [isToggleOn,setIsToggleOn] = useState(false);

  // 이벤트처리
  // 방법1 :함수로 구현
  function handleClick(){
    setIsToggleOn((isToggleOn) => !isToggleOn)
  }

  //방법2 : 함수를 대입한 변수로 구현
  const handleClick1 = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  };

  return(
      <button onClick={handleClick}>
        {isToggleOn ? '켜짐' : "꺼짐"}
      </button>
  );
}

export default Toggle;