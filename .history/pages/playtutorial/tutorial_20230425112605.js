import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/PlayTutorial.module.css";
import Navigation from "@/components/Menu";
import WaterWave from "@/components/WaterWave";
import Link from "next/link";
import HumphreyFloat from "@/components/HumphreyFloat";

export default function PlayTutoriaL() {
  return (
    <>
      <Head>
        <title>New Habits Web App | Play | Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.title}>Play with Humphrey!</h1>
          <div className={styles.image_container}>
            <HumphreyFloat />
          </div>
          <p className={styles.description}>
            Play a small game in Humphreys world, where you can relax and have fun! There are no scores, or time limit, the point of the game is to relax.
          </p>
          <Image
          className={styles.images}
          src="/Avatars/pooh.png"
          alt="pooh"
          width={330}
          height={225}
          />
          <p className={styles.description}>
          Use the joystick to move Humphrey forwards and back around his island.
          </p>
          <Image
          className={styles.images}
          src="/Avatars/borb.png"
          alt="borb"
          width={330}
          height={225}
          />
          <p className={styles.description}>
          Use the arrow button to make Humphrey jump.
          </p>
          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
