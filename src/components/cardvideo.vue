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
    tel_responsavel: "",
  },
  methods: {
    async getAllEmpreendimentos(id) {
      await this.get(`/publicacao/${id}/`, this.empreendimentos);
      console.log(this.empreendimentos);
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/publicacao/${this.id}/`);
    this.Empreendimento = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["empreendimentos", "username", "foto"]),
  },
};
</script>
<template>
  <div class="card-video">
    <div class="title">
      <h1>{{ empreendimentos.titulo }}</h1>
    </div>
    <div class="desc">
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde
        molestias in et, eum nihil nesciunt architecto harum atque aperiam
        repellendus corrupti, tempore voluptatem doloribus modi. Quas vel
        quisquam ex!</span
      >
    </div>
    <div class="video">
      <iframe src="https://www.youtube.com/embed/_py8z4GJRl8"> </iframe>
    </div>
    <div class="btn">
      <button>Saiba Mais</button>
    </div>
  </div>
</template>
