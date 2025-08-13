import React,{useState,useEffect} from "react";

function Counter(props){
  // var count =0;
const [count,setCount] = useState(0);
const [minus,setMinus] = useState(0);

useEffect(() =>{
  document.title = `총${minus} 번 클릭했습니다`;
  setMinus(minus - count );
},[count]);


  return(
      <div>
        <p>총 {count} 번 클릭했습니다</p>
        <button onClick={() => setCount(count+1)}>
          클릭
        </button>
        <p>{minus}</p>
      </div>
  );
}

export default Counter;