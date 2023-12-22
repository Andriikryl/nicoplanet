import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__box}>
          <div className={styles.contact__info}>
            <h4 className={styles.footer__title}>
              SAY <br />
              HELLO
            </h4>
            <address className={styles.contact__group}>
              <p className={styles.contact}>
                Al. 29 Listopada 94, 31-406 Kraków
              </p>
              <Link className={styles.contact} href="info@nicoplanet.eu">
                info@nicoplanet.eu
              </Link>
              <Link className={styles.contact} href="tel:+48 797 889 128 ">
                +48 797 889 128{" "}
              </Link>
            </address>
          </div>
          <div className={styles.form__box}></div>
        </div>
      </Container>
    </footer>
  );
}
