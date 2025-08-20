import React,{useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

 function  Reply(props){
   const [data, setData] = useState(null);
   const [bno] =useParams();

   useEffect(() => {
   axios.get(`http://localhost:8080/replies/board/98`)
       .then((res) => {
         console.log('Content-Type:' , res.headers['content-type']);
         console.log("data:", res.data);
         setData(res.data);
       })
       .catch((error) => {
         console.log('error: ',error);
       });
   },[]);
   return(
       <div>
         <h1>BoardReply Data</h1>
         <ul>
         {data && data.map((d) => {
           return <li>{d.text}</li>
         })}
         </ul>
       </div>
   );
 }

 export default Reply;