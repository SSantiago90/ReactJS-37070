function NavLink(props) {
  console.log(props);

  return (
    <li>
      {props.title} {props.subtitle}
    </li>
  );
}

export default NavLink;
