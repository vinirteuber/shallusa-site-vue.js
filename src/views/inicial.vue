<script>
import cards from "../components/cardvideo.vue";
import axios from "axios";
export default {
  components: { cards },
  data() {
    return {
      empreendimentos: [],
      empreendimento: {},
    };
  },
  async created() {
    const empreendimentos = await axios.get(
      "http://localhost:8000/publicacoes/"
    );
    this.empreendimentos = empreendimentos.data;
  },
  async getAllComments() {
    const empreendimento = await axios.get(
      "http://localhost:8000/publicacoes/"
    );
    this.empreendimento = empreendimento.data;
  },
};
</script>

<template>
  <div class="all">
    <header>
      <div class="logo">
        <a href="/">
          <img src="../assets/shallusa.png" alt="" />
        </a>
      </div>
      <div class="list">
        <ul>
          <li>Home</li>
          <li>Dúvidas frequentes</li>
          <li>Sobre nós</li>
          <button>Chat ao-vivo</button>
        </ul>
      </div>
    </header>
    <div class="content">
      <div class="carrossel">
        <img
          src="../assets/WhatsApp Image 2023-01-23 at 12.55.30.jpeg"
          alt="banner"
        />
      </div>
      <div class="cards">
        <cards
          v-for="empreendimento in empreendimentos"
          :key="empreendimento.id"
          :empreendimento="empreendimento"
        />
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
              <li><a href="#">Obter o curso</a></li>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.carrossel img {
  margin-top: 2rem;
  width: 1000px;
  margin-bottom: 2rem;
}
.cards {
  display: flex;
  margin-bottom: 5rem;
}

.all {
  min-width: 100%;
  min-height: 100vh;
  background: linear-gradient(#000000, #111111);
}

.content {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  font-family: "Poppins", sans-serif;
  color: #eef;
  font-size: 20pt;
  background-color: #000000;
  height: 20%;
}

header {
  font-family: "League Spartan", sans-serif;
  align-items: center;
  display: flex;
  height: 75px;
  background: #000000;
}

header ul {
  display: flex;
}

.logo img {
  margin-left: 5rem;
  cursor: pointer;
  display: flex;
  width: 250px;
}
.logo {
  width: 60%;
}
.list {
  float: right;
}

li {
  color: #87c8e0;
  cursor: pointer;
  font-size: 16pt;
  list-style: none;
  margin-left: 20px;
}

li:hover {
  text-decoration: underline;
}

.desc {
  max-width: 500px;
  margin-bottom: 2rem;
}

.desc span {
  color: #eef;
  font-size: 16pt;
}
.title h1 {
  color: #87c8e0;
  margin-bottom: 2rem;
}
i {
  margin-right: 1rem;
}

main {
  padding: 7rem;
}

button {
  cursor: pointer;
  margin-left: 15px;
  width: 100px;
  color: #87c8e0;
  background-color: #000000;
  border: solid 1px #87c8e0;
  border-radius: 10px;
}
button:hover {
  color: #000000;
  background-color: #87c8e0;
  transition: 1s;
  border-radius: 10px;
}
footer {
  padding: 50px 0;
}
.container-footer {
  max-width: 1400px;
  padding: 0 4%;
  margin: auto;
}
.row-footer {
  display: flex;
  flex-wrap: wrap;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 22px;
  color: #87c8e0;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;
}
.footer-col ul {
  list-style: none;
}
.footer-col ul li {
  margin: 10px 0;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: white;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #cecdcd;
  padding-left: 10px;
}
.footer-col .medias-socias {
  margin-top: 25px;
}
.footer-col .medias-socias a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 0 10px 10px 0;
  text-decoration: none;
  border-radius: 50%;
  color: white;
  border: 1px solid white;
  transition: all 0.5s ease;
}
.footer-col .medias-socias a i {
  font-size: 20px;
}

i[data-v-70d5cb94] {
  margin: 0;
}
.footer-col .medias-socias a:hover {
  color: #87c8e0;
  background-color: #111111;
}
.footer-col .form-sub input {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  outline: none;
  border: 1px solid white;
  color: white;
  background-color: #87c8e0;
}
.footer-col .form-sub input::placeholder {
  color: white;
}

/* Responsivo */
@media (max-width: 800px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 600px) {
  .footer-col {
    width: 100%;
  }
}
</style>
