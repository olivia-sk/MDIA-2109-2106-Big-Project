import React from 'react'
import styles from './logo.module.css'
import Link from 'next/link'

export default function Button() {
  return (
    <>
      <div className={styles.button}>
        <Link href="/" className={styles.link}>Yes</Link>
      </div>
    </>
  );
}
