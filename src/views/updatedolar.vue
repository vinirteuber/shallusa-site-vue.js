<script>
import dolar from "../components/dolar.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  components: { dolar },
  name: "empreendimentos",
  props: ["id", "empreendimento"],
  data() {
    return {
      empreendimento: {
        empreendimento: 0,
        titulo: "",
        descricao: "",
        link: "",
        curso: "",
        foto: {
          url: null,
        },
      },
    };
  },
  async created() {
    const res = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/dolar/${this.id}/`
    );
    this.empreendimentos = res.data;
  },
  methods: {
    async alterarDolar() {
      const info = {
        titulo: this.empreendimento.titulo,
        descricao: this.empreendimento.descricao,
        link: this.empreendimento.link,
        curso: this.empreendimento.curso,
      };
      try {
        await axios.patch(
          `https://gustavorteuber.pythonanywhere.com/dolar/${this.id}/`,
          info
        );
        alert("Alterado com sucesso!");
        this.$router.push("/");
      } catch {
        alert("Algo deu errado, tente novamente ");
      }
    },
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, [
      "empreendimentos",
      "username",
      "email",
      "id",
      "first_name",
    ]),
  },
  mounted() {},
};
</script>

<template>
  <div class="outer">
    <div class="form">
      <main>
        <form action="#">
          <div class="circle-primary"></div>
          <div class="container">
            <div class="form-header">
              <div class="title">
                <h1>Altere o {{ empreendimento.titulo }}:</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">titulo:</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="titulo"
                  type="text"
                  name="titulo"
                  placeholder="titulo"
                  v-model="empreendimento.titulo"
                  required />
              </div>

              <div class="input-box">
                <label for="lastname">Descrição:</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="empreendimento.descricao"
                  required />
              </div>

              <div class="input-box">
                <label for="email">Link youtube (embed)</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="link"
                  type="text"
                  name="link"
                  placeholder="link"
                  v-model="empreendimento.link"
                  required />
              </div>
              <div class="input-box">
                <label for="email">Link comprar curso</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="link"
                  type="text"
                  name="link"
                  placeholder="link"
                  v-model="empreendimento.curso"
                  required />
              </div>
            </div>

            <div class="continue-button">
              <button @click.prevent="alterarDolar">Alterar</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title h1 {
  font-size: 24pt;
}

.continue-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #111111;
}

.input-box {
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.outer {
  background-color: #333333;
}
input {
  font-family: "Poppins", sans-serif;
  width: 450px;
  height: 40px;
  margin-top: 1rem;
  border: 3px solid #242424;
  background-color: #111111;
  border-radius: 18px;
  color: #fff;
  outline: none;
  padding: 3% 5%;
}

label {
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
}

main {
  padding: 0;
}

h1 {
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
  font-size: 16pt;
  font-weight: 600;
  color: #000000;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.user-email {
  color: #eef;
}

.continue-button button {
  margin-top: 2rem;
  cursor: pointer;
  width: 350px;
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
  border-radius: 200px;
  height: 60px;
  font-size: 16pt;
  font-weight: 600;
  color: #000000;
}

.continue-button button:hover {
  transition: 0.5s;
  letter-spacing: 5px;
}

span {
  color: #eef;
}
label {
  margin-top: 10px;
  color: #eef;
}
.logout button {
  margin-top: 60px;
  width: 400px;
}
.nickname {
  display: flex;
}
.re-password {
  display: flex;
}
.circle-1 {
  position: absolute;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(45deg, #212979, #3c88a6, #204486);
  clip-path: circle(40% at left 80%);
  z-index: 0;
}
.circle-2 {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  clip-path: circle(40% at right 80%);
  z-index: 0;
}
.outer {
  padding: 4rem;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar img {
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}
</style>
