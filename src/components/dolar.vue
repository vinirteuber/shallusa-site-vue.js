<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  name: "empreendimentos",
  props: ["id", "empreendimento"],
  user: {
    username: "",
  },
  Empreendimentos: {
    Empreendimento: 0,
  },
  methods: {
    async getAllEmpreendimentos(id) {
      await this.get(`/dolar/${id}/`, this.empreendimentos);
      console.log(this.empreendimentos);
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/dolar/${this.id}/`);
    this.Empreendimento = res.data;
    const des = await axios.get(`http://localhost:8000/usuario/${this.id}/`);
    this.user = des.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, [
      "empreendimentos",
      "username",
      "foto",
      "is_superuser",
    ]),
  },
};
</script>
<template>
  <div class="cards" v-bind="superuser">
    <div class="card-video">
      <div class="title">
        <h1>{{ empreendimento.titulo }}</h1>
      </div>
      <div class="desc">
        <span>{{ empreendimento.descricao }}</span>
      </div>
      <div class="video">
        <iframe :src="empreendimento.link"> </iframe>
      </div>
      <div class="btn">
        <a :href="empreendimento.link" target="_blank">
          <div class="btn-da">
            <div class="delete">
              <button v-if="is_superuser == true">DELETAR</button>
            </div>

            <div class="alterar">
              <button v-if="is_superuser == true">ALTERAR</button>
            </div>
          </div>
          <div class="saiba-mais">
            <button>Saiba Mais</button>
          </div>
          <div class="obter">
            <span v-if="is_superuser == false">Obter este curso!</span>
          </div>
        </a>
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

.indice {
  justify-content: space-between;
  margin: 1rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}

.card-video {
  justify-content: space-between;
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
  height: 600px;
  width: 400px;
  background-color: #000000;
}

iframe {
  margin-top: 1rem;
  height: 300px;
  width: 380px;
}

.delete button {
  background-color: red;
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
