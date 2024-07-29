import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header-footer.css';

const App = () => {
  return (
    <div>
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
      <div className="container">
        <div className="row mt-6">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src="image/LG 트윈스.png" className="card-img-top" alt="LG 트윈스" style={{ margin: '20px 0' }} />
                <h5 className="card-title">서울 잠실야구장</h5>
                <a href="#" className="btn btn-primary">구경하기</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src="image/키움 히어로즈.png" className="card-img-top" alt="키움 히어로즈" style={{ margin: '20px 0' }} />
                <h5 className="card-title">서울 고척스카이돔</h5>
                <a href="#" className="btn btn-primary">구경하기</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src="image/SSG 랜더스.png" className="card-img-top" alt="SSG 랜더스" style={{ margin: '20px 0' }} />
                <h5 className="card-title">인천 SSG랜더스필드</h5>
                <a href="#" className="btn btn-primary">구경하기</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src="image/KIA 타이거즈.png" className="card-img-top" alt="KIA 타이거즈" style={{ margin: '20px 0' }} />
                <h5 className="card-title">광주 기아챔피언스필드</h5>
                <a href="#" className="btn btn-primary">구경하기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        (주)PERFECT GAME | 서울 강남구 테헤란로14길 6 | 1544-9970 Copyrightⓒ
        PERFECT GAME, All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
