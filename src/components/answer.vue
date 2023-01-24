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
  <div class="title">
    <h1>{{ empreendimento.topico }}</h1>
  </div>
  <div class="desc">
    <span> Cliente: {{ empreendimento.pergunta }}</span>
  </div>
  <div class="resp">
    <span> Shallusa: {{ empreendimento.texto }}</span>
  </div>
</template>

<style scoped>
.desc {
  background-color: #111111;
}

.resp {
  background-color: #b6b6b6;
}
</style>
