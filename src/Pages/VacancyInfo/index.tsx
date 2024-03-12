//
import styles from "./vacancyInfo.module.scss";
import { Link } from "react-router-dom";
//
import { array } from "../../FakeBd";

interface TypeEl {
  tech: string;
  color: string;
}

export default function VacancyInfo() {
  return (
    <div className={styles.block}>
      <div>
        <h1>Frontend Deloveper</h1>
        <h2>от {"150 000$"}</h2>
        <button>Откликнуться</button>
        <div className={styles.copany__info}>
          <h3>О нас</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae eaque cupiditate laboriosam quo, ad ipsam dolorem porro?
            Cum vel aspernatur recusandae quam, voluptate accusantium. Saepe.
          </p>
        </div>
        <div className={styles.technologies__block}>
          <h2>Что мы используем:</h2>
          <div className={styles.technologies}>
            <p>Основной стек: </p>
            <div>
              {array[0].technologies.map(
                ({ tech, color }: TypeEl, i: number) => (
                  <p style={{ backgroundColor: color }} key={i}>
                    {tech}
                  </p>
                )
              )}
            </div>
          </div>
          <div className={styles.technologies}>
            <p>Будет плюсом, если владеете:</p>
            <div>
              {array[0].moreTech.map(({ tech, color }: TypeEl, i: number) => (
                <p key={i} style={{ backgroundColor: color }}>
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Softrium</h2>
        <p>Улица Lorem, Красноуральская улица, 1</p>
      </div>
      <Link to={"/"}>
        <button className={styles.goBack}>Вернуться назад</button>
      </Link>
    </div>
  );
}
