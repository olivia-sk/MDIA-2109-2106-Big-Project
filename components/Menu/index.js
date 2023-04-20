import React, { useRef } from "react";
import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Image src="/Menu/burger.png" width={65} height={65} />
        </button>
        <nav>
          <h1 className={styles.menutitle}>Menu</h1>
          <ul>
            <li>
              <Link href="/" className={styles.ul}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/get_started5/get_started" className={styles.ul}>
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/disclaimer11/disclaimer" className={styles.ul}>
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/resources13/resources" className={styles.ul}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/askhumphrey/askhumphrey" className={styles.ul}>
                {" "}
                Ask Humphrey{" "}
                <Image
                  className={styles.image_container}
                  src="/Graphics/flowerwhale.png"
                  alt="whale holding a flower"
                  width={35}
                  height={23}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
