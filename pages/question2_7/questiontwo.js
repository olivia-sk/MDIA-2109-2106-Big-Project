import Head from "next/head";
import styles from "@/styles/Question2.module.css";
import Navigation from "@/components/Menu";
import ProgressBar from "@/components/progressbar";
import Image from "next/image";
import WaterWave from "@/components/WaterWave";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/Logo";

export default function QuestionTwo() {
  const currentStep = 2;
  const totalSteps = 4;

  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const urlScore = parseInt(router.query.score, 10) || 0;
    setScore(urlScore);
  }, [router.query.score]);

  const handleAnswer = (newScore) => {
    setUserAnswer(newScore);
  };

  const handleNextQuestion = () => {
    if (userAnswer !== null) {
      router.push(`/question3_8/questionthree?score=${score + userAnswer}`);
    }
  };

  return (
    <>
      <Head>
        <title>New Habits Web App | Question Two</title>
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
        <div className={styles.container}>
          <div className={styles.progress}>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          <div className={styles.content_container}>
            <p className={styles.description}>
              Has a decline in physical and/or mental health been noticed?
            </p>
            <div>
              <button className={styles.button} onClick={() => handleAnswer(1)}>
                Yes
              </button>
            </div>
            <div>
              <button className={styles.button} onClick={() => handleAnswer(0)}>
                No
              </button>
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
            <button onClick={handleNextQuestion} className={styles.link}>
              Next Question
            </button>
          </div>
          <div className={styles.wave}>
            <WaterWave />
          </div>
        </div>
      </main>
    </>
  );
}
