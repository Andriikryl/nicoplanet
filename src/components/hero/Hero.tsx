import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Button from "../button/Button";
import SocialGroup from "../socialGroup/SocialGroup";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <SocialGroup />
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>
              try all the flavors of PLanet
            </h1>
            <p className={styles.hero__description}>
              Experience the evolution in nicotine satisfaction. NICOPLANET
              delivers a refreshing burst of flavor and nicotine in a clean,
              more discreet, smokeless way
            </p>
            <Button text="Read more"></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
