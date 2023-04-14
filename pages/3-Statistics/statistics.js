import Head from 'next/head'
import Image from 'next/image'
import Pie from '@/components/PieChart'
import Navigation from '@/components/Menu'
import styles from '@/styles/Statistics.module.css'


export default function Statistics() {
  return (
    <>
      <Head>
        <title>New Habits Web App</title>
        <meta name="description" content="To identify and help those who suffer from Substance Misuse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>New Habits</h1>
      <Navigation/>
        <div className={styles.box}>
        <Pie className={styles.pie}/>
        <h2>Substance Misuse Statistics</h2>
        <p>According to a 2021 survey done by Statistics Canada, 66% of households claim to use Alcohol. It is believed 50% of those users may develop Substance Misuse Disorder (SUD)</p>
        </div>
        <Button/>
      </main>
    </>
  )
}
