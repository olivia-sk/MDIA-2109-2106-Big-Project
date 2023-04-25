import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './ModelSad.module.css';

export default function ModelSad() {
  return (
    <div className={styles.splineContainer}>
      <Spline
        scene="https://prod.spline.design/EX05-dbu40GXhTO3/scene.splinecode"
      />
    </div>
  );
}
