import CartWidget from "./CartWidget";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <a href="/">Link A</a>
        <a href="/">Link B</a>
        <a href="/">Link C</a>
        <CartWidget />
      </ul>
    </nav>
  );
}
