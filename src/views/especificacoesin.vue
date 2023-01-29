<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  name: "indices",
  props: ["id"],
  data() {
    return {
      superuser: "",
      value: 1,
      indice: {
        indice: 0,
        titulo: "",
        descricao: "",
        link: "",
        curso: "",
      },
    };
  },
  methods: {
    async getAllacoes(id) {
      await this.$get(
        `especificacoesin/indice/${id}/`,
        this.especificacoesin.indices
      );
    },
    async removerDolar() {
      await axios.delete(`http://localhost:8000/indice/${this.id}/`);
      alert("indice deletado com sucesso!"), this.$router.push("/");
    },
    async postEspecificacoes() {
      this.especificacoesin.indices = this.$route.params.id;
      await this.$post("indice/", this.especificacoesin);
      await this.getAllEspecificacoesin();
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/indice/${this.id}/`);
    this.indice = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["indices", "username", "is_superuser"]),
  },
};
</script>

<template>
  <div class="all">
    <div class="menu1">
      <div class="infos">
        <div class="camps">
          <div class="titulo">
            <h1>Titulo:</h1>
            <span> {{ indice.titulo }} </span>
          </div>
          <div class="descricao">
            <h1>Descricao:</h1>
            <span>{{ indice.descricao }}</span>
          </div>
          <div class="link">
            <h1>Link:</h1>
            <span> {{ indice.link }}</span>
          </div>
          <div class="curso">
            <h1>Curso:</h1>
            <span> {{ indice.curso }}</span>
          </div>
          <div class="admin">
            <div class="remove" v-bind="superuser">
              <button v-if="is_superuser == true" @click="removerDolar">
                <i class="fa-solid fa-trash"></i>Remover Indice
              </button>
            </div>
            <div class="alterar" v-bind="superuser">
              <RouterLink :to="`/updatedolar/${this.id}`">
                <button v-if="is_superuser == true" @click="alterarCao">
                  <i class="fa-regular fa-pen-to-square"></i>
                  Alterar Indice
                </button></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  font-family: "League Spartan";
}
.camps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.remove button {
  margin-bottom: 10px;
  border-radius: 8px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  color: #fff;
  background-color: red;
}
.admin {
  align-items: center;
  justify-content: center;
  display: flex;
}
.alterar button {
  margin-bottom: 10px;
  border-radius: 8px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  color: #fff;
  background-color: rgb(78, 92, 0);
}
a {
  color: #ffffff !important;
  font-size: 18pt;
}
i {
  font-size: 18pt;
  margin-right: 10px;
}

span {
  margin-left: 10px;
  margin-top: 14px;
}

.menu1 {
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border-radius: 30px;
  background-color: #111111;
  color: #f7f7f7;
  text-align: center;
}

.all {
  background: #333333;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  height: 500px;
  background-color: transparent;
  backdrop-filter: blur(50px);
  border-radius: 30px;
}
.infos h1 {
  font-size: 26pt;
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
  height: 60px;
  font-weight: 600;
  color: #000000;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.infos span {
  color: #eef;
}

.remove {
  margin-right: 1rem;
}

.titulo {
  margin-bottom: 1rem;
}

.descricao {
  margin-bottom: 1rem;
}

.link {
  margin-bottom: 1rem;
}

.curso {
  margin-bottom: 1rem;
}
</style>
