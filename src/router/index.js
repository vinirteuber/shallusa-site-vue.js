import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/inicial.vue";
import Questions from "../views/questions.vue";
import SobreNos from "../views/sobrenos.vue";
import Login from "../views/login.vue";
import Upindice from "../views/updateindice.vue";
import Updolar from "../views/updatedolar.vue";
import Upacao from "../views/updateacao.vue";

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
    path: "/updateacao",
    name: "upacao",
    component: Upacao,
  },
  {
    path: "/updateindice",
    name: "upindice",
    component: Upindice,
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
