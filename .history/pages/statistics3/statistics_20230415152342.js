import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Pie from "@/components/PieChart";
import Link from "next/link";
import Navigation from "@/components/Menu";
import Button from "@/components/Button";
import WaterWave from "@/components/WaterWave";


export default function Statistics() {
  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta name="description" content="To identify and help those who suffer from Substance Misuse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.parent}>
          <div class={styles.div3}>
          <h1 className={styles.title}>New Habits</h1>
          </div>
          <Navigation/>
          <div className={styles.div1}>
            <Pie/>
            <h2>Substance Misuse Statistics</h2>
            <p>According to a 2021 survey done by Statistics Canada, 66% of households claim to use Alcohol. It is believed 50% of those users may develop Substance Misuse Disorder (SUD)</p>
          </div>
          <div class={styles.div2}>
            <WaterWave className={styles.wave} />
          </div>
      </main>
    </>
  )
}
