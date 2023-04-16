import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/LearnMore.module.css";
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
            <h2>Learn More</h2>
            <p>If you're looking to learn more about substance misuse disorder (SUD), there are several important topics you may want to explore. For instance, you could delve into the science of substance misuse, including how drugs affect the brain and how addiction can develop over time. You might also want to explore the different types of drugs and their effects, as well as the signs and symptoms of substance misuse disorder (SUD). </p>
          </div>
          <div class={styles.div2}>
            <div className={styles.button}>
              <Link href="/resources13/resources" className={styles.link}>Resources</Link>
            </div>
          </div>
      </main>
    </>
  );
}