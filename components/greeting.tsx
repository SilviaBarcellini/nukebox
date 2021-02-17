import hello from "../pages/api/hello";
import styles from "../styles/greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <p className={styles.hello}>
      Hello, <span className={styles.name}>{props.name}</span>
    </p>
  );
}
