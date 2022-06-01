export default function NavLinkChild({ handleOnClick, children }) { 
    return (    
        <li onClick={handleOnClick}>
          {children}
        </li>    
    )
  }