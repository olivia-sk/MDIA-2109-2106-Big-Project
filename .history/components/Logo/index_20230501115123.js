import React from 'react'
import styles from './logo.module.css'
import Link from 'next/link'
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          <Image
          className={styles.images}
          src="/Graphics/v2text.png"
          alt="logo"
          width={65}
          height={65}
          />
          </Link>
      </div>
    </>
  );
}
