import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Button from "../button/Button";
import Image from "next/image";
export default function About() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__box}>
          <div className={styles.content__box}>
            <h3 className={styles.about__title}>about nicoplanet</h3>
            <p className={styles.about__description}>
              The company Nico Planet is engaged in the production of nicotine
              products of the highest quality. We deliver products to customers
              as quickly as possible with no order minimum. All of our products
              have a pronounced taste, retain optimal humidity, and are produced
              under strict control on our high precision equipment. We are
              excited to work with you!
            </p>
            <Button text="Contacts" />
          </div>
          <div className={styles.image__box}>
            <Image
              src="/about/content.svg"
              width={274}
              height={274}
              alt="nico planet"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
