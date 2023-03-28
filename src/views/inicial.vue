<script>
import dolar from "../components/dolar.vue";
import indice from "../components/indice.vue";
import acoes from "../components/acao.vue";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  components: { dolar, indice, acoes },
  data() {
    return {
      user: {
        username: "",
      },
      superuser: "",
      empreendimentos: [],
      indices: [],
      acoes: [],
    };
  },
  async created() {
    const empreendimentos = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/dolar/"
    );
    this.empreendimentos = empreendimentos.data;
    const indices = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/indice/"
    );
    this.indices = indices.data;
    const acoes = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/acoes/"
    );
    this.acoes = acoes.data;
    const res = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/usuario/${this.id}/`
    );
    this.user = res.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, ["id", "username", "is_superuser"]),
  },
  async getAllComments() {
    const empreendimento = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/dolar/"
    );
    this.empreendimento = empreendimento.data;
    const indice = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/indice/"
    );
    this.indice = indice.data;
    const acao = await axios.get(
      "https://gustavorteuber.pythonanywhere.com/acoes/"
    );
    this.acao = acao.data;
  },
};
</script>

<template>
  <div class="all" v-bind="superuser">
    <header>
      <div class="outer">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li></li>
            <li v-if="is_superuser == true">
              <RouterLink class="menu__item" to="/newindice"
                >NewIndice</RouterLink
              >
            </li>
            <li v-if="is_superuser == true">
              <RouterLink class="menu__item" to="/newdolar"
                >NewDolar</RouterLink
              >
            </li>
            <li v-if="is_superuser == true">
              <RouterLink class="menu__item" to="/newacoes"
                >NewAções</RouterLink
              >
            </li>

            <li v-if="is_superuser == false">
              <a
                class="menu__item"
                href="https://wa.me/5571984318965"
                target="_blank"
                >SAQ</a
              >
            </li>
            <li v-if="is_superuser == false">
              <a
                class="menu__item"
                href="https://www.nelogica.com.br/produtos/modulos-opcionais?modulo=estrategias&id=6932"
                target="_blank"
                >Obter o curso</a
              >
            </li>
            <li v-if="is_superuser == false">
              <RouterLink class="menu__item" to="/">Sala ao-vivo</RouterLink>
            </li>
            <li v-if="is_superuser == true">
              <RouterLink class="menu__item" to="/"
                >Bem-Vindo {{ user.username }} !</RouterLink
              >
            </li>
            <div class="live">
              <li>
                <a
                  href="https://www.youtube.com/embed/O69fRhzbHn8"
                  target="_blank"
                >
                  <button>Sala ao-vivo</button>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="logo">
        <RouterLink to="/">
          <img src="../assets/shallusa.png" alt="" />
        </RouterLink>
      </div>
      <div class="list">
        <ul class="links">
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newindice">Indice</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newdolar">Dolar</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newacoes">Ações</RouterLink>
          </li>
          <li v-if="is_superuser == false">
            <a class="desk" href="https://wa.me/5571984318965" target="_blank"
              >SAQ</a
            >
          </li>
          <li v-if="is_superuser == false">
            <a
              class="desk"
              href="https://www.nelogica.com.br/produtos/modulos-opcionais?modulo=estrategias&id=6932"
              target="_blank"
              >Obter o curso</a
            >
          </li>
          <div class="live">
            <a href="">
              <button>Sala ao-vivo</button>
            </a>
          </div>

          <!-- link da live vindo do backend -->

          <!-- link da live vindo do backend -->
        </ul>
      </div>
    </header>
    <div class="content">
      <div class="banner">
        <div class="m-10"></div>
        <a href="https://wa.me/5571984318965" target="_blank">
          <img
            src="../assets/mobile1.png"
            alt="Banner"
            class="w-full h-auto block md:hidden"
        /></a>
        <a href="https://wa.me/5571984318965" target="_blank">
          <img
            src="../assets/1.png"
            alt="Banner"
            class="w-full h-auto hidden md:block lg:block"
        /></a>

        <a href="https://wa.me/5571984318965" target="_blank">
          <img
            src="../assets/2.png"
            alt="Banner"
            class="w-full h-auto hidden md:block lg:block"
          />
        </a>
        <img
          src="../assets/mobile2.png"
          alt="Banner"
          class="w-full h-auto block md:hidden"
        />
        <img
          src="../assets/3.png"
          alt="Banner"
          class="w-full h-auto hidden md:block lg:block"
        />
        <div class="cards-ini">
          <div class="m-7 text-5xl font-bold md:text-md font-bold">
            <h1
              class="mb-4 text-3xl font-extrabold text-black md:text-5xl lg:text-6xl"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-400 to-yellow-700"
                >Estratégias para o</span
              >
              <div class="text-black">MINI DÓLAR.</div>
            </h1>
          </div>
          <dolar
            v-for="empreendimento in empreendimentos"
            :key="empreendimento.id"
            :empreendimento="empreendimento"
          />
          <div class="m-7 text-5xl font-bold md:text-md font-bold">
            <h1
              class="mb-4 text-3xl font-extrabold text-black md:text-5xl lg:text-6xl"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-cyan-400 to-green-700"
                >Estratégias para o</span
              >
              <div class="text-black">MINI INDICE.</div>
            </h1>
          </div>
          <indice v-for="indice in indices" :key="indice.id" :indice="indice" />
          <div class="m-7 text-5xl font-bold md:text-md font-bold">
            <h1
              class="mb-4 text-3xl font-extrabold text-black md:text-5xl lg:text-6xl"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-red-400 to-rose-700"
                >Estratégias para
              </span>
              <div class="text-black">AÇÕES.</div>
            </h1>
          </div>
          <acoes v-for="acao in acoes" :key="acao.id" :acao="acao" />
        </div>
        <div class="h-[35px]"></div>
        <!-- <img src="../assets/geral.png" alt="Banner" class="w-full h-auto" /> -->
        <a href="https://wa.me/5571984318965" target="_blank">
          <img
            src="../assets/mobile3.png"
            alt="Banner"
            class="w-full h-auto block md:hidden" />
          <img
            src="../assets/7.png"
            alt="Banner"
            class="w-full h-auto hidden md:block lg:block"
        /></a>
        <img
          src="../assets/mobile4.png"
          alt="Banner"
          class="w-full h-auto block md:hidden"
        />
        <img
          src="../assets/8.png"
          alt="Banner"
          class="w-full h-auto hidden md:block lg:block"
        />
        <img
          src="../assets/mobile5.png"
          alt="Banner"
          class="w-full h-auto block md:hidden"
        />
        <img
          src="../assets/9.png"
          alt="Banner"
          class="w-full h-auto hidden md:block lg:block"
        />
        <img
          src="../assets/mobile6.png"
          alt="Banner"
          class="w-full h-auto block md:hidden"
        />
        <img
          src="../assets/10.png"
          alt="Banner"
          class="w-full h-auto hidden md:block lg:block"
        />
      </div>
    </div>

    <!-- <div class="title-card">
        <h1>INVESTIMENTOS INDICE</h1>
      </div> -->

    <div class="acoes"></div>
  </div>
  <footer>
    <div class="container-footer">
      <div class="row-footer">
        <!-- footer col-->
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Quem somos </a></li>
          </ul>
        </div>
        <!--end footer-col col-->
        <!-- footer-col col-->
        <div class="footer-col">
          <h4>Obter ajuda</h4>
          <ul>
            <li>
              <a href="https://wa.me/5571984318965" target="_blank">FAQ</a>
            </li>
            <li>
              <a
                href="https://www.nelogica.com.br/produtos/modulos-opcionais?modulo=estrategias&id=6932"
                target="_blank"
                >Obter o curso</a
              >
            </li>
          </ul>
        </div>
        <!--end footer-col col-->
        <!-- footer-col col-->
        <div class="footer-col">
          <h4>Entre em contato</h4>
          <ul>
            <li>
              <a href="https://wa.me/5571984318965" target="_blank">Whatsapp</a>
            </li>
            <li><a href="mailto:Ulyssesbarcelos@gmail.com">Email</a></li>
          </ul>
        </div>
        <!--end footer-col col-->
        <!-- footer-col col-->
        <div class="footer-col">
          <h4>Siga nos!</h4>
          <div class="form-sub"></div>

          <div class="medias-socias">
            <a
              href="https://www.youtube.com/@ulyssesbarcelos6635"
              target="_blank"
            >
              <i class="fa fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/shallusa01/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <!--end footer col-->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.title-card h1 {
  margin-top: 40px;
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  background: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );
  height: 60px;
  font-weight: 600;
  color: #000000;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.cards-ini {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.logo img {
  margin-left: 1rem;
}

.cards-two {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  font-family: "League Spartan", sans-serif;
  color: #888888;
}
</style>
