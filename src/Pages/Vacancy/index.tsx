//
import styles from "./vacancy.module.scss";
//
import { array } from "../../FakeBd";

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

  return (
    <div className={styles.block}>
      <h1>
        Хочешь работать над <br />
        <span> интересными проектами?</span>
      </h1>
      <div className={styles.line} />
      <p>в команду Softoriun требуются:</p>
      <div className={styles.block__vacancy}>
        {array.map((el, i) => (
          <div key={i}>
            <div>
              <h2>Frontend Developer</h2>
              <div>
                <p>Основной стек: </p>
                <div className={styles.technologies}>
                  {el.technologies.map((el, i) => (
                    <p style={{ backgroundColor: el.color }} key={i}>
                      {el.tech}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p>Будет плюсом, если владеете:</p>
                <div className={styles.technologies}>
                  {el.moreTech.map((el, i) => (
                    <p
                      className={styles.technologies}
                      key={i}
                      style={{ backgroundColor: el.color }}
                    >
                      {el.tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => console.log(2311)}>Подробнее</button>
          </div>
        ))}
      </div>
      <div className={styles.backgroundPeople}>
        <img src="icon/people.svg" alt="#!" />
      </div>
    </div>
  );
}
