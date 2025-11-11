import React from "react";
import "./reviews.css";
import content from "../../../content/content.json";

export default function Reviews() {
  return (
    <>
      <div className="reviews">
        {content.reviews.map((item) => (
          <div key={item.id} className="review">
            <div className="review-author">{item.author}</div>
            <div className="review-text">{item.text}</div>
          </div>
        ))}
        
      </div>
      <a target="_blank" className="all-reviews" href="https://yandex.ru/maps/org/laribrand/103694209198/reviews/?ll=46.029038%2C51.522243&z=16">Все отзывы</a>
    </>
  );
}
