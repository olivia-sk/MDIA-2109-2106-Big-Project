import React, { useRef } from 'react'
import styles from './Menu.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const hamburgerRef = useRef();
  const navigationRef = useRef();

  const handleClickOutside = (event) => {
    const isClickInside =
      navigationRef.current.contains(event.target) ||
      hamburgerRef.current.contains(event.target);
    if (!isClickInside) {
      navigationRef.current.classList.remove(styles.active);
      hamburgerRef.current.classList.remove(styles.hidden);
    }
  };

  const handleHamburgerClick = () => {
    navigationRef.current.classList.add(styles.active);
    hamburgerRef.current.classList.add(styles.hidden);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.navigation} ref={navigationRef}>
        <button
          className={`${styles.hamburger} ${styles.bar}`}
          onClick={handleHamburgerClick}
          ref={hamburgerRef}
        >
          <Image src="/Menu/burger.png" width={65} height={65} alt='burger menu'/>
        </button>
        <nav>
          <h1 className={styles.menutitle}>Menu</h1>
          <ul>
            <li>
              <Link href="./pages/index.js">Home</Link>
            </li>
            <li>
              <Link href="./pages/5-GetStarted/get_started">Quiz</Link>
            </li>
            <li>
              <Link href="/disclaimer/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="./pages/13-Resources/resources">Resources</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
