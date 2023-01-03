// npm i react-router-dom 먼저 설치해야 함
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// Route 안에 path 경로 작성. V6 버전부터 Switch 아니라 Routes 로 바뀌고 element 로 연결해야 함.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
