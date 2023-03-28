<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
export default {
  data() {
    return {
      isImageDropdownOpen: false,
      isDropdownOpen: false,
    };
  },
  name: "acoes",
  props: ["id", "acao"],
  user: {
    username: "",
  },
  Acoes: {
    Acao: 0,
  },
  methods: {
    async getAllacoes(id) {
      await this.get(`/acoes/${id}/`, this.acoes);
      console.log(this.acoes);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdown;
    },
    toggleImageDropdown() {
      this.isImageDropdownOpen = !this.isImageDropdownOpen;
    },
  },
  async created() {
    const res = await axios.get(
      `https://gustavorteuber.pythonanywhere.com/acoes/${this.id}/`
    );
    this.Acao = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["acoes", "username", "foto", "is_superuser"]),
  },
};
</script>
<template>
  <div class="p-1">
    <div
      class="text-xl transform transition duration-500 ease-in-out hover:translate-x-2 cursor-pointer"
      @click="isDropdownOpen = !isDropdownOpen"
    >
      <div class="flex items-center">
        <img
          class="mr-2"
          :src="
            acao.foto.file.replace(
              'http://localhost:8000',
              'https://gustavorteuber.pythonanywhere.com'
            )
          "
        />
        <!-- <button
            type="button"
            class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 icon absolute top-0 right-0"
          > -->
        <!-- </button> -->
      </div>
    </div>
    <section
      v-if="isDropdownOpen"
      class="overflow-hidden text-white transform transition duration-500 ease-in-out"
    >
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex flex-wrap">
            <div class="object-fill">
              <div class="relative">
                <img
                  :src="
                    acao.foto2.file.replace(
                      'http://localhost:8000',
                      'https://gustavorteuber.pythonanywhere.com'
                    )
                  "
                />
                <button
                  type="button"
                  class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 icon absolute top-0 right-0"
                  @click="toggleImageDropdown"
                >
                  <i class="fas fa-cog"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="isNextImageOpen"
      class="fixed inset-0 z-50 overflow-auto flex items-center justify-center"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div class="bg-white p-8 rounded-lg">
        <button
          type="button"
          class="absolute top-0 right-0 z-10 text-black font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mt-2 lg:text-base lg:px-5 lg:py-2.5"
          @click="closeNextImage"
        >
          <i class="fas fa-times"></i>
        </button>
        <img
          :src="
            acao.foto3.file.replace(
              'http://localhost:8000',
              'https://gustavorteuber.pythonanywhere.com'
            )
          "
          class="max-h-full max-w-full"
        />
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
  border: solid 2px #444444;
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

.sub-title span {
  padding: 1rem;
}

.title h1 {
  margin-top: 1rem;
  color: #555555;
  margin-bottom: 1rem;
}
</style>
