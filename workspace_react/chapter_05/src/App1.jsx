import React from "react";
import Welcome from "./Welcome";

//컴포넌트 합성: 다른컴포넌트들을 합성함
function App1(props){
  return(
      <div>
        <Welcome name={"Mike"}/>
        <Welcome name={"Steve"}/>
        <Welcome name={"Jane"}/>
      </div>
  );
}

export default App1;