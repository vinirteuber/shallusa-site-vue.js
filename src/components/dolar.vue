<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  name: "empreendimentos",
  props: ["id", "empreendimento"],
  data() {
    return {
      isImageDropdownOpen: false,
      isDropdownOpen: false,
    };
  },
  user: {
    username: "",
  },
  empreendimentos: {
    empreendimento: 0,
  },
  methods: {
    async getAllEmpreendimentos(id) {
      await this.get(`/dolar/${id}/`, this.empreendimentos);
      console.log(this.empreendimentos);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdown;
    },
    toggleImageDropdown() {
      this.isImageDropdownOpen = !this.isImageDropdownOpen;
    },
    async created() {
      const res = await axios.get(
        `https://gustavorteuber.pythonanywhere.com/dolar/${this.id}/`
      );
      this.empreendimento = res.data;
      const des = await axios.get(
        `https://gustavorteuber.pythonanywhere.com/usuario/${this.id}/`
      );
      this.user = des.data;
      console.log(this.user);
    },
    closeNextImage() {
      this.isDropdownOpen = false;
    },
  },
  computed: {
    ...mapState(useAuthStore, [
      "empreendimentos",
      "username",
      "foto",
      "is_superuser",
    ]),
  },
  components: { RouterLink },
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
            empreendimento.foto.file.replace(
              'http://localhost:8000',
              'https://gustavorteuber.pythonanywhere.com'
            )
          "
        />
        <!-- <button
            type="button"
            class="text-gray-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 icon absolute top-0 right-0"
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
                <a :href="empreendimento.curso" target="_blank">
                  <img
                    :src="
                      empreendimento.foto2.file.replace(
                        'http://localhost:8000',
                        'https://gustavorteuber.pythonanywhere.com'
                      )
                    "
                /></a>
                <button
                  type="button"
                  class="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500 icon absolute bottom-0 right-0"
                  @click="toggleImageDropdown()"
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
      v-if="isImageDropdownOpen"
      class="fixed inset-0 z-50 overflow-auto flex items-center justify-center"
      style="
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      "
    >
      <div class="absolute top-0 left-0 m-4 z-50">
        <button
          type="button"
          @click="toggleImageDropdown()"
          class="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex flex-wrap">
            <div class="object-fill">
              <div class="relative">
                <div class="flex justify-center">
                  <div class="max-w-full">
                    <div class="image-container">
                      <img
                        :src="
                          empreendimento.foto3.file.replace(
                            'http://localhost:8000',
                            'https://gustavorteuber.pythonanywhere.com'
                          )
                        "
                        class="max-h-screen max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

.empreendimento {
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
