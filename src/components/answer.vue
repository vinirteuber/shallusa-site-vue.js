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
      <h1>{{ empreendimento.topico }}</h1>
    </div>
    {{ empreendimento.pergunta }}
  </div>
  <div class="balao2">
    <h1>Shallusa</h1>
    {{ empreendimento.texto }}
  </div>
</template>

<style>
.balao2 {
  font-family: Poppins, sans-serif;
  margin-top: 60px;
  background: rgb(216, 216, 216);
  border-radius: 15px;
  width: 300px;
  height: 100px;

  position: relative;
}
.balao2:after {
  content: "";

  width: 0;
  height: 0;

  position: absolute;

  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid rgb(216, 216, 216);

  bottom: -20px;
  left: 20%;
}
.balao {
  font-family: Poppins, sans-serif;
  margin-left: 40px;
  margin-top: 40px;
  background: #87c8e0;
  border-radius: 15px;
  width: 300px;
  height: 100px;

  position: relative;
}
.balao:after {
  content: "";

  width: 0;
  height: 0;

  position: absolute;

  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #87c8e0;

  bottom: -20px;
  left: 20%;
}
</style>
