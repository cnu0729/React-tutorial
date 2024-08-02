import React from 'react';
import './foodmap.css';

const FoodMap = () => {
  return (
    <div>
      <div className="playground-box">
        <div id="pg">
          <p><strong>서울 고척스카이돔</strong></p>
        </div>
        <img src="SSGinside.png" alt="고척스카이돔" />
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
    </div>
  );
};

export default FoodMap;