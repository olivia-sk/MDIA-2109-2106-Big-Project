import Head from "next/head";
import Image from "next/image";
import Navigation from "@/components/Menu";
import Link from "next/link";
import Play from "@/components/Spline";
import styles from "@/styles/Play.module.css";
import Logo from "@/components/Logo";

export default function PlayHumphrey() {
  return (
    <>
      <Head>
        <title>Play with Humphrey</title>
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
        <Play/>
        </main>
    </>
  );
}
