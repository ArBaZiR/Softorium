//
import styles from "./vacancyInfo.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//
export default function VacancyInfo() {
  const navigate = useNavigate();
  const locate = useLocation();
  const [vacancy, setVacancy] = useState<any>({}); //Исправить
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      `https://newsite.softorium.pro/admin-area/api/visitor/vacancy${locate.pathname}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) =>
        !data.detail ? (setVacancy(data), setIsLoading(false)) : navigate("/")
      );
  }, []);
  console.log(vacancy);

  return !isLoading ? (
    <div className={styles.block}>
      <div>
        <h1>{vacancy.name}</h1>
        <h2>зарплата {vacancy.salary}</h2>
        <button>Откликнуться</button>
        <div className={styles.list_offer}>
          <h3>Мы можем предложить</h3>
          <div>
            {vacancy.list_offer.map((el: { name: string }) => (
              <p>{el.name}</p>
            ))}
          </div>
        </div>
        <div className={styles.technologies__block}>
          <h2>Что мы используем:</h2>
          <div className={styles.technologies}>
            <p>Основной стек: </p>
            <div>
              {vacancy.main_technologies.map(
                (el: { name: string }, i: number) => (
                  <p key={i}>{el.name}</p>
                )
              )}
            </div>
          </div>
          <div className={styles.technologies}>
            <p>Будет плюсом, если владеете:</p>
            <div>
              {vacancy.more_technologies.map(
                (el: { name: string }, i: number) => (
                  <p key={i}>{el.name}</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.location__block}>
        <h2>Softrium</h2>
        <p>Улица Lorem, Красноуральская улица, 1</p>
      </div>
      <Link to={"/"}>
        <button className={styles.goBack}>Вернуться назад</button>
      </Link>
    </div>
  ) : (
    <div />
  );
}
