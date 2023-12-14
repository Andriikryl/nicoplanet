import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { ButtonProps } from "../types/types";

export default function Button({ text }: ButtonProps) {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <Image src="/icons/btn-arrow.svg" width={51} height={51} alt="" />
    </button>
  );
}
