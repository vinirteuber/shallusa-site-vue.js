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
        <a :href="acao.link" target="_blank"> </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
