import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogCardPorps } from "../types/types";

export default function BlogCard({
  src,
  width,
  height,
  alt,
  acentTitle,
  title,
  description,
  date,
}: blogCardPorps) {
  return (
    <article className={styles.card}>
      <Link href={"/"} className={styles.link}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
      <h4 className={styles.card__title}>
        <span className={styles.title__acsent}>{acentTitle}</span>
        {title}
      </h4>
      <p className={styles.card__date}>{date}</p>
      <p className={styles.card__description}>{description}</p>
    </article>
  );
}
