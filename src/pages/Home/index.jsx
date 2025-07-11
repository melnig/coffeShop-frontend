import React from "react";

import Slider from "./Slider";
import Purpose from "./Purpose";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Welcome to Our Coffee Shop</h1>
      </div>
      <div className={styles.slider}>
        <Slider />
        <Purpose />
      </div>
    </div>
  );
}
