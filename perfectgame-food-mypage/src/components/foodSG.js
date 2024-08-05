import React, { useState, useEffect } from "react";
import "./foodSG.css";
import axios from 'axios';

function FoodSG() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [userName, setUserName] = useState("");
  const [menu, setMenu] = useState([]);
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    // 메뉴 및 상호명 가져오기 (예: playgroundId가 1인 경우)
    axios.get('/api/food/{playground}')
      .then(response => {
        const foodData = response.data;
        if (foodData.length > 0) {
          setStoreName(foodData[0].foodName); // 상호명 설정
          const parsedMenu = foodData.map(item => ({
            foodName: item.foodName,
            foodMenu: JSON.parse(item.foodMenu),
            foodPrice: JSON.parse(item.foodPrice)
          }));
          setMenu(parsedMenu);
        }
      })
      .catch(error => {
        console.error('Error fetching food details:', error);
      });
  }, []);

  const handleAddReview = () => {
    if (userName.trim() && newReview.trim()) {
      const newReviews = [
        ...reviews,
        { id: Date.now(), userName, content: newReview },
      ];
      setReviews(newReviews);
      setNewReview("");
      setUserName("");
    }
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleEditReview = (id) => {
    const newContent = prompt("수정할 내용을 입력하세요");
    if (newContent) {
      setReviews(
        reviews.map((review) =>
          review.id === id ? { ...review, content: newContent } : review
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="store-info">
        <div className="store-name">{storeName}</div>
        <div className="menu">
          <ul>
            {menu.map((item) => (
              <li key={item.foodId}>{item.foodName} {item.foodPrice}</li>
            ))}
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
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <div>
                <strong>{review.userName}</strong>: {review.content}
              </div>
              <button onClick={() => handleDeleteReview(review.id)}>
                삭제
              </button>
              <button onClick={() => handleEditReview(review.id)}>수정</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodSG;
