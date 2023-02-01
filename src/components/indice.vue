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
    const res = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/indice/${this.id}/`
    );
    this.Indice = res.data;
    const des = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/usuario/${this.id}/`
    );
    this.user = des.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, ["indices", "username", "foto", "is_superuser"]),
  },
};
</script>
<template>
  <div class="warp">
    <div class="cards" v-bind="superuser">
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
          <div class="update">
            <RouterLink :to="`/especificacoesin/${indice.id}`">
              <button v-if="is_superuser == true">Editar</button></RouterLink
            >
          </div>
        </div>
        <div class="clicks">
          <a target="_blank" :href="indice.curso">
            <div class="button-dolar">
              <button>Saiba Mais</button>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comprar {
  margin-top: 20px;
}

.clicks {
  width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  margin-top: 10px;
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

.desc {
  height: 500px;
}

.title {
  height: 90px;
}

.button-dolar button:hover {
  transition: 0.5s;
  letter-spacing: 1px;
}
.cards {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
  margin-bottom: 1rem;
  justify-content: space-between;
  border: solid 2px #555555;
  color: #eef;
  font-family: "League Spartan", sans-serif;
  border-radius: 1rem;
  padding: 30px;
  display: flex;
  align-items: center;
  width: 350px;
  height: 1000px;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
}

.card-video span {
  max-width: 330px;
}

iframe {
  margin-top: 1rem;
  height: 300px;
  width: 340px;
}

.sub-title span {
  padding: 1rem;
}

.title h1 {
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
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
  color: #000000;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
