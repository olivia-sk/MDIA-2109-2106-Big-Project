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
      <main className={styles.parent}>
          <div class={styles.div3}>
          <h1 className={styles.title}>New Habits</h1>
          </div>
          <Navigation/>
          <div className={styles.div1}>
            <h2>Disclaimer</h2>
            <p>New Habits Web App is not associated with medical professionals, do not take this as a professional diagnosis.
If you are concerned regarding your own or a loved ones substance misuse, please seek professional help.
We offer resources for you to consult a professional.</p>
          </div>
          <div class={styles.div2}>
            <div className={styles.button}>
              <Link href="/get_started5/get_started" className={styles.link}>Continue</Link>
            </div>
            <div className={styles.wave}>
            
            </div>
            
          </div>
      </main>
    </>
  );
}
