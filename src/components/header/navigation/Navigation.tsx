import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const linksData = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Press",
    href: "",
  },
  {
    name: "Products",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
  {
    name: "distribution",
    href: "",
  },
  {
    name: "BECOME DISTRIBUTOR",
    href: "",
  },
];

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list} role="list">
        {linksData.map(({ name, href }, index) => {
          return (
            <li key={index} className={styles.list__item}>
              <Link className={styles.item__link} href={href}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
