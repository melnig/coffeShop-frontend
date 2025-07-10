import Slider from "../../components/Slider";
import styles from "./Home.module.scss";

import React from "react";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Welcome to Our Coffee Shop</h1>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  );
}
