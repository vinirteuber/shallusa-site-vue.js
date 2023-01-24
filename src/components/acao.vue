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
    const res = await axios.get(`http://localhost:8000/acoes/${this.id}/`);
    this.Acao = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["acoes", "username", "foto"]),
  },
};
</script>
<template>
  <div class="indice">
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
        <a :href="acao.link" target="_blank">
          <button>Saiba Mais</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.cards {
  justify-content: space-between;
  margin: 1rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}

.card-video {
  -webkit-box-shadow: 4px 7px 36px 0px rgba(191, 238, 255, 1);
  -moz-box-shadow: 4px 7px 36px 0px rgba(191, 238, 255, 1);
  box-shadow: 4px 7px 36px 0px rgba(191, 238, 255, 1);
  border: solid 2px #87c8e0;
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
.btn button {
  text-transform: uppercase;
  color: #000000;
  background-color: #87c8e0;
  margin-bottom: 1rem;
  font-size: 16pt;
  border-radius: 1rem;
  margin-top: 10px;
  height: 50px;
  width: 250px;
}

.btn button:hover {
  color: #87c8e0;
  background-color: #000000;
  margin-bottom: 1rem;
  font-size: 16pt;
  border: 1px solid #87c8e0;
  border-radius: 1rem;
  margin-top: 10px;
  height: 50px;
  width: 250px;
  transition: 0.5s;
}

.sub-title span {
  padding: 1rem;
}

.title h1 {
  margin-top: 1rem;
  color: #87c8e0;
  margin-bottom: 1rem;
}
</style>
