import styles from "../styles/buttons.module.css";

type Props = {
  love: string;
  hate: string;
  mine: string;
};

export default function Buttons() {
  return (
    <footer>
      <a className={styles.love} href="">
        😍 Love it!
      </a>

      <a className={styles.mine} href="">
        my list 🖤
      </a>
      <a className={styles.hate} href="">
        🤢 Nope!
      </a>
    </footer>
  );
}
