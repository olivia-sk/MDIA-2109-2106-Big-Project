import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Results1.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";

export default function ResultsOne() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Results</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <h1 className={styles.title}>New Habits</h1>

        <div className={styles.container}>
          <h1 className={styles.title}>Quiz has been Completed!</h1>
          <p className={styles.description}>Based on your answers...</p>

          {/*container 1*/}
          <div className={styles.content_container}>
            <h3 className={styles.subtitle}>
              The Addiction can be scaled as mild.
            </h3>
            <p className={styles.description}>
              The substance misuse is not effecting the everyday life of the
              user, or those around them.
            </p>
            <h3 className={styles.subtitle}>
              Recovery is an easy process at this stage
            </h3>
          </div>

          {/*container 2*/}

          <div className={styles.content_container}>
            <p className={styles.description}>
              If you have any questions or concerns we recommend you visit a
              medical professional right away.
            </p>
            <h3 className={styles.subtitle}>
              See our resources page for places to seek help.
            </h3>
            <div className={styles.button}>
              <Link href="/resources13/resources" className={styles.link}>
                Resources
              </Link>
            </div>
          </div>

          <div className={styles.button}>
            <Link href="/disclaimer11/disclaimer" className={styles.link}>
              Continue
            </Link>
          </div>

          <Image className={styles.image_container} src="/Graphics/flowerwhale.png" width={200} height={120} />

          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
