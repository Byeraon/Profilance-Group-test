import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { News } from "./components/News/News";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
