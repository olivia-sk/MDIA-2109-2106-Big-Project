import Head from 'next/head'
import styles from "@/styles/Question1.module.css";
import Navigation from '@/components/Menu'
import ProgressBar from '@/components/progressbar'

export default function QuestionOne() {
  const currentStep = 1;
  const totalSteps = 4;

  return (
    <>
      <Head>
        <title>New Habits Web App | Question One</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.parent}>
        <Navigation />
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </main>
    </>
  );
}
