import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Image from "next/image";
import { partnersData } from "../data/data";

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
        </div>
      </Container>
    </section>
  );
}
