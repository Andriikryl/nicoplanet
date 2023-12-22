"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import BlogCard from "../blogCard/BlogCard";
import { blogCardData } from "../data/data";
import Button from "../button/Button";

const XAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export default function Blog() {
  return (
    <motion.section
      className={styles.blog}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <div className={styles.blog__box}>
          <h3 className={styles.blog__title}>Blog</h3>
          <p className={styles.blog__description}>
            The pouch comes with plant fiber filling and is tobacco free, to
            avoid staining your teeth and bring dripping to a minimum. While the
            low amount of drip makes the release of nicotine and flavor
            extended, to it’s limits.
          </p>
        </div>
        <ul role="list" className={styles.card__box}>
          {blogCardData.map(
            (
              { src, width, heigth, alt, acentTitle, title, description, date },
              index
            ) => {
              return (
                <motion.li key={index} variants={XAnimations} custom={index}>
                  <BlogCard
                    src={src}
                    width={width}
                    height={heigth}
                    alt={alt}
                    acentTitle={acentTitle}
                    title={title}
                    description={description}
                    date={date}
                  />
                </motion.li>
              );
            }
          )}
        </ul>
        <div className={styles.btn__box}>
          <Button text="all PRODUCTS " />
        </div>
      </Container>
    </motion.section>
  );
}
