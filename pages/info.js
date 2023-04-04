import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Menu'
import styles from '@/styles/Info.module.css'



export default function Info() {
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
      </main>
    </>
  )
}
