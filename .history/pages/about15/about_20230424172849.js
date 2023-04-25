import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Link from "next/link";
import HumphreyFloat from "@/components/HumphreyFloat";

export default function About() {
  return (
    <>
      <Head>
        <title>New Habits Web App | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <h2 className={styles.subtitle}>This is Humphrey</h2>
          <div className={styles.image_container}>
            <HumphreyFloat />
          </div>
          <p className={styles.description}>
            text about humphrey
          </p>
          <h1 className={styles.title}>Developers</h1>
          <h2 className={styles.subtitle}>Olivia</h2>
          
        </div>
      </main>
    </>
  );
}
