import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Info.module.css";
import Link from "next/link";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Logo from "@/components/Logo";

export default function Humphreyintro() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Intro</title>
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
            <Image src="/Graphics/Happi.png" width={150} height={105} />
            <h2 className={styles.subtitle}>This is Humphrey the Orca Whale</h2>
            <p className={styles.description}>
              Humphrey is an advocate for those struggling with substance misuse
              disorder (SUD), and he will be with you along the way through the
              quiz.
            </p>

            <div className={styles.button}>
              <Link href="/get_started5/get_started" className={styles.link}>
                Let's Go
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
