import React, {useState} from "react";

function FruitSelect(props){
  const [value, setValue] = useState("grape")

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('선택한 과일 :' + event.target.elements[0].selectedOptions[0].text);
    // value = event.target.value
    //내용을 출력하고싶다. -> text
    // event.target.elements[0].selectedOptions[0].text;
    event.preventDefault();
  }
  return(
      <form onSubmit={handleSubmit}>
        <label>
          과일을 선택하세요:
          <select onChange={handleChange} value={value}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="grape">포도</option>
            <option value="watermelon">수박</option>
          </select>
        </label>
        <button>제출</button>
      </form>
  )
}

export default FruitSelect;