import Head from "next/head";
import styles from "@/styles/Question1.module.css";
import Navigation from "@/components/Menu";
import ProgressBar from "@/components/progressbar";
import Image from "next/image";
import WaterWave from "@/components/WaterWave";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function QuestionOne() {
  const currentStep = 1;
  const totalSteps = 4;

  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const router = useRouter();

  const handleAnswer = (newScore) => {
    setUserAnswer(newScore);
  };

  const handleNextQuestion = () => {
    if (userAnswer !== null) {
      router.push(`/question2_7/questiontwo?score=${score + userAnswer}`);
    }
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
        <Logo/>
        <Navigation />
        <div className={styles.container}>

          <div className={styles.progress}>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          <div className={styles.content_container}>
            <p className={styles.description}>
              Has the substance misuse affected friends and family
              relationships?
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
  <button type="button" onClick={handleNextQuestion} className={styles.link}>
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
