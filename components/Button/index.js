import React from 'react';
import styles from "./Button.module.css";


export default function Button() {
  return (
    <>
    <div className={styles.button}>
      <Link href="/" className={styles.link}>Yes</Link>
    </div>
    </>
  )
}
