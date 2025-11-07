"use client";
import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // чтобы не повторять анимацию
          }
        });
      },
      {
        threshold: 0.2, // 20% элемента должны попасть в зону видимости
      }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return null;
}
