import Home from "./components/Home";
import Etl from "./components/etl/Etl";
import Films from "./components/films/Films";

export const routes = [
  {path: '/', component: Home, name: "home"},
  {path: '/etl', component: Etl, name: "etl"},
  {path: '/films', component: Films, name: "films"}
];
