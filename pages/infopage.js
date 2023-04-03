import Head from 'next/head'
import Image from 'next/image'
import Menu from '@/components/Menu'


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
      <Menu/>
      </main>
    </>
  )
}