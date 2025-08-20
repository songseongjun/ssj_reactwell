import React from "react";

const ThemeContext = React.createContext();

ThemeContext.displayName = "ThemContext";

export default ThemeContext;


// 1.리액트 context를생성
// const ThemeContext = React.createContext()
// 2. 리액트 context 사용할수 있는곳 지정
// <ThemeContext.Provider value={}>
// value속성에 하위 컴포넌트가 사용할수있는 변수명을 넣어 줍니다.
// 3. 사용할 곳에 useContext
// const {} = useContext(ThemeContext);