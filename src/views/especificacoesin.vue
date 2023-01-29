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
        this.especificacoes.indices
      );
    },
    async removerDolar() {
      await axios.delete(`http://localhost:8000/indice/${this.id}/`);
      alert("indice deletado com sucesso!"), this.$router.push("/");
    },
    async postEspecificacoes() {
      this.especificacoes.indices = this.$route.params.id;
      await this.$post("indice/", this.especificacoes);
      await this.getAllEspecificacoes();
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
          <div class="nome">
            <h1>Titulo:</h1>
            <span> {{ indice.titulo }} </span>
          </div>
          <div class="peso">
            <h1>Descricao:</h1>
            <span>{{ indice.descricao }}</span>
          </div>
          <div class="altura">
            <h1>Link:</h1>
            <span> {{ indice.link }}</span>
          </div>
          <div class="Descrição">
            <h1>Curso:</h1>
            <span> {{ indice.curso }}</span>
          </div>
          <div class="admin">
            <div class="remove" v-bind="superuser">
              <button v-if="is_superuser == true" @click="removerDolar">
                <i class="fa-solid fa-trash"></i>indice
              </button>
            </div>
            <div class="alterarCachorro" v-bind="superuser">
              <RouterLink :to="`/updateindice/${this.id}`">
                <button v-if="is_superuser == true" @click="alterarCao">
                  Alterar indice
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
.alterarCachorro button {
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
.button {
  margin-left: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 300px;
  height: 60px;
  background-color: #128c7e;
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  margin-left: 10px;
  margin-top: 14px;
}
.Descrição,
.Responsável,
.Telefone {
  display: flex;
}
#main-banner {
  border-radius: 30px 30px 0 0;
  width: 1000px;
  height: 330px;
  overflow: hidden;
  background: linear-gradient(rgb(0, 102, 255), rgb(0, 214, 221));
}
#main-banner img {
  margin-top: 10px;
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}
.menu1 {
  border-radius: 30px;
  box-shadow: 7px 7px 13px 0px rgba(226, 226, 226, 0.22);
  background-color: #161e35;
  width: 1000px;
  color: #f7f7f7;
  text-align: center;
}
.menu1 img {
  border-radius: 25px 25px 0 0;
  margin-right: 15px;
  height: 300px;
  width: 800px;
  margin-bottom: 3rem;
}
.camps {
  margin-top: 10px;
  margin-left: 10px;
}
.nome {
  display: flex;
}
.peso {
  display: flex;
}
.altura {
  display: flex;
}
.avatar {
  align-items: center;
  justify-content: center;
  display: flex;
}
.avatar img {
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}
.all {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 50%;
  background-color: transparent;
  backdrop-filter: blur(50px);
  padding: 30px 35px;
  border-radius: 30px;
  box-shadow: 0px 5px 30px rgb(2, 48, 85);
}
.infos h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.infos span {
  color: #eef;
}
</style>
