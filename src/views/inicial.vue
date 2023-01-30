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
    const empreendimentos = await axios.get("http://localhost:8000/dolar/");
    this.empreendimentos = empreendimentos.data;
    const indices = await axios.get("http://localhost:8000/indice/");
    this.indices = indices.data;
    const acoes = await axios.get("http://localhost:8000/acoes/");
    this.acoes = acoes.data;
    const res = await axios.get(`http://localhost:8000/usuario/${this.id}/`);
    this.user = res.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, ["id", "username", "is_superuser"]),
  },
  async getAllComments() {
    const empreendimento = await axios.get("http://localhost:8000/dolar/");
    this.empreendimento = empreendimento.data;
    const indice = await axios.get("http://localhost:8000/indice/");
    this.indice = indice.data;
    const acao = await axios.get("http://localhost:8000/acoes/");
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
                href="https://wa.me/557599455633"
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
                  target="_blank">
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
            <a class="desk" href="https://wa.me/557599455633" target="_blank"
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
      <div class="carrossel">
        <img src="../assets/banner.png" alt="banner" />
      </div>
      <div class="title-card">
        <h1>INVESTIMENTOS DOLAR</h1>
      </div>
      <div class="cards-ini">
        <dolar
          v-for="empreendimento in empreendimentos"
          :key="empreendimento.id"
          :empreendimento="empreendimento" />
      </div>
      <div class="title-card">
        <h1>INVESTIMENTOS INDICE</h1>
      </div>
      <div class="cards-two">
        <div class="indice">
          <indice v-for="indice in indices" :key="indice.id" :indice="indice" />
        </div>
      </div>
      <h1>
        <!-- INVESTIMENTOS AÇOES <br />
        (Em breve) -->
      </h1>
      <div class="acoes">
        <acoes v-for="acao in acoes" :key="acao.id" :acao="acao" />
      </div>
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
                <a href="https://wa.me/557599455633" target="_blank">FAQ</a>
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
                <a href="https://wa.me/557599455633" target="_blank"
                  >Whatsapp</a
                >
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
                target="_blank">
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
  </div>
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
