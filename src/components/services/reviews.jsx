import React from "react";
import "./reviews.css";
import content from "../../../content/content.json";

export default function Reviews() {
  return (
    <div className="reviews">
      {content.reviews.map((item) => (
        <div key={item.id} className="review">
          <div className="review-author">{item.author}</div>
          <div className="review-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
