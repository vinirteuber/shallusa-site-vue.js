<script>
import dolar from "../components/dolar.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  components: { dolar },
  name: "empreendimentos",
  props: ["id"],
  data() {
    return {
      empreendimento: {
        empreendimento: 0,
        titulo: "",
        descricao: "",
        link: "",
      },
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/dolar/${this.id}/`);
    this.empreendimento = res.data;
  },
  methods: {
    async alterarDolar() {
      const info = {
        titulo: this.empreendimento.nome,
        descricao: this.empreendimento.nome,
        link: this.empreendimento.peso,
      };
      try {
        await axios.put(`http://localhost:8000/dolar/${this.id}/`, info);
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
            <div class="title">
              <h1>Altere o(a) {{ empreendimento.nome }}:</h1>
            </div>
          </div>

          <div class="input-group">
            <div class="input-box">
              <label for="firstname">Nome do cão</label>
              <input
                @keydown.enter="alterarDolar()"
                id="nome"
                type="text"
                name="nome"
                placeholder="nome"
                v-model="empreendimento.titulo"
              />
            </div>

            <div class="input-box">
              <label for="lastname">desc</label>
              <input
                @keydown.enter="alterarDolar()"
                id="descricao"
                type="text"
                name="descricao"
                placeholder="desc"
                v-model="empreendimento.descricao"
              />
            </div>

            <div class="input-box">
              <label for="email">Peso</label>
              <input
                @keydown.enter="alterarDolar()"
                id="peso "
                type="text"
                name="peso"
                placeholder="peso"
                v-model="empreendimento.link"
              />
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

<!-- <style scoped>
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
</style> -->
