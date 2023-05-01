import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Resources.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";

export default function Resources() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Resources</title>
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
            <h2 className={styles.subtitle}>Resources</h2>
            <p className={styles.description}>
              Please visit our favorite resources for insight into substance
              misuse and how it effects you and your loved ones.
            </p>
            <Link href="https://drugabuse.com/" className={styles.resources}>
              Drug Abuse
            </Link>
            <Link href="https://nida.nih.gov/" className={styles.resources}>
              National Institute on Drug Abuse
            </Link>
            <Link
              href="https://wellbeing.gov.bc.ca/"
              className={styles.resources}
            >
              Wellbeing
            </Link>
          </div>
          <Image
            className={styles.image_container}
            src="/Graphics/flowerwhale.png"
            alt="whale holding a flower"
            width={192}
            height={122}
          />
          <div className={styles.button}>
            <Link href="/goodbye14/goodbye" className={styles.link}>
              End
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
