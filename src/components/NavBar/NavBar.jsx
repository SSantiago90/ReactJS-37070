import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/Fabaceae">Fabaceae</Link>
        </li>
        <li>
          <Link to="/category/Pinaceae">Pinaceae</Link>
        </li>
        <li>
          <Link to="/category/Rosaceae">Rosaceae</Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}
