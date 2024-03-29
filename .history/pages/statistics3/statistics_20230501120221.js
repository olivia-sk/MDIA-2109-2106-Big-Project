import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Statistics.module.css";
import Pie from "@/components/PieChart";
import Link from "next/link";
import Navigation from "@/components/Menu";
import Logo from "@/components/Logo";


export default function Statistics() {

  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta name="description" content="To identify and help those who suffer from Substance Misuse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo/>
      <Navigation />
      <main className={styles.parent}>

          <div className={styles.div3}>

        </div>
        <div className={styles.div1}>
          <Pie className={styles.pie}/>
          <h2>Substance Misuse Statistics</h2>
          <p>
            According to a 2021 survey done by Statistics Canada, 66% of
            households claim to use Alcohol. It is believed 50% of those users
            may develop Substance Misuse Disorder (SUD)
          </p>
        </div>
        <div className={styles.div2}>
          <div className={styles.button}>
            <Link href="/humphrey_intro4/intro" className={styles.link}>
              Continue
            </Link>
          </div>
          </div>
      </main>
    </>
  )
}
