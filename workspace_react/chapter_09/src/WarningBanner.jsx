import React from "react";

function WarningBanner(props){
  if (!props.warning){
    return null;
  }

  return (
      <div style={{color:'red',fontSize:30}}>!경고!</div>
  );
}

export default WarningBanner;