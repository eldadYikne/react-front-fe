import styles from "./header.module.scss";
import { HeaderLink } from "../../types/header";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const links: HeaderLink[] = [
    { text: "Home", href: "home" },
    { text: "Images", href: "images" },
    { text: "Repositories", href: "repositories" },
  ];

  return (
    <div className={styles["header-container"]}>
      <div></div>
      <nav>
        {links.map((link) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              key={link.href}
              to={`/${link.href}`}
              style={({ isActive }) => ({
                color: isActive ? "#57f8bb" : "white",
              })}
            >
              {link.text}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
