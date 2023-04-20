import Image from 'next/image'
import styles from './Float.module.css'

export default function HumphreyFloat() {
  return (
    <>
          <Image
            className={styles.image_container}
            src="/Graphics/flowerwhale.png"
            alt="whale holding a flower"
            width={192}
            height={122}
          />
    </>
  );
}
