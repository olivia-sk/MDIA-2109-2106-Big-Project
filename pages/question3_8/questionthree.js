import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Pie from "@/components/PieChart";
import Link from "next/link";
import Navigation from "@/components/Menu";
import Button from "@/components/Button";
import WaterWave from "@/components/WaterWave";

export default function Questionthree() {
  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.parent}>
          <Navigation/>
            <WaterWave/>
      </main>
    </>
  );
}
