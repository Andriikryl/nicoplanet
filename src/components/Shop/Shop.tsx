import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ProductCard from "../productCard/ProductCard";

export default function Shop() {
  return (
    <section className={styles.shop}>
      <Container>
        <div className={styles.shop__box}>
          <h3 className={styles.shop__title}>
            high quality non-tobacco nicotine pillows
          </h3>
          <p className={styles.shop__description}>
            The product has a small white pouch with a long-lasting flavor and
            can be enjoyed for up to 45 minutes.≈
          </p>
          <ul>
            <li><ProductCard/></li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
