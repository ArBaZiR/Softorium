//
import styles from "./vacancyInfo.module.scss";
import { Link, useParams } from "react-router-dom";
//
import { array } from "../../FakeBd";
import { useRef } from "react";

interface TypeEl {
  tech: string;
  color: string;
}

export default function VacancyInfo() {
  const { vacancyId } = useParams();
  const RefInd = useRef(Number(vacancyId));

  return (
    <div className={styles.block}>
      <div>
        <h1>{array[RefInd.current - 1].title}</h1>
        <h2>от {array[RefInd.current - 1].salary}</h2>
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
              {array[RefInd.current - 1].technologies.map(
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
              {array[RefInd.current - 1].moreTech.map(
                ({ tech, color }: TypeEl, i: number) => (
                  <p key={i} style={{ backgroundColor: color }}>
                    {tech}
                  </p>
                )
              )}
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
