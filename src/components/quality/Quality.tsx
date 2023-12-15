import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Button from "../button/Button";

export default function Quality() {
  return (
    <section className={styles.quality}>
      <Container>
        <div className={styles.quality__box}>
          <h2 className={styles.quality__title}>
            high-quality non-tobacco nicotine pads
          </h2>
          <p className={styles.quality__description}>
            The pouch comes with plant fiber filling and is tobacco free, to
            avoid staining your teeth and bring dripping to a minimum. While the
            low amount of drip makes the release of nicotine and flavor
            extended, to it’s limits.
          </p>
          <p className={styles.quality__description}>
            The product has a small white pouch with a long-lasting flavor and
            can be enjoyed for up to 45 minutes.
          </p>
          <Button text="all PRODUCTS " />
        </div>
      </Container>
    </section>
  );
}
