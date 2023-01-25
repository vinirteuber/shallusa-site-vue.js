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
