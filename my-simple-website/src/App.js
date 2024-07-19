import logo from "./logo.svg";
import "./App.css";
import Game from "./component/Game";
import GameTwoStep from "./component/GameTwoStep";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/Layout/NavBar";
/*
Can't resolve './component/NavBar' in 'C:\Users\user1\react-workspace\my-simple-website\src'
*/
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTapToe/TicTapToe";
import TTTTwoStep from './component/TicTapToe/TTTTwoStep';
import TypingTest from './component/TypingTest';
import MovieGrade from './component/Movie/MovieGrade';


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
        <Route path="/MovieGrade" element={<MovieGrade />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
