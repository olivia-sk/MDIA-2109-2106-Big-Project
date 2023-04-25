import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Custom.module.css';
import ModelSad from '@/components/modelhumphreysad';

const Custom404 = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Page Not Found</h1>
        <p className={styles.p}>The page you are looking for does not exist.</p>
        <Link href="/" className={styles.link}>
          Go to Home
        </Link>
        <ModelSad />
      </div>
    </>
  );
};

export default Custom404;
