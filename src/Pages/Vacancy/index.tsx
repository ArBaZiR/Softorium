//
import styles from "./vacancy.module.scss";
//
import { Link } from "react-router-dom";
// REDAX
import { useSelector } from "react-redux";
// API
import { VacancyApi } from "../../hooks";

type TypeObject = {
  vacancySlice: object;
};
type TypeEl = {
  name: string;
};
type TypeAllVacancy = {
  name: string;
  main_technologies: [];
  more_technologies: [];
  slug: string;
};

export default function Vacancy() {
  VacancyApi();
  //
  const { allVacancy }: any = useSelector(
    ({ vacancySlice }: TypeObject) => vacancySlice
  );

  return (
    <div className={styles.block}>
      <h1>
        Хочешь работать над <br />
        <span> интересными проектами?</span>
      </h1>
      <div className={styles.line} />
      <p>в команду Softoriun требуются:</p>
      <div className={styles.block__vacancy}>
        {allVacancy.length ? (
          allVacancy.map((el: TypeAllVacancy, i: number) => (
            <div key={i}>
              <div>
                <h2>{el.name}</h2>
                <div>
                  <p>Основной стек: </p>
                  <div className={styles.technologies}>
                    {el.main_technologies.map(({ name }: TypeEl, i: number) => (
                      <p key={i}>{name}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p>Будет плюсом, если владеете:</p>
                  <div className={styles.technologies}>
                    {el.more_technologies.map(({ name }: TypeEl, i: number) => (
                      <p className={styles.technologies} key={i}>
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Link to={`${el.slug}`}>
                <button className={styles.showMore}>Подробнее</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>В данный момент вакинсий отсутствуют</h2>
        )}
      </div>
      <div className={styles.backgroundPeople}>
        <img src="icon/people.svg" alt="#!" />
      </div>
    </div>
  );
}
