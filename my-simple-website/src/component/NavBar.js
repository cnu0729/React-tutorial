import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">NUMBER GAME</Link>
        </li>
        {/* 2단계 링크를 NavBar에는 작성하지 않음
            -> 1단계를 통과해야 2단계 링크를 보여줄 것
        <li>
          <Link to="/gametwostep">GameTwoStep</Link>
        </li>
         */}
        <li><Link to="/todolist">TO DO LIST</Link></li>
        <li><Link to="/tictaptoe">TicTapToe GAME</Link></li>
        <li><Link to="/TypingTest">Typing Contest</Link></li>
      </ul>
    </nav>
  );
};
export default NavBar;
