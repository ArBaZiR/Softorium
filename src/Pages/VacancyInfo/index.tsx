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
      <h1>Ищем {vacancy.name}</h1>
      <p>Трудоустройство в аккредитованную ИТ-компанию</p>
      <div className={styles.company__info}>
        <p>
          Мы любим сложные, интересные проекты, постоянно расширяемся и именно
          поэтому ищем новые таланты. В коллективе Softorium вы найдете
          возможность воплотить идеи любого уровня нестандартности и вместе с
          тем перенять опыт наших ведущих разработчиков.
        </p>
        <img src="img/companyPeople.jpg" alt="#!" />
      </div>
      <div className={styles.required__minimum}>
        <img src="img/technologies.jpg" alt="#!" />
        <section>
          <div>
            <h2>Необходимы минимум:</h2>
            {vacancy.min_requirements.map((el: { name: string }, i: number) => (
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C9.05058 16 10.0909 15.7931 11.0615 15.391C12.0321 14.989 12.914 14.3997 13.6569 13.6569C14.3997 12.914 14.989 12.0321 15.391 11.0615C15.7931 10.0909 16 9.05058 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM10.2956 8.73769L7.11411 11.9192C7.02143 12.0117 6.91144 12.0851 6.7904 12.1352C6.66936 12.1852 6.53965 12.2109 6.40867 12.2109C6.27769 12.2108 6.14801 12.1849 6.02703 12.1347C5.90605 12.0845 5.79614 12.011 5.70358 11.9183C5.61102 11.8256 5.53762 11.7156 5.48756 11.5946C5.43751 11.4736 5.41179 11.3439 5.41187 11.2129C5.41203 10.9484 5.51726 10.6947 5.70442 10.5078L8.21389 8L5.70442 5.49221C5.51726 5.30527 5.41203 5.05165 5.41187 4.78712C5.41171 4.5226 5.51664 4.26884 5.70358 4.08168C5.89052 3.89453 6.14414 3.78929 6.40867 3.78913C6.67319 3.78898 6.92695 3.89391 7.11411 4.08084L10.2956 7.26232C10.3922 7.35868 10.4679 7.47391 10.5181 7.60083C10.5682 7.72774 10.5916 7.86362 10.5869 8V8.032C10.5871 8.29653 10.4823 8.55033 10.2956 8.73769Z"
                    fill="#FF6633"
                  />
                </svg>
                <p key={i}>{el.name}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Преимуществом будет знание:</h2>
            <div>
              {vacancy.more_technologies.map(
                (el: { name: string }, i: number) => (
                  <p key={i}>{el.name}</p>
                )
              )}
            </div>
          </div>
        </section>
      </div>
      <div className={styles.tasks}>
        <div>
          {vacancy.tasks.map((el: { name: string }) => (
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C9.05058 16 10.0909 15.7931 11.0615 15.391C12.0321 14.989 12.914 14.3997 13.6569 13.6569C14.3997 12.914 14.989 12.0321 15.391 11.0615C15.7931 10.0909 16 9.05058 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM10.2956 8.73769L7.11411 11.9192C7.02143 12.0117 6.91144 12.0851 6.7904 12.1352C6.66936 12.1852 6.53965 12.2109 6.40867 12.2109C6.27769 12.2108 6.14801 12.1849 6.02703 12.1347C5.90605 12.0845 5.79614 12.011 5.70358 11.9183C5.61102 11.8256 5.53762 11.7156 5.48756 11.5946C5.43751 11.4736 5.41179 11.3439 5.41187 11.2129C5.41203 10.9484 5.51726 10.6947 5.70442 10.5078L8.21389 8L5.70442 5.49221C5.51726 5.30527 5.41203 5.05165 5.41187 4.78712C5.41171 4.5226 5.51664 4.26884 5.70358 4.08168C5.89052 3.89453 6.14414 3.78929 6.40867 3.78913C6.67319 3.78898 6.92695 3.89391 7.11411 4.08084L10.2956 7.26232C10.3922 7.35868 10.4679 7.47391 10.5181 7.60083C10.5682 7.72774 10.5916 7.86362 10.5869 8V8.032C10.5871 8.29653 10.4823 8.55033 10.2956 8.73769Z"
                  fill="#0099CC"
                />
              </svg>

              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <img src="img/technologiesMen.jpg" alt="#!" />
      </div>
      <div className={styles.ready_provide}>
        <img src="img/office.png" alt="#!" />
        <div>
          {vacancy.list_offer.map((el: { name: string }) => (
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C9.05058 16 10.0909 15.7931 11.0615 15.391C12.0321 14.989 12.914 14.3997 13.6569 13.6569C14.3997 12.914 14.989 12.0321 15.391 11.0615C15.7931 10.0909 16 9.05058 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM10.2956 8.73769L7.11411 11.9192C7.02143 12.0117 6.91144 12.0851 6.7904 12.1352C6.66936 12.1852 6.53965 12.2109 6.40867 12.2109C6.27769 12.2108 6.14801 12.1849 6.02703 12.1347C5.90605 12.0845 5.79614 12.011 5.70358 11.9183C5.61102 11.8256 5.53762 11.7156 5.48756 11.5946C5.43751 11.4736 5.41179 11.3439 5.41187 11.2129C5.41203 10.9484 5.51726 10.6947 5.70442 10.5078L8.21389 8L5.70442 5.49221C5.51726 5.30527 5.41203 5.05165 5.41187 4.78712C5.41171 4.5226 5.51664 4.26884 5.70358 4.08168C5.89052 3.89453 6.14414 3.78929 6.40867 3.78913C6.67319 3.78898 6.92695 3.89391 7.11411 4.08084L10.2956 7.26232C10.3922 7.35868 10.4679 7.47391 10.5181 7.60083C10.5682 7.72774 10.5916 7.86362 10.5869 8V8.032C10.5871 8.29653 10.4823 8.55033 10.2956 8.73769Z"
                  fill="#FF6633"
                />
              </svg>

              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to={"/"}>
        <button className={styles.goBack}>Вернуться назад</button>
      </Link>
      <div className={styles.backgroundPeople}>
        <img src="icon/people.svg" alt="#!" />
      </div>
    </div>
  ) : (
    <div />
  );
}
