import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Disclaimer.module.css";
import Pie from "@/components/PieChart";
import Link from "next/link";
import Navigation from "@/components/Menu";
import Button from "@/components/Button";
import WaterWave from "@/components/WaterWave";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.title}>New Habits</h1>

          <div className={styles.content_container}>
            <h2 className={styles.subtitle}>DISCLAIMER</h2>
            <p className={styles.description}>
            New Habits Web App is not associated with medical professionals, do not take this as a professional diagnosis.
            If you are concerned regarding your own or a loved ones substance misuse, please seek professional help.
            We offer resources for you to consult a professional.
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
