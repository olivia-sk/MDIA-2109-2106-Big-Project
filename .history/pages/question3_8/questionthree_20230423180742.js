import Head from "next/head";
import styles from "@/styles/Question3.module.css";
import Navigation from "@/components/Menu";
import ProgressBar from "@/components/progressbar";
import Image from "next/image";
import WaterWave from "@/components/WaterWave";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function QuestionThree() {
  const currentStep = 3;
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
      router.push(`/question4_9/questionfour?score=${score + userAnswer}`);
    }
  };

  return (
    <>
      <Head>
        <title>New Habits Web App | Question Three</title>
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
              Any noticeable financial troubles?
            </p>
            <div>
              <button
                 className={styles.button}
                onClick={() => handleAnswer(1)}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                 className={styles.button}
                onClick={() => handleAnswer(0)}
              >
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
