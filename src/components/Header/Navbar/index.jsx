import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Home from "../../../pages/Home";
import Coffee from "../../../pages/Coffee";
import Shop from "../../../pages/Shop";
import OurStory from "../../../pages/OurStory";
import Wholesale from "../../../pages/WholeSale";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link to="/" element={<Home />}>
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/coffee" element={<Coffee />}>
            Coffee
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/shop" element={<Shop />}>
            Shop
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/our-story" element={<OurStory />}>
            Our Story
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/wholesale" element={<Wholesale />}>
            Wholesale
          </Link>
        </li>
      </ul>
    </nav>
  );
}
