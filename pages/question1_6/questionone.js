import Head from 'next/head'
import styles from "@/styles/Question1.module.css";
import Navigation from '@/components/Menu'
import ProgressBar from '@/components/progressbar'
import Link from 'next/link';
import Image from 'next/image';
import WaterWave from '@/components/WaterWave';
import { useState } from "react";


export default function QuestionOne() {
  const currentStep = 1;
  const totalSteps = 4;
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, question1: answer });
  };
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
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.title}>New Habits</h1>
          <div className={styles.progress}>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          <div className={styles.content_container}>
            <p className={styles.description}>
              Has the substance misuse affected
              friends and family relationships?
            </p>
            <div className={styles.button}>
              <Link href="" onClick={() => handleAnswer("yes")} className={styles.link}>
                Yes
              </Link>
            </div>
            <div className={styles.button}>
              <Link href="" onClick={() => handleAnswer("no")} className={styles.link}>
                No
              </Link>
            </div>
            <div className={styles.image_container}>
              <Image
                src="/Graphics/BigCoral3.png"
                alt="coral"
                width={75}
                height={68}
              />
              <Image
                src="/Graphics/BigCoral3.png"
                alt="coral"
                width={75}
                height={68}
              />
            </div>

          </div>
          <div className={styles.buttonNext}>
            <Link href={{ pathname: "/question2_7/questiontwo", query: { answers: JSON.stringify(answers) }}} className={styles.link}>
              Next Question
            </Link>
          </div>
          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}

