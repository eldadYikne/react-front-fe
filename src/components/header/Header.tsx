import styles from "./header.module.scss";
import { HeaderLink } from "../../types/header";
import { Link, Location, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const links: HeaderLink[] = [
    { text: "Home", href: "home" },
    { text: "Images", href: "images" },
    { text: "Repositories", href: "repositories" },
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location: Location = useLocation();

  return (
    <div className={styles["header-container"]}>
      <div className={styles["title"]}>
        {location.pathname.substring(1).charAt(0).toUpperCase() +
          location.pathname.substring(2)}
      </div>
      <nav
        className={`${styles["nav-links-container"]} ${
          menuOpen ? styles["menu-open"] : ""
        }`}
      >
        {links.map((link) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              key={link.href}
              to={`/${link.href}`}
              style={({ isActive }) => ({
                color: isActive ? "#57f8bb" : "white",
              })}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {link.text}
            </NavLink>
          );
        })}
      </nav>

      <span
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className={styles.menuButton}
      >
        ☰
      </span>
    </div>
  );
}
