import styles from "../NavBar/navbar.module.css";

export default function NavLinkChild({ handleOnClick, children }) {
  return (
    <li className={styles.redLink} onClick={handleOnClick}>
      {children}
    </li>
  );
}
