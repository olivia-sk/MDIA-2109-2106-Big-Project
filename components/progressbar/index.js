import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({ currentStep, totalSteps }) {
  const stepPercentage = (step) => (step / totalSteps) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`${styles.progressStep} ${currentStep > index ? styles.completed : ''}`}
            style={{ width: `${stepPercentage(1)}%` }}
          />
        ))}
      </div>
    </div>
  );
}
