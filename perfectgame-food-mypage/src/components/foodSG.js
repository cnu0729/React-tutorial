import React, { useState } from 'react';
import './foodSG.css';

function FoodSG() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userName, setUserName] = useState('');

  const handleAddReview = () => {
    if (userName.trim() && newReview.trim()) {
      const newReviews = [
        ...reviews,
        { id: Date.now(), userName, content: newReview }
      ];
      setReviews(newReviews);
      setNewReview('');
      setUserName('');
    }
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  const handleEditReview = (id) => {
    const newContent = prompt('수정할 내용을 입력하세요');
    if (newContent) {
      setReviews(
        reviews.map(review =>
          review.id === id ? { ...review, content: newContent } : review
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="store-info">
        <div className="location">위치 | 1주 2층 & 3루 1층</div>
        <div className="store-name">원샷치킨</div>
        <div className="menu">
          <ul>
            <li>원샷커리치킨 12.5</li>
            <li>원샷어니언탱지치킨 12.5</li>
            <li>원샷핫로제눈꽃치킨 13.0</li>
            <li>원샷 크림 새우 14.0</li>
            <li>원샷 칠리 새우 14.0</li>
            <li>원샷크림치즈볼 13.0</li>
            <li>원샷통살새우볼 13.0</li>
          </ul>
        </div>
      </div>

      <div className="reviews-section">
        <h3>후기</h3>
        <input
          type="text"
          placeholder="아이디"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          placeholder="후기를 입력하세요"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAddReview}>후기 등록</button>
        <div className="reviews-container">
          {reviews.map(review => (
            <div key={review.id} className="review">
              <div>
                <strong>{review.userName}</strong>: {review.content}
              </div>
              <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
              <button onClick={() => handleEditReview(review.id)}>수정</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodSG;
