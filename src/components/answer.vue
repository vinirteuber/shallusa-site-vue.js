<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  name: "empreendimentos",
  props: ["id", "empreendimento"],
  user: {},
  Empreendimentos: {
    Empreendimento: 0,
  },
  methods: {
    async getAllSaq(id) {
      await this.get(`/saq/${id}/`, this.empreendimentos);
      console.log(this.empreendimentos);
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/saq/${this.id}/`);
    this.Empreendimento = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["empreendimentos", "username", "foto"]),
  },
};
</script>

<template>
  <div class="balao">
    <div class="topic">
      <h1>Topico - {{ empreendimento.topico }}</h1>
    </div>
    <div class="pergunta">
      <span>Pergunta: {{ empreendimento.pergunta }}</span>
    </div>
  </div>
  <div class="balao2">
    <div class="resposta">
      <h1>Resposta Shallusa:</h1>
      <span> {{ empreendimento.texto }}</span>
    </div>
  </div>
</template>

<style>
.balao2 {
  padding: 0.5rem;
  font-family: Poppins, sans-serif;
  margin-top: 60px;
  background: rgba(209, 209, 209, 0.486);
  border: 1px solid white;
  border-radius: 15px;
}

span {
  font-size: 15pt;
}

h1 {
  font-weight: 400;
}

.balao h1 {
  color: rgb(3, 83, 0);
}

.balao2 h1 {
  color: rgb(87, 2, 2);
}

.balao span {
  color: white;
}

.balao {
  padding: 0.5rem;
  font-family: Poppins, sans-serif;
  margin-left: 200px;
  margin-top: 40px;
  border: 1px solid rgb(255, 255, 255);
  background: #4b4b4b8f;
  border-radius: 15px;
}
</style>
