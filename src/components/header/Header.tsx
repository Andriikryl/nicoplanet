import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation/Navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__box}>
          <Link href={"/"}>
            <Image
              src="/logo/logo.svg"
              width={100}
              height={100}
              alt="NicoPlanet"
            />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
