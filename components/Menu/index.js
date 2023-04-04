import Image from "next/image";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <>
        <div className={styles.navigation}>
          <button className={styles.hamburger} onclick="show()">
            <Image src="/Menu/burger.png" width={65} height={65}/>
          </button>
          <nav>
            <h1 className={styles.menutitle}>Menu</h1>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Logo</a>
              </li>
              <li>
                <a>Colours & Typo</a>
              </li>
              <li>
                <a>Visuals</a>
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
}
