import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/inicial.vue";
import Questions from "../views/questions.vue";
import SobreNos from "../views/sobrenos.vue";
import Login from "../views/login.vue";

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
