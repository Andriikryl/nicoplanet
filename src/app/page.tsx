import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Quality from "@/components/quality/Quality";

export default function Home() {
  return (
    <>
      <div className="bg"></div>
      <Hero />
      <Quality />
    </>
  );
}
