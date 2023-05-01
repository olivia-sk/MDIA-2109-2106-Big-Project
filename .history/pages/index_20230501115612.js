import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Link from "next/link";
import HumphreyFloat from "@/components/HumphreyFloat";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Home</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo/>
      <main className={styles.main}>

        <Navigation />
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Welcome To</h2>
          <h1 className={styles.title}>New Habits Web App</h1>
          <p className={styles.description}>
            To identify and help those who suffer from Substance Misuse
          </p>
          <div className={styles.image_container}>
            <HumphreyFloat />
          </div>
          <div className={styles.button}>
            <Link href="/info2/info" className={styles.link}>
              Let's Start
            </Link>
          </div>
          <div className={styles.wave_container}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
