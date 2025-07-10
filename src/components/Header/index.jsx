import TopLine from "./TopLine";
import styles from "./Header.module.scss";
import CartSection from "./CartSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <TopLine />
      <CartSection />
      <Navbar />
    </header>
  );
};

export default Header;
