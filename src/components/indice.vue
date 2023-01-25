<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  name: "indices",
  props: ["id", "indice"],
  user: {
    username: "",
  },
  Indices: {
    Indice: 0,
  },
  methods: {
    async getAllIndices(id) {
      await this.get(`/indice/${id}/`, this.indices);
      console.log(this.indices);
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/indice/${this.id}/`);
    this.Indice = res.data;
    const des = await axios.get(`http://localhost:8000/usuario/${this.id}/`);
    this.user = des.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, ["indices", "username", "foto", "is_superuser"]),
  },
};
</script>
<template>
  <div class="indice" v-bind="superuser">
    <div class="card-video">
      <div class="title">
        <h1>{{ indice.titulo }}</h1>
      </div>
      <div class="desc">
        <span>{{ indice.descricao }}</span>
      </div>
      <div class="video">
        <iframe :src="indice.link"> </iframe>
      </div>
      <div class="admin">
        <div class="delete">
          <button v-if="is_superuser == true">Deletar</button>
        </div>
        <div class="update">
          <button v-if="is_superuser == true">Editar</button>
        </div>
      </div>
      <div class="button-dolar">
        <button>Saiba Mais</button>
      </div>
      <div class="comprar">
        <a :href="indice.link" target="_blank"> Adquirir este curso</a>
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
  border: solid 2px #555555;
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
  background-color: #555555;
  margin-bottom: 1rem;
  font-size: 16pt;
  border-radius: 1rem;
  margin-top: 10px;
  height: 50px;
  width: 250px;
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
