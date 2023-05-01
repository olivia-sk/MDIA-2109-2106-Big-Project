import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/LearnMore.module.css";
import Pie from "@/components/PieChart";
import Link from "next/link";
import Navigation from "@/components/Menu";
import Button from "@/components/Button";
import WaterWave from "@/components/WaterWave";
import Logo from "@/components/Logo";

export default function LearnMore() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Learn More</title>
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

          <div className={styles.content_container}>
            <h2 className={styles.subtitle}>Learn More</h2>
            <p className={styles.description}>
            If you're looking to learn more about substance misuse disorder (SUD), there are several important topics you may want to explore. For instance, you could delve into the science of substance misuse, including how drugs affect the brain and how addiction can develop over time. You might also want to explore the different types of drugs and their effects, as well as the signs and symptoms of substance misuse disorder (SUD). 
            </p>
          </div>

          <div className={styles.button}>
            <Link href="/resources13/resources" className={styles.link}>
              Resources
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
