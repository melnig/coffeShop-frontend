import React from "react";
import image1 from "../../../assets/images/home/purpose/image1.png";
import image2 from "../../../assets/images/home/purpose/image2.png";

import styles from "./Purpose.module.scss";

export default function Purpose() {
  return (
    <div className={styles.purpose}>
      <div className={styles.row}>
        <div className={styles.text}>
          <h2>Our Purpose</h2>
          <p>
            We believe that coffee creates moments of connection. We're inspired
            by the love we all share for coffee, and we're driven to make
            something meaningful—together.
          </p>
          <h4>Store at Coffee Lane today!</h4>
          <button>SHOP HERE</button>
        </div>
        <div className={styles.image}>
          <img src={image1} alt="Purpose Image 1" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={image2} alt="Purpose Image 2" />
        </div>
        <div className={styles.text}>
          <h2>Delicious Coffee</h2>
          <p>
            At Coffee Lane, we believe great taste should never make you wait.
            That’s why we deliver freshly coffee straight to your door — fast
            and hassle-free. Over 20,000 satisfied customers have already made
            us part of their daily ritual. Whether you love bold espresso or
            smooth blends, we’ve got something to satisfy every coffee lover.
            Enjoy rich flavor, cozy moments, and exceptional service — all in
            one cup.
          </p>
          <button>SHOP HERE</button>
        </div>
      </div>
    </div>
  );
}
