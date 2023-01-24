<script>
import answer from "../components/answer.vue";
import axios from "axios";
export default {
  components: { answer },
  data() {
    return {
      empreendimentos: [],
      empreendimento: {},
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
};
</script>

<template>
  <div class="all">
    <div class="outer">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li><a class="menu__item" href="/">Home</a></li>
          <li><a class="menu__item" href="/faq">Duvidas Frequentes</a></li>
          <li><a class="menu__item" href="/sobrenos">Sobre Nós</a></li>
          <li>
            <a href="">
              <button>Sala ao-vivo</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <header>
      <div class="logo">
        <a href="/">
          <img src="../assets/shallusa.png" alt="" />
        </a>
      </div>
      <div class="list">
        <ul class="links">
          <a href="/">
            <li class="desk">Home</li>
          </a>

          <a href="/faq">
            <li class="desk">Dúvidas frequentes</li>
          </a>
          <a href="/sobrenos">
            <li class="desk">Sobre nós</li>
          </a>
          <!-- link da live vindo do backend -->
          <div class="live">
            <button>ao-vivo</button>
          </div>
          <!-- link da live vindo do backend -->
        </ul>
      </div>
    </header>
    <answer
      v-for="empreendimento in empreendimentos"
      :key="empreendimento.id"
      :empreendimento="empreendimento"
    />
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
