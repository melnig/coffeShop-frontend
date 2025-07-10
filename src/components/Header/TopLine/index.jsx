import React from "react";
import styles from "./TopLine.module.scss";

export default function TopLine() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className={styles.marqueeItem}>
            Coffee Lane is open! Use <strong>WELCOME10</strong> for 10% off your
            first order!
          </span>
        ))}
      </div>
    </div>
  );
}
