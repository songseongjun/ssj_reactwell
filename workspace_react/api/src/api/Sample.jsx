import React,{useState, useEffect} from "react";

function Sample(props){
  //Api 호출을 ㅁ통해서 받아올 데이터 저장
  const [data, setData] =useState(null);

  useEffect(() => {
    // useEffect의 첫번째는 렌더링후 실행할 함수
    // 두번째는 의존성배열
    //두번째 인자가 없으면 렌더링 할 때마다 실행
    // 비어있는 []로 들어가면 생성될때 실행
    //[no] 생성될때 + no가 변경될때 실행


    //외부API호출방법
    // 1.fetch : 자바스크립트 내장함수 - 그냥사용
    // 2. axios: 외부 라이브러리 사용 - 설치필요
    window
        .fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
        .then((res)=> {
          console.log('Content-Type:', res.headers.get('content-type'));
          return res.json();
        })
        .then((d) => {
          setData(d);
        })
        .catch((error) => {
      console.log("error:",error);
    });
  },[])

  return (
      <div>
        <h1>API DATA</h1>
        {data && data.map((d) => {
          return <p key={d.id}>{d.id} : {d.title}</p>
        })}
      </div>
  )
}
export default Sample;
