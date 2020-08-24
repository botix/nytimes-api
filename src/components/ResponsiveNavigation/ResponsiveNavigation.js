import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResponsiveNavigation({ navLinks, background, hoverBackground , linkColor, logo }){
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return(
    <nav 
      className="responsive-navbar"
      style={{background: background}}
    >
      <ul 
      style={{background: background}}
      className={ navOpen ? "active" : ""}
      >
        <figure onClick = { () => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="50px" alt="logo-nav-toggler"/>
        </figure>
        
        {navLinks.map((link, idx) => (
          <li 
            onMouseEnter={ () => setHoverIndex(idx)}
            onMouseLeave={ () => setHoverIndex(-1)}
            onClick= { () => navOpen ? setNavOpen(!navOpen) : null}
            key={idx}
            style={{ background: (hoverIndex === idx) ? hoverBackground || "#999AAA" : ""}}
          >
            <Link
              to={link.path}
              style={{ color: linkColor }}
            >
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default ResponsiveNavigation;