(React + Spring Boot)

리액트로 만든 게시판/댓글 예제입니다.
목록은 /boardrest/list에서 REST JSON으로 받아 렌더링하고, 댓글은 /replies/board/{bno}로 불러옵니다.

Frontend: React + React Router + Axios
Backend: Spring Boot + JPA (예시)
UI: styled-components(선택) 또는 기본 CSS

✨ 주요 기능

글 목록 조회 (페이징/검색 파라미터 지원)

글 클릭 시 상세 댓글 페이지로 이동

댓글 리스트 렌더링

(선택) 글 작성 폼 – REST로 등록 후 목록 갱신

🧱 기술 스택

React 18, react-router-dom

Axios (HTTP 클라이언트)

Vite / CRA 중 하나(이 예시는 CRA 기준)

Spring Boot (REST API)

(옵션) styled-components

🚀 빠른 시작 (Getting Started)
1) 백엔드 먼저 실행

스프링부트 프로젝트를 실행하고 다음 엔드포인트들이 동작하는지 확인합니다.

GET http://localhost:8080/boardrest/list?page=1&size=10

GET http://localhost:8080/replies/board/{bno}

2) 프런트엔드 설치 & 실행
# 프로젝트 설치
npm install

# 개발 서버 실행
npm start


기본 포트는 http://localhost:3000 입니다.

프록시(권장)
CRA라면 package.json에 아래를 추가하면 CORS 없이 백엔드 호출이 가능합니다.

{
  "proxy": "http://localhost:8080"
}


이후 프런트에서 axios.get('/boardrest/list') 처럼 상대경로로 호출하세요.

📜 NPM Scripts
npm start        # 개발 서버 실행 (HMR, lint 오류 콘솔에 표시)
npm test         # 테스트 러너 실행 (watch 모드)
npm run build    # 프로덕션 빌드 (build/ 폴더 생성)
npm run eject    # CRA 구성 꺼내오기 (되돌릴 수 없음, 웬만하면 비추)

🗂️ 폴더 구조(예시)
src/
├─ components/
│  ├─ Board.jsx       # 목록 + (옵션) 글쓰기 폼
│  └─ Reply.jsx       # 댓글 목록
├─ pages/             # 라우팅 페이지 구성 시
├─ App.jsx
├─ index.js
└─ styles/            # 스타일 파일(선택)

🧭 라우팅
import { Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Reply from "./components/Reply";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/reply/:bno" element={<Reply />} />
    </Routes>
  );
}

🔌 백엔드 API (예시)
목록 조회
GET /boardrest/list?page=1&size=10&type=t&keyword=리액트
Accept: application/json


응답 예시

{
  "list": [
    { "bno": 1, "title": "리액트에서 리스트 렌더링하기", "writerName": "소플", "replyCount": 5, "regDate": "2025-01-01T12:00:00" }
  ],
  "page": 1,
  "size": 10,
  "prev": false,
  "next": true,
  "start": 1,
  "end": 10,
  "pageList": [1,2,3,4,5,6,7,8,9,10]
}

댓글 조회
GET /replies/board/{bno}
Accept: application/json


응답 예시

[
  { "id": 11, "text": "좋은 글 감사합니다!" },
  { "id": 12, "text": "map 함수 많이 쓰죠 😄" }
]

🧩 예시 코드 스니펫
목록 컴포넌트 (Board.jsx)
import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Board(){
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/boardrest/list", { params: { page: 1, size: 10 } })
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {Array.isArray(data?.list) && data.list.map((d) => (
          <li key={d.bno} onClick={() => navigate(`/reply/${d.bno}`)}>
            {d.title} <span style={{color:"crimson"}}>[{d.replyCount}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Board;

댓글 컴포넌트 (Reply.jsx)
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Reply(){
  const { bno } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/replies/board/${bno}`)
      .then(res => setComments(res.data))
      .catch(console.error);
  }, [bno]);

  return (
    <div>
      <h1>Comments of {bno}</h1>
      <ul>
        {comments.map(c => <li key={c.id ?? c.rno}>{c.text}</li>)}
      </ul>
    </div>
  );
}

🧪 개발 팁 & 트러블슈팅

CORS 오류

프록시 사용(package.json의 "proxy") 또는 백엔드 @CrossOrigin 설정

리스트 key 경고

<li key={고유값}> 필수. 보통 bno, id 사용

React 18 StrictMode

개발모드에서 useEffect가 두 번 실행될 수 있음(요청이 2번 갈 수 있음). 실제 빌드에선 1번

쿼리 파라미터

axios.get(url, { params: { page, size, type, keyword }}) 형태 추천(문자열로 직접 붙이기보다 안전)

📚 참고

React: https://reactjs.org

React Router: https://reactrouter.com

Axios: https://axios-http.com

Create React App: https://create-react-app.dev

🛡️ 라이선스

이 저장소의 라이선스가 정해져 있다면 여기에 명시하세요. (예: MIT)

스크린샷이 있으면 docs/ 폴더에 넣고 아래처럼 추가해줘요:

## 화면 미리보기

![Board List](./docs/board-list.png)
![Reply](./docs/reply.png)
