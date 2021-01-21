import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/favorites", text: "Favorites" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((navLinks) => (
          <li>
            <Link to={navLinks.to}>{navLinks.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
