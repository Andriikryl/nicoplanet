"use client";
import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import { poductData } from "../data/data";
import Button from "../button/Button";
import { motion } from "framer-motion";

const XAnimations = {
  hidden: { opacity: 0, x: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export default function Shop() {
  return (
    <motion.section
      className={styles.shop}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <div className={styles.shop__box}>
          <h3 className={styles.shop__title}>
            high quality non-tobacco nicotine pillows
          </h3>
          <p className={styles.shop__description}>
            The product has a small white pouch with a long-lasting flavor and
            can be enjoyed for up to 45 minutes.≈
          </p>
          <ul role="list" className={styles.card__box}>
            {poductData.map(
              (
                {
                  src,
                  width,
                  heigth,
                  alt,
                  acentTitle,
                  title,
                  description,
                  amount,
                  price,
                },
                index
              ) => {
                return (
                  <motion.li key={index} variants={XAnimations} custom={index}>
                    <ProductCard
                      src={src}
                      width={width}
                      height={heigth}
                      alt={alt}
                      acentTitle={acentTitle}
                      title={title}
                      description={description}
                      amount={amount}
                      price={price}
                    />
                  </motion.li>
                );
              }
            )}
          </ul>
          <div className={styles.btn__box}>
            <Button text="all PRODUCTS " />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
