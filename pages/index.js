import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Link from "next/link";

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
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Welcome To</h2>
          <h1 className={styles.title}>New Habits Web App</h1>
          <p className={styles.description}>
            To identify and help those who suffer from Substance Misuse
          </p>
          <Image
            className={styles.image_container}
            src="/Graphics/flowerwhale.png"
            alt="whale holding a flower"
            width={192}
            height={122}
          />
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
