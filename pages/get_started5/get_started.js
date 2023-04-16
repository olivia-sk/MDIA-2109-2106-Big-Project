import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/GetStarted.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";

export default function Getstarted() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Get Started</title>
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
            <Image
              className={styles.image_container}
              src="/Graphics/flowerwhale.png"
              alt="whale holding a flower"
              width={192}
              height={122}
            />
            <p className={styles.description}>
              This quiz is designed to test if you or your loved one’s
              may be struggling with substance misuse disorder (SUD).
              <div className={styles.bottomtext}>
                To start the quiz, click the button below. Please answer
                the following questions honestly.
              </div>

            </p>
            <div className={styles.button}>
              <Link href="/statistics3/statistics" className={styles.link}>
                Let's Go!
              </Link>
            </div>
          </div>
          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
