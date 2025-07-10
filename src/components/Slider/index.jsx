import React, { useState } from "react";
import styles from "./Slider.module.scss";

const items = [
  {
    title: "Freshly Brewed Coffee",
    description:
      "Experience the rich aroma and taste of our freshly brewed coffee.",
    image: "https://placehold.co/600x400/EEE/31343C",
    buttonText: "Order Now",
  },
  {
    title: "Delicious Pastries",
    description: "Pair your coffee with our selection of delicious pastries.",
    image: "https://placehold.co/600x400/EEE/31343C",
    buttonText: "View Menu",
  },
  {
    title: "Cozy Atmosphere",
    description: "Enjoy your coffee in our cozy and welcoming atmosphere.",
    image: "https://placehold.co/600x400/EEE/31343C",
    buttonText: "Visit Us",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handlePrev}
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <title />
          <g data-name="1" id="_1">
            <path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z" />
          </g>
        </svg>
      </button>

      <div className={styles.carouselTrack}>
        {items.map((slide, index) => (
          <div
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.carouselItemActive : ""
            }`}
            key={index}
          >
            <div className={styles.itemContent}>
              <div className={styles.textSection}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className={styles.buttonCTA}>{slide.buttonText}</button>
              </div>
              <div className={styles.imageSection}>
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleNext}
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <title />
          <g data-name="1" id="_1">
            <path d="M159,450a15,15,0,0,1,10.61-4.39L354.5,260.71a15,15,0,0,1,0-21.21L169.61,54.6a15,15,0,1,1-21.22,21.21L312.68,250.1,138.39,424.39A15,15,0,0,1,159,450Z" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
