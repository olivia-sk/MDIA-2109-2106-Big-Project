import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Info.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Logo from "@/components/Logo";

export default function Info() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Info</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Logo/>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.title}>New Habits</h1>

          <div className={styles.content_container}>
            <h2 className={styles.subtitle}>What defines substance misuse?</h2>
            <p className={styles.description}>
              Substance misuse, more commonly known as drug addiction, is the
              misuse of illegal drugs, or inappropriate use of legal drugs.
              Substance misuse affects the user and their family on every level:
              emotional, psychological, financial, and social
            </p>
          </div>

          <div className={styles.button}>
            <Link href="/statistics3/statistics" className={styles.link}>
              Continue
            </Link>
          </div>
          <div className={styles.wave}>
          <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
