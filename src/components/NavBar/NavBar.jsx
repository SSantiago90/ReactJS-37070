import styles from "./navbar.module.css";
import NavLink from "../NavLink/NavLink";
import NavLinkChild from "../NavLink/NavLinkChild";
import NavLinkClass from "../NavLink/NavLinkClass";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <NavLink title="Inicio" />
        <NavLink title="Productos" />
        <NavLink title="Contacto" />
        <NavLinkChild>Child</NavLinkChild>
        <NavLinkClass title="Login" />
      </ul>
    </nav>
  );
}
