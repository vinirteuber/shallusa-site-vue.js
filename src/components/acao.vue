<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  name: "acoes",
  props: ["id", "acao"],
  user: {},
  Acoes: {
    Acao: 0,
  },
  methods: {
    async getAllacoes(id) {
      await this.get(`/acoes/${id}/`, this.acoes);
      console.log(this.acoes);
    },
  },
  async created() {
    const res = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/acoes/${this.id}/`
    );
    this.Acao = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["acoes", "username", "foto", "is_superuser"]),
  },
};
</script>
<template>
  <div class="indice" v-bind="superuser">
    <div class="card-video">
      <div class="title">
        <h1>{{ acao.titulo }}</h1>
      </div>
      <div class="desc">
        <span>{{ acao.descricao }}</span>
      </div>
      <div class="video">
        <iframe :src="acao.link"> </iframe>
      </div>
      <div class="btn">
        <a :href="acao.link" target="_blank"> </a>
      </div>
      <div class="admin">
        <div class="update">
          <RouterLink :to="`/especificacoesac/${acao.id}`">
            <button v-if="is_superuser == true">Editar</button></RouterLink
          >
        </div>
      </div>
      <div class="clicks">
        <a target="_blank" :href="acao.curso">
          <div class="button-dolar">
            <button>Saiba Mais</button>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.comprar {
  margin-top: 20px;
}

.admin {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.delete button {
  cursor: pointer;
  width: 120px;
  background-color: red;
  border-radius: 200px;
  height: 40px;
  font-size: 16pt;
  font-weight: 600;
  color: #000000;
}
.update button {
  cursor: pointer;
  width: 120px;
  background-color: #0c5f02;
  border-radius: 200px;
  height: 40px;
  font-size: 16pt;
  font-weight: 600;
  color: #000000;
}

.button-dolar button {
  cursor: pointer;
  width: 250px;
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

.button-dolar button:hover {
  transition: 0.5s;
  letter-spacing: 2px;
}
.cards {
  justify-content: space-between;
  margin: 1rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}

.card-video {
  border: solid 2px #444444;
  color: #eef;
  font-family: "League Spartan", sans-serif;

  border-radius: 1rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  height: 600px;
  width: 400px;
  background-color: #000000;
}

iframe {
  margin-top: 1rem;
  height: 300px;
  width: 380px;
}

.sub-title span {
  padding: 1rem;
}

.title h1 {
  margin-top: 1rem;
  color: #555555;
  margin-bottom: 1rem;
}
</style>
