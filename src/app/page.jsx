import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Preserving Your Memories </h1>
        <p className={styles.desc}>
        At MemoryMuse, we understand the profound significance of memories. They&apos;re the threads that weave the fabric of our lives, stitching together moments of joy, sorrow, love, and growth. Our website serves as a sanctuary for these cherished fragments of time, offering a digital haven where memories are safeguarded and celebrated.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
          <button className={styles.button}>Learn More</button>
          </Link>
          <Link href="/contact">
          <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/memories.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
