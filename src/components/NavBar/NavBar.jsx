import NavLink from "../NavLink/NavLink";
import NavLinkChild from "../NavLink/NavLinkChild";
import NavLinkClass from "../NavLink/NavLinkClass";
import styles from "./navbar.module.css";

export default function NavBar() {
  function handleClick() {
    console.log("click");
  }

  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <NavLink handleOnClick={handleClick} title="Productos" />
        <NavLink handleOnClick={handleClick} title="Servicios" />
        <NavLink handleOnClick={handleClick} title="Contacto" />
        <NavLinkChild handleOnClick={handleClick}>Login</NavLinkChild>
        <NavLinkClass title="ClassComponent"></NavLinkClass>
      </ul>
    </nav>
  );
}
