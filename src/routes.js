import Home from "./components/Home";
import Etl from "./components/etl/Etl";
import Films from "./components/films/Films";

export const routes = [
  {path: '/', component: Home},
  {path: '/etl', component: Etl},
  {path: '/films', component: Films}
];
