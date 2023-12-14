"use client";
import Link from "next/link";
import React from "react";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Image from "next/image";
import { socailGroupData } from "../data/data";
import styles from "./style.module.css";

export default function SocialGroup() {
  return (
    <ul role="list" className={styles.list}>
      {socailGroupData.map(({ src, name, width, height, href }, index) => {
        return (
          <li key={index} className={styles.list__item}>
            <Link href={href} className={styles.item__link}>
              <VisuallyHidden>{name}</VisuallyHidden>
              <Image src={src} width={width} height={height} alt={name} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
