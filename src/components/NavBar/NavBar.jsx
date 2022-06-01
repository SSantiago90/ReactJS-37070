import NavLink from "../NavLink/NavLink";
import NavLinkChild from "../NavLink/NavLinkChild";
import NavLinkClass from "../NavLink/NavLinkClass";
//importar y renderizar CartWidget
import "./navbar.css";

export default function NavBar() { 

  function handleClick(){
    console.log("click");
  }

  return (
    <nav className="nav-main">
      <ul className="nav-list">

          <NavLink handleOnClick={handleClick} title="Productos"/>
          <NavLink handleOnClick={handleClick} title="Servicios"/>
          <NavLink handleOnClick={handleClick} title="Contacto"/>
          <NavLinkChild handleOnClick={handleClick}>
            Login
          </NavLinkChild> 
          <NavLinkClass title="ClassComponent"></NavLinkClass>         
          {/* <CartWidget/> */}
      </ul>
    </nav>
  );
}
