<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import answer from "../components/answer.vue";
import axios from "axios";
export default {
  components: { answer },
  data() {
    return {
      user: {
        superuser: {},
      },
      empreendimentos: [],
      empreendimento: {},
      comentario: {},
    };
  },
  async created() {
    const empreendimentos = await axios.get("http://localhost:8000/saq/");
    this.empreendimentos = empreendimentos.data;
  },
  async getAllComments() {
    const empreendimento = await axios.get("http://localhost:8000/saq/");
    this.empreendimento = empreendimento.data;
  },
  computed: {
    ...mapState(useAuthStore, ["id", "username", "is_superuser"]),
  },
  methods: {
    async addComment() {
      if (this.comentario.texto.trim() === "") {
        return;
      }
      this.comentario.resposta = this.id;
      await axios.post("http://localhost:8000/saq/", this.comentario);
      await this.getAllComments();
    },
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
            <li><RouterLink class="menu__item" to="/">Home</RouterLink></li>
            <li>
              <RouterLink class="menu__item" to="/faq"
                >Duvidas Frequentes</RouterLink
              >
            </li>
            <li v-if="is_superuser == false">
              <RouterLink class="menu__item" to="/sobrenos"
                >Sobre nós</RouterLink
              >
            </li>
            <li v-if="is_superuser == true">
              <RouterLink class="menu__item" to="/dolar">{{
                user.username
              }}</RouterLink>
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
          <li v-if="is_superuser == false">
            <RouterLink class="desk" to="/">Home</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newindice">Indice</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newdolar">Dolar</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/newacoes">Ações</RouterLink>
          </li>
          <li v-if="is_superuser == true">
            <RouterLink class="desk" to="/faq">SAQadm</RouterLink>
          </li>
          <li v-if="is_superuser == false">
            <RouterLink class="desk" to="/faq">SAQ</RouterLink>
          </li>

          <!-- link da live vindo do backend -->
          <div class="live">
            <a href="">
              <button>Sala ao-vivo</button>
            </a>
          </div>

          <!-- link da live vindo do backend -->
        </ul>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <div class="carrossel">
          <answer
            v-for="empreendimento in empreendimentos"
            :key="empreendimento.id"
            :empreendimento="empreendimento"
          />
        </div>
        <div class="input-control" v-bind="superuser">
          <div class="controls" v-if="is_superuser == true">
            <div class="top">
              <span>Tópico:</span>
              <input
                @keydown.enter="submitLogin()"
                v-model="comentario.topico"
                type="text"
                placeholder="Digite um Tópico"
              />
            </div>
            <div class="pergunta">
              <span>Pergunta:</span>
              <input
                @keydown.enter="submitLogin()"
                v-model="comentario.pergunta"
                type="text"
                placeholder="Digite a Pergunta"
              />
            </div>
            <div class="reposta">
              <span>Resposta:</span>
              <input
                @keydown.enter="submitLogin()"
                v-model="comentario.texto"
                type="text"
                placeholder="Digite uma Resposta"
              />
            </div>
          </div>
        </div>
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
          <!--end footer col-->
          <!-- footer col-->
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
          <!--end footer col-->
          <!-- footer col-->
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
          <!--end footer col-->
          <!-- footer col-->
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
  </div>
</template>

<style scoped>
.input-control {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  border-radius: 0.5rem;
  outline: 0;
  padding: 10px;
  color: #555555;
}

span {
  font-family: "Poppins", sans-serif;
  color: #eef;
  margin-left: 1rem;
}
.controls {
  display: flex;
}
.header {
  z-index: 1000;
}

.container {
  border-radius: 20px;
  margin-top: 100px;
  padding: 2rem;
  background-color: #111111;
  width: 1000px;
  height: 800px;
  overflow-y: scroll;
}
</style>
