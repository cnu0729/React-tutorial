import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './foodmap.css';

const FoodMap = () => {
  return (
    <div>
      <Header />
      <div className="playground-box">
        <div id="pg">
          <p><strong>서울 고척스카이돔</strong></p>
        </div>
        <img src="image/ssg 내부.png" alt="고척스카이돔" />
        <div className="food-container">
          <div id="three">
            <p><strong>3루</strong></p>
            <a href="#">맛집1</a><br />
            <a href="#">맛집2</a>
          </div>
          <div id="one">
            <p><strong>1루, 구장밖</strong></p>
            <a href="#">맛집3</a><br />
            <a href="#">맛집4</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodMap;
