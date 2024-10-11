import Card from "./ui/Card";
import Menu from "./ui/Menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <Menu />
      <Card />
    </div>
  );
}
