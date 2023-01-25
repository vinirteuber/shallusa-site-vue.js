import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/inicial.vue";
import Questions from "../views/questions.vue";
import SobreNos from "../views/sobrenos.vue";
import Login from "../views/login.vue";
import Updolar from "../views/updatedolar.vue";
import NewDolar from "../views/newdolar.vue";
import NewAcoes from "../views/newacoes.vue";
import NewIndice from "../views/newindice.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "Perguntas",
    component: Questions,
  },
  {
    path: "/sobrenos",
    name: "SobreNos",
    component: SobreNos,
  },
  {
    path: "/admin",
    name: "Login",
    component: Login,
  },
  {
    path: "/updatedolar",
    name: "updolar",
    component: Updolar,
  },
  {
    path: "/newdolar",
    name: "newdolar",
    component: NewDolar,
  },
  {
    path: "/newacoes",
    name: "newacoes",
    component: NewAcoes,
  },
  {
    path: "/newindice",
    name: "newindice",
    component: NewIndice,
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
