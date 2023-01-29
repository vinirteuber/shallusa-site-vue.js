import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/inicial.vue";
import SobreNos from "../views/sobrenos.vue";
import Login from "../views/login.vue";
import Updolar from "../views/updatedolar.vue";
import NewDolar from "../views/newdolar.vue";
import NewAcoes from "../views/newacoes.vue";
import NewIndice from "../views/newindice.vue";
import updateDolar from "../views/updatedolar.vue";
import especificacoes from "../views/especificacoes.vue";
import especificacoesin from "../views/especificacoesin.vue";
import updateindice from "../views/updateindice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/especificacoes/:id",
    name: "especificacoes",
    props: true,
    component: especificacoes,
  },
  {
    path: "/updatedolar/:id",
    name: "updatedolar",
    props: true,
    component: updateDolar,
  },
  {
    path: "/especificacoesin/:id",
    name: "especificacoesin",
    props: true,
    component: especificacoesin,
  },
  {
    path: "/updateindice/:id",
    name: "updateindice",
    props: true,
    component: updateindice,
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
