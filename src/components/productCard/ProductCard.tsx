import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { productCardPorps } from "../types/types";

export default function ProductCard({
  src,
  width,
  height,
  alt,
  acentTitle,
  title,
  description,
  amount,
  price,
}: productCardPorps) {
  return (
    <article className={styles.card}>
      <Link href={"/"} className={styles.link}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
      <h4 className={styles.card__title}>
        <span className={styles.title__acsent}>{acentTitle}</span>
        {title}
      </h4>
      <p className={styles.card__description}>{description}</p>
      <div className={styles.price__info}>
        <p className={styles.amount}>
          <span>Pieces in can: </span> <span>{amount}</span>
        </p>
        <p className={styles.price}>
          <span>Price:</span> <span>{price}</span>
        </p>
      </div>
    </article>
  );
}
