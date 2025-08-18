import React from "react";

const scaleNames = {
  c:" 섭씨",
  f:"화씨",
}
function TemperatureInput(props){
  const  handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  }

  return(
      <fildset>
        <legend>
          온도를 입력해 주세요(단위:{scaleNames[props.scale]});
        </legend>
        <input  value={props.temperature} onChange={handleChange}/>
      </fildset>
  );
}

export default TemperatureInput;