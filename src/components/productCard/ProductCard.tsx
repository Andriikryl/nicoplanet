import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

export default function ProductCard() {
  return (
    <article className={styles.card}>
      <Link href={"/"} className={styles.link}>
        <Image src="/product/product.png" width={250} height={250} alt="" />
      </Link>
      <h4 className={styles.card__title}>
        <span className={styles.title__acsent}>planet</span>
        Coconut Mercury
      </h4>
      <p className={styles.card__description}>
        Just a crazy mint explosion followed by some satisfying freezing tickles
      </p>
      <div className={styles.price__info}>
        <p className={styles.amount}>
          <span>Pieces in can: </span> <span>16 mg</span>
        </p>
        <p className={styles.price}>
          <span>Price:</span> <span>2,20 €</span>
        </p>
      </div>
    </article>
  );
}
