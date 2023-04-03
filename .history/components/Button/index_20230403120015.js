import React from 'react';
import styles from '@/components/Button/Button.module.css'

export default function App() {
  return (
    <>
    <div>
        <button className={styles.button}>Yes</button>
        <button className={styles.button}>Continue</button>
        <button className={styles.button}>Next Question</button>
    </div>
    </>
  )
}