"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "../../styles/components_styles/our_team.css";
import content from "../../../content/content.json";

export default function OurTeam() {
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  // Добавьте console.log для отладки
  console.log("Content:", content);
  console.log("Our team text:", content.our_team);

  return (
    <main className="team-section fade-up" ref={blockRef}>
      <h1 className="team-title">
        НАША<br />КОМАНДА
      </h1>

      <div className="team-container">
        <div className="team-text">
          {/* Добавьте проверку на существование текста */}
          <p>{content.our_team || "Текст не найден"}</p>
        </div>

        <div className="team-image">
          <Image
            src={content.our_team_img || "/default-image.jpg"}
            alt="Команда LariBrand"
            width={630}
            height={400}
            className="team-photo"
          />
        </div>
      </div>
    </main>
  );
}