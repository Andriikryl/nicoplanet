import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Quality from "@/components/quality/Quality";
import Shop from "@/components/Shop/Shop";
import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";

export default function Home() {
  return (
    <>
      <div className="bg"></div>
      <Hero />
      <Quality />
      <Shop />
      <About />
      <Blog />
    </>
  );
}
