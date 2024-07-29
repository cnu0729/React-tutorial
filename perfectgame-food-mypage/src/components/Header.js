import React from 'react';
import '../header-footer.css';

const Header = () => {
  return (
    <header>
      <div id="menu">
        <ul>
          <li><a href="#">PERFECT GAME</a></li>
          <li>
            <a href="#">야구장</a>
            <ul>
              <li><a href="#">야구장 날씨</a></li>
              <li><a href="#">야구장 먹거리</a></li>
            </ul>
          </li>
          <li><a href="#">예매</a></li>
          <li><a href="#">굿즈샵</a></li>
          <li>
            <a href="#">게시판</a>
            <ul>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">야구 지식</a></li>
              <li><a href="#">구장 소개</a></li>
              <li><a href="#">구단 소개</a></li>
            </ul>
          </li>
          <li>
            <a href="#">마이페이지</a>
            <ul>
              <li><a href="#">내 정보</a></li>
              <li><a href="#">예매 내역</a></li>
              <li><a href="#">주문 내역</a></li>
              <li><a href="#">회원 탈퇴</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;