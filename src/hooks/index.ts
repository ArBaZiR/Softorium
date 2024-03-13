//
import { useEffect } from "react";
//REDAX
import { useDispatch } from "react-redux";
import { setVacancy } from "../store/slices/vacancySlice";

export function VacancyApi(): void {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    fetch(`https://newsite.softorium.pro/admin-area/api/visitor/vacancy/`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => !data.detail && dispatch(setVacancy(data)));
  }, []);
}
