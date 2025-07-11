import React, { useState } from "react";
import styles from "./Slider.module.scss";
import sliderImg1 from "../../../assets/images/home/slider1/slider-img1.png";
import sliderImg2 from "../../../assets/images/home/slider1/slider-img2.png";
import sliderImg3 from "../../../assets/images/home/slider1/slider-img3.png";

const items = [
  {
    title: "Gentle Pleasure",
    description: "DECAF, FULL OF TASTE",
    text: "Who says decaf can't be bold? This trio delivers rich taste and smooth crema — without the caffeine. Sip day or night and savor every moment, worry-free.",
    image: sliderImg1,
    buttonText: "Buy now!",
  },
  {
    title: "Holiday Favorite",
    description: "TOFFEE NUT BLISS",
    text: "Sweet, nutty, and cozy — just like your favorite winter memories. This limited blend wraps you in warm toffee notes and festive cheer. One sip, and it’s holiday season in a cup.",
    image: sliderImg2,
    buttonText: "Buy now!",
  },
  {
    title: "Bold & Unique",
    description: "IRISH COFFEE VIBES",
    text: "A hint of whiskey aroma, a wave of smooth coffee — this drink brings warmth with every sip. Elevate your breaks with Jacobs' twist on a classic Irish delight.",
    image: sliderImg3,
    buttonText: "Buy now!",
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
                <h3>{slide.description}</h3>
                <p>{slide.text}</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.buttonCTA}>
                    {slide.buttonText}
                  </button>
                </div>
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
