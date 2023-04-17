import Head from "next/head";
import styles from "@/styles/Question4.module.css";
import Navigation from "@/components/Menu";
import ProgressBar from "@/components/progressbar";
import Link from "next/link";
import Image from "next/image";
import WaterWave from "@/components/WaterWave";
import { useRouter } from "next/router";
import { useState } from "react";


export default function QuestionFour() {
  const currentStep = 4;
  const totalSteps = 4;

  const router = useRouter();
  const [answers, setAnswers] = useState(JSON.parse(router.query.answers || "{}"));

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, question4: answer });
  };

  const handleSubmit = () => {
    // Calculate the score based on answers (customize the scoring logic as needed)
    let q1 = answers.question1 === "yes";
    let q2 = answers.question2 === "yes";
    let q3 = answers.question3 === "yes";
    let q4 = answers.question4;
  
    let result;
  
    if (q1 && q2 && q3) {
      result = "severe";
    } else if (q1 && q3) {
      result = "moderate";
    } else if (q2 && q3) {
      result = "moderate";
    } else {
      result = "mild";
    }
  
    // Redirect to the appropriate result page based on the result
    if (result === "severe") {
      router.push("/quiz_results10/resultsone");
    } else if (result === "moderate") {
      router.push("/quiz_results10/resultstwo");
    } else {
      router.push("/quiz_results10/resultsthree");
    }
  };
  

  return (
    <>
      <Head>
        <title>New Habits Web App | Question Four</title>
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
              How could the substance misuse severity be scaled?
            </p>
            <div className={styles.button}>
              <Link href="" onClick={() => handleAnswer("mild")} className={styles.link}>
                Mild
              </Link>
            </div>
            <div className={styles.button}>
              <Link href="" onClick={() => handleAnswer("moderate")} className={styles.link}>
                Moderate
              </Link>
            </div>
            <div className={styles.button}>
              <Link href="" onClick={() => handleAnswer("severe")} className={styles.link}>
                Severe
              </Link>
            </div>
            <div className={styles.image_container}>
              <Image
                src="/Graphics/BigCoral3.png"
                alt="whale holding a flower"
                width={75}
                height={68}
              />
              <Image
                src="/Graphics/BigCoral3.png"
                alt="whale holding a flower"
                width={75}
                height={68}
              />
            </div>
          </div>
          <div className={styles.buttonNext}>
            <Link href="" onClick={handleSubmit} className={styles.link}>
              Finish
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
