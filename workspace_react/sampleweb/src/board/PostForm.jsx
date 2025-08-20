import {useState} from "react";

export default function PostForm({onAdd}){
  const [title,setTitle] =useState('');
  const [content,setContent] =useState('');

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();  // 이벤트가 먹지않게 지정해준것
    if (!title.trim() || !content.trim()) return; //공백이있을경우 공백을 없애준다 처음과끝에있는것들 ex)띄어쓰기하고 송성준하면 그냥송성준으로나옴
    onAdd({title,content});
    setTitle("");   // 애네는 기본값을 공백
    setContent("");
  }
  return(
       <form onSubmit={handleSubmit}>
          {/*저장할때 sumbit에서 공백안먹게하기위해  onChange는 input의값이바뀔때 사용하는것이다*/}
        <input type="text" value={title} onChange={handleTitle} placeholder="Title"/>
        <input type="text" value={content} onChange={handleContent} placeholder="Content"/>
        <button type="submit"> 저장</button>
      </form>
  )
}