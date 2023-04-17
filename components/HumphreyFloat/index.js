import React from 'react';
import styles from './Float.module.css';
import Image from 'next/image';

export default function HumphreyFloat() {

  return (
   <>
   <Image
      className={styles.animation}
      src="/Graphics/flowerwhale.png"
      alt="whale holding a flower"
      width={160}
      height={95}
    />
   </>
  );
}
