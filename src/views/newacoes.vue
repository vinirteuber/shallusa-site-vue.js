<script>
import acoes from "../components/acao.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  components: { acoes },
  data() {
    return {
      indice: {},
    };
  },
  methods: {
    async submitFile() {
      await axios.post("http://localhost:8000/acoes/", this.indice);
      alert("Ação registrado com sucesso!"), this.$router.push("/");
    },
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["id"]),
  },
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
                <h1>Adicione um novo postAções:</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">titulo:</label>
                <input
                  @keydown.enter="submitFile()"
                  id="titulo"
                  type="text"
                  name="titulo"
                  placeholder="titulo"
                  v-model="indice.titulo"
                  required
                />
              </div>

              <div class="input-box">
                <label for="lastname">Descrição:</label>
                <input
                  @keydown.enter="submitFile()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="indice.descricao"
                  required
                />
              </div>

              <div class="input-box">
                <label for="email">Link youtube (embed)</label>
                <input
                  @keydown.enter="submitFile()"
                  id="link"
                  type="text"
                  name="link"
                  placeholder="link"
                  v-model="indice.link"
                  required
                />
              </div>
              <div class="input-box">
                <label for="email">Link comprar curso</label>
                <input
                  @keydown.enter="submitFile()"
                  id="link"
                  type="text"
                  name="link"
                  placeholder="link"
                  v-model="indice.curso"
                  required
                />
              </div>
            </div>

            <div class="continue-button">
              <button @click.prevent="submitFile">Adicione</button>
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
