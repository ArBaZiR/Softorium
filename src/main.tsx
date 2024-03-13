import ReactDOM from "react-dom/client";
import Router from "./Router/Router.tsx";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
// REDAX
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
