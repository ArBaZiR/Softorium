//
import styles from "./mainPage.module.scss";
import { Outlet } from "react-router-dom";
//
export default function MainPage() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
