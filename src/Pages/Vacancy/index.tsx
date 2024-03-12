//
import styles from "./vacancy.module.scss";
//
import { array } from "../../FakeBd";
import { Link } from "react-router-dom";

export default function Vacancy() {
  //
  // useEffect(() => {
  //   fetch("Запрос", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify("Что надо положить"),
  //   });
  // }, []);
  type TypeEl = {
    tech: string;
    color: string;
  };

  return (
    <div className={styles.block}>
      <h1>
        Хочешь работать над <br />
        <span> интересными проектами?</span>
      </h1>
      <div className={styles.line} />
      <p>в команду Softoriun требуются:</p>
      <div className={styles.block__vacancy}>
        {array.length ? (
          array.map((el, i) => (
            <div key={i}>
              <div>
                <h2>{el.title}</h2>
                <div>
                  <p>Основной стек: </p>
                  <div className={styles.technologies}>
                    {el.technologies.map(
                      ({ tech, color }: TypeEl, i: number) => (
                        <p style={{ backgroundColor: color }} key={i}>
                          {tech}
                        </p>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p>Будет плюсом, если владеете:</p>
                  <div className={styles.technologies}>
                    {el.moreTech.map(({ tech, color }: TypeEl, i: number) => (
                      <p
                        className={styles.technologies}
                        key={i}
                        style={{ backgroundColor: color }}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Link to={`info/${i + 1}`}>
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
