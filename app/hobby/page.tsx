"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const hobbyPhotos = [
  { src: "/hobby1.png", alt: "日常照片 1" },
  { src: "/hobby7.jpg", alt: "日常照片 2" },
  { src: "/hobby3.jpg", alt: "日常照片 3" },
  { src: "/hobby4.jpg", alt: "日常照片 4" },
  { src: "/hobby5.jpg", alt: "日常照片 5" },
  { src: "/hobby6.jpg", alt: "日常照片 6" },
  { src: "/hobby2.jpg", alt: "日常照片 7" },
];

export default function HobbyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? hobbyPhotos.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === hobbyPhotos.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) =>
        prev === hobbyPhotos.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="page-section hobby-page">
      <div className="hobby-intro">
        <h1 className="section-title">我的興趣</h1>
        <p className="section-text">
          平常是快樂追星女! 喜歡幫娃娃做手工(縫娃衣之類的)
        </p>
        <p className="section-text">
          喜歡做甜點，比較擅長做布朗尼(鹹派也不錯)! 在2024的聖誕市集擺過攤位~
        </p>
        <p className="section-text">
          有空的話也會和家人一起出國旅行~
        </p>
      </div>

      <div
        className="hobby-coverflow-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hobby-coverflow-header">
          <h2 className="hobby-gallery-title"></h2>

          <div className="hobby-controls">
            <button
              type="button"
              className="hobby-control-btn"
              onClick={goPrev}
              aria-label="上一張"
            >
              ←
            </button>
            <button
              type="button"
              className="hobby-control-btn"
              onClick={goNext}
              aria-label="下一張"
            >
              →
            </button>
          </div>
        </div>

        <div className="hobby-coverflow-frame">
          <div
            className="hobby-coverflow-track"
            style={{
              transform: `translateX(calc(50% - ${activeIndex * 240 + 110}px))`,
            }}
          >
            {hobbyPhotos.map((photo, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;
              const isEdgePrev =
                activeIndex === 0 && index === hobbyPhotos.length - 1;
              const isEdgeNext =
                activeIndex === hobbyPhotos.length - 1 && index === 0;

              let cardClass = "hobby-coverflow-card";

              if (isActive) {
                cardClass += " active";
              } else if (isPrev || isEdgePrev) {
                cardClass += " prev";
              } else if (isNext || isEdgeNext) {
                cardClass += " next";
              } else {
                cardClass += " far";
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={cardClass}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`查看第 ${index + 1} 張照片`}
                >
                  <div className="hobby-coverflow-image-wrap">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="hobby-coverflow-image"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="hobby-dots" aria-label="照片輪播指示器">
          {hobbyPhotos.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hobby-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`切換到第 ${index + 1} 張照片`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}