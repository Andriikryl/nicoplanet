import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Image from "next/image";
import { partnersData } from "../data/data";
import Button from "../button/Button";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <Container>
        <div className={styles.partners__box}>
          <h4 className={styles.partner__title}>partners</h4>
          <ul className={styles.partner__list} role="list">
            {partnersData.map(({ src, width, height, alt }, index) => {
              return (
                <li key={index}>
                  <Image src={src} width={width} height={height} alt={alt} />
                </li>
              );
            })}
          </ul>
          <h4 className={styles.partner__secTitle}>
            DO YOU WANT TO BECOME A PARTNER OR A RESELLER OF OUR PRODUCTS?
          </h4>
          <p className={styles.partner__description}>
            The product has a small white pouch with a long-lasting flavor and
            can be enjoyed for up to 45 minutes.
          </p>
          <div className={styles.btn__box}>
          <Button text="BECOME DISTRIBUTOR" />
          </div>
        </div>
      </Container>
    </section>
  );
}
