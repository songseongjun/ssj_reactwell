import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Board from "./api/Board";
import Reply from "./api/Reply";
import BoardForm from "./api/BoardForm"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Board/>}/>
          <Route path="reply/:bno" element={<Reply/>}/>
          <Route path="boardform/:bno" element={<BoardForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
