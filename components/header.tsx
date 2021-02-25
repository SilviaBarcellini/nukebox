import styles from "../styles/header.module.css";

type Props = {
  header: string;
  backHome: string;
};

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.backHome} href="http://localhost:3000/">
        {"👈 Back!👈 "}
      </a>
    </header>

    //properties
  );
}
