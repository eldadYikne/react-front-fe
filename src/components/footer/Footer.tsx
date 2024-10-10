import { footerLink } from "../../types/footer";
import styles from "./footer.module.scss";

export default function Footer() {
  const footerLinks: footerLink[] = [
    { href: "https://www.linkedin.com/in/eldad-yikne/", image: "linkedin" },
    { href: "https://github.com/eldadYikne", image: "github" },
  ];

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-upper"]}>
        <div className={styles["footer-content"]}>
          Let's be friends
          <div className={styles["link-container"]}>
            {footerLinks.map((link) => {
              return (
                <a key={link.href} className={styles["link"]} href={link.image}>
                  <span>{link.image}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
