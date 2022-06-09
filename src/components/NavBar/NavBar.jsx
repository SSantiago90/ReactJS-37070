import styles from "./navbar.module.css";
import NavLink from "../NavLink/NavLink";
import NavLinkChild from "../NavLink/NavLinkChild";
import NavLinkClass from "../NavLink/NavLinkClass";

const categorias = ["Inicio", "Productos", "Contacto", "Login"];

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        {
          categorias.map( (cat, index) => {
            return <NavLink key={index} title={cat} />
          })
        }
      </ul>
    </nav>
  );
}
