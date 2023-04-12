import Head from 'next/head'
import Image from 'next/image'
import Styles from '@/styles/Home.module.css'
import Pie from '@/components/PieChart'
import Humphrey from '@/components/Humphrey'
import Link from 'next/link'
import Navigation from '@/components/Menu';


export default function Home() {
  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta name="description" content="To identify and help those who suffer from Substance Misuse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation/>
        <Pie/>
        <Link href="" className={styles.link}><button className={styles.button}>Yes</button></Link>
        <Humphrey/>
      </main>
    </>
  )
}
