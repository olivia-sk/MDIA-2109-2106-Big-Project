import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './SplineComponent.module.css';

export default function Play() {
  return (
    <div className={styles.splineContainer}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/hQORpiJiRsRNf3xT/scene.splinecode"
      />
    </div>
  );
}
