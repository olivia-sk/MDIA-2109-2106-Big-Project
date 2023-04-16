import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Goodbye.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";

export default function Goodbye() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Goodbye</title>
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
            <h2 className={styles.subtitle}>Goodbye</h2>
            <p className={styles.description}>
              Please visit a medical professional to learn more about your
              substance misuse disorder (SUD) and how to begin recovery.
            </p>
          </div>
          <Image
            className={styles.image_container}
            src="/Graphics/flowerwhale.png"
            alt="whale holding a flower"
            width={192}
            height={122}
          />
        
          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
