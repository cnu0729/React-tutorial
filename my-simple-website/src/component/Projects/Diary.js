import React from "react";

const Diary = () => {
    //일기장 소개 일기장 이미지 일기장 gif 일기장 작성
    return(
        <div className="home-container">
        <header className="home-header">
            <h1>나만의 다이어리</h1>
            <p>사진을 등록해서 일기를 작성할 수 있고, 
               D-day와 기념일을 추가할 수 있는 캘린더의 기능도 할 수 있습니다.
               만약 계정ID와 비밀번호를 공유한다면,
               하나의 다이어리를 여러 사람이 작성 및 열람할 수도 있고,
               -;D-day와 기념일 또한 공유할 수 있습니다.</p>
        </header>
        {/***** 소개 섹션 part1과 part2가 존재 *****/}
        {/* part1 | 사진을 넣지 않고 소개만 작성하는 about */}
        <section className="home-about-one">
            <h2>소개</h2>
            <p>저는OOO입니다. KH정보교육원에서  FullStack 과정을 수료했습니다.</p>
        </section>

        {/* part2 | 한 row를 두 colum으로 나눠서 좌측은 사진 우측은 소개 작성하는 about */}
        <section className="home-about-two">
        <h2>소개</h2>
            <div className="about-row">
                <div className="about-image">
                    <img src="/hancom.jpg" alt="프로필사진" />
                </div>
                <div className="about-text">
                    <p>이름 : </p>
                    <p>나이 : </p>
                    <p>이메일    : </p>
                    <p>학력/전공 : </p>
                    <p>수료과정  : </p>
                    <p>깃허브주소 : <a href="https://www.github.com/cnu0729">https://www.github.com/cnu0729</a></p>
                </div>
            </div>
        </section>

        {/* 보유 기술 섹션 */}
        <section className="home-skills">
            <h2>기술</h2>
            <ul>
                <li>HTML / CSS / JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>SQL : Oracle, MySQL</li>
            </ul>
        </section>

        {/* 프로젝트 소개 | 1개의 프로젝트당 섹션 1개씩 작성 */}
        <section className="home-projects">
            <h2>프로젝트</h2>
            <div className="project-item">
                <h3>중간 과제 프로젝트</h3>
                <p>간단한 프로젝트 설명</p>
                {/* Link to 이용해서 프로젝트 이동 js 작성하기 */}
            </div>
        </section>
    </div>
    );
};
export default Diary;