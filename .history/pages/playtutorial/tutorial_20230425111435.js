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
          <h1 className={styles.title}>About Us</h1>
          <h2 className={styles.subtitle}>This is Humphrey</h2>
          <div className={styles.image_container}>
            <HumphreyFloat />
          </div>
          <p className={styles.description}>
            Humphrey is a Orca whale who is the app mascot. He is here to make people feel safe and welcome.
          </p>
          <h1 className={styles.title}>Developers</h1>
          <h2 className={styles.subtitle}>Olivia</h2>
          <Image
          className={styles.images}
          src="/Avatars/pooh.png"
          alt="pooh"
          width={330}
          height={225}
          />
          <p className={styles.description}>
          I'm passionate about creating meaningful solutions and excited to work on an app dedicated to helping people overcome substance abuse. I'm well-versed in programming languages like HTML, CSS, JavaScript, Python, etc. and design tools like Illustrator and Figma. Also, I focus on user-centred designs to create an intuitive, easy-to-use app that exceeds our users' expectations.
          </p>
          <h2 className={styles.subtitle}>Sierra</h2>
          <Image
          className={styles.images}
          src="/Avatars/borb.png"
          alt="borb"
          width={330}
          height={225}
          />
          <p className={styles.description}>
          At 22 years old, I have always tried my best to help struggling friends and family with substance misuse. I cannot wait to use this app for my own friend and family one day. I hope this web-app can help as many people as possible struggling with substance misuse, and let them know that this app is a safe space to admit you need help and find it.
          </p>
          <h2 className={styles.subtitle}>Elijah</h2>
          <Image
          className={styles.images}
          src="/Avatars/soju.png"
          alt="soju"
          width={330}
          height={225}
          />
          <p className={styles.description}>
          As a student growing up in surrey, I've witnessed many people using and being addicted to drugs. I pity them but have no way of helping them. However, with this web-app, it might be a solution to help drug users to hopefully find a way to escape their drug addictions and live a cleaner, drug-free life.
          </p>
        </div>
      </main>
    </>
  );
}
