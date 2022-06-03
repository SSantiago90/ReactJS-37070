import styles from "../NavBar/navbar.module.css";

export default function NavLink({ title, handleOnClick }) {
  return (
    <li className={styles.redLink} onClick={handleOnClick}>
      {title}
    </li>
  );
}
