import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { linksData } from "@/components/data/data";

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
