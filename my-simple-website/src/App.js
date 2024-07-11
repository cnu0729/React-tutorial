import logo from "./logo.svg";
import "./App.css";
import Game from "./component/Game";
import GameTwoStep from "./component/GameTwoStep";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTapToe";
import TTTTwoStep from './component/TTTTwoStep';
import TypingTest from './component/TypingTest';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        {/* 링크 모음 */}
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-toStep" element={<GameTwoStep />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tictaptoe" element={<TicTapToe />} />
        <Route path="/TTTTwoStep" element={<TTTTwoStep/>} />
        <Route path="/TypingTest" element={<TypingTest />} />
      </Routes>
    </div>
  );
}

export default App;
