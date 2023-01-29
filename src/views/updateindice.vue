<script>
import indice from "../components/indice.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  components: { indice },
  name: "indices",
  props: ["id", "indice"],
  data() {
    return {
      indice: {
        indice: 0,
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
    const res = await axios.get(`http://localhost:8000/indice/${this.id}/`);
    this.indices = res.data;
  },
  methods: {
    async alterarDolar() {
      const info = {
        titulo: this.indice.titulo,
        descricao: this.indice.descricao,
        link: this.indice.link,
        curso: this.indice.curso,
      };
      try {
        await axios.patch(`http://localhost:8000/indice/${this.id}/`, info);
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
      "indices",
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
                <h1>Altere o(a) {{ indice.titulo }}:</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Nome do curso</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="titulo"
                  type="text"
                  name="nome"
                  placeholder="nome"
                  v-model="indice.titulo"
                />
              </div>

              <div class="input-box">
                <label for="lastname">Descrição</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="indice.descricao"
                />
              </div>

              <div class="input-box">
                <label for="email">Link EMBED</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="link"
                  type="text"
                  name="peso"
                  placeholder="link embed"
                  v-model="indice.link"
                />
              </div>

              <div class="input-box">
                <label for="number">curso</label>
                <input
                  @keydown.enter="alterarDolar()"
                  id="curso"
                  type="text"
                  name="altura"
                  v-model="indice.curso"
                  placeholder="link do curso"
                />
              </div>
            </div>
            <div class="continue-button">
              <button @click.prevent="alterarDolar">Altere</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 350px;
  height: 40px;
  margin-top: 1rem;
  background-color: #161e35;
  border-radius: 6px;
  color: #fff;
  outline: none;
  padding: 3% 5%;
}
h1 {
  text-transform: uppercase;
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-email {
  color: #eef;
}
button {
  background: linear-gradient(to right, #0419d6, #00b7ff);
  color: #fff;
  width: 450px;
  height: 40px;
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;
}
button:hover {
  background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  color: #fff;
  height: 40px;
  border-radius: 40px;
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
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 20rem;
  border-radius: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.avatar img {
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}
</style>
