<template>
  <div class="all">
    <header>
      <div class="logo">
        <h1>Sha</h1>
        <h1 class="red">l</h1>
        <h1 class="green">l</h1>
        <h1>usa</h1>
      </div>
      <div class="list">
        <ul>
          <li>Home</li>
          <li>Dúvidas frequentes</li>
          <li>Sobre nós</li>
        </ul>
      </div>
    </header>
    <div class="content">
      <div class="carrossel">
        <img
          src="./assets/WhatsApp Image 2023-01-23 at 12.55.30.jpeg"
          alt="banner" />
      </div>
      <div class="cards">
        <div class="card-video">
          <div class="title">
            <h1>Publicação 1:</h1>
          </div>
          <div class="desc">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus unde molestias in et, eum nihil nesciunt architecto
              harum atque aperiam repellendus corrupti, tempore voluptatem
              doloribus modi. Quas vel quisquam ex!</span
            >
          </div>
          <div class="video">
            <iframe src="https://www.youtube.com/embed/_py8z4GJRl8"> </iframe>
          </div>
          <div class="btn">
            <button>Saiba Mais</button>
          </div>
        </div>
        <div class="card-video">
          <div class="title">
            <h1>Publicação 2:</h1>
          </div>
          <div class="desc">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus unde molestias in et, eum nihil nesciunt architecto
              harum atque aperiam repellendus corrupti, tempore voluptatem
              doloribus modi. Quas vel quisquam ex!</span
            >
          </div>
          <div class="video">
            <iframe src="https://www.youtube.com/embed/O69fRhzbHn8"> </iframe>
          </div>
          <div class="btn">
            <button>Saiba Mais</button>
          </div>
        </div>
        <div class="card-video">
          <div class="title">
            <h1>Publicação 3:</h1>
          </div>
          <div class="desc">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus unde molestias in et, eum nihil nesciunt architecto
              harum atque aperiam repellendus corrupti, tempore voluptatem
              doloribus modi. Quas vel quisquam ex!</span
            >
          </div>
          <div class="video">
            <iframe src="https://www.youtube.com/embed/DoWzd5x-0vg"> </iframe>
          </div>
          <div class="btn">
            <button>Saiba Mais</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <h1>Entre em contato conoso !</h1>
      <div class="email">
        <i class="fa-solid fa-square-envelope"></i>
        <span>oitudobem@gmail.com</span>
      </div>
      <div class="whats">
        <i class="fa-brands fa-square-whatsapp"></i>
        <span> 47 1234-5678</span>
      </div>
      <div class="insta">
        <i class="fa-brands fa-square-instagram"></i>
        <span>Instagram</span>
      </div>
      <div class="youtube">
        <i class="fa-brands fa-square-youtube"></i>
        <span>Youtube</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.carrossel img {
  margin-top: 2rem;
  width: 1000px;
  margin-bottom: 2rem;
}
.cards {
  display: flex;
  margin-bottom: 5rem;
}

.all {
  width: 100%;
  height: 200vh;
  background-color: #131313;
}

.content {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  color: #eef;
  font-size: 20pt;
  background-color: #ff0000;
  height: 20%;
}

header {
  font-family: "League Spartan", sans-serif;
  align-items: center;
  display: flex;
  height: 75px;
  background: #302f2f;
}

header ul {
  margin-left: 45rem;
  display: flex;
}

.logo {
  display: flex;
  color: #eef;
  margin-left: 7rem;
  font-size: 16pt;
}

.list {
  float: right;
}

.red {
  text-shadow: -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff,
    1px 0px 0px #fff;

  color: red;
}

.green {
  text-shadow: -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff,
    1px 0px 0px #fff;

  color: green;
}

li {
  color: #ff0000;
  cursor: pointer;
  font-size: 16pt;
  list-style: none;
  margin-left: 20px;
}

.desc {
  max-width: 500px;
  margin-bottom: 2rem;
}

.desc span {
  color: #eef;
  font-size: 16pt;
}
.title h1 {
  color: red;
  margin-bottom: 2rem;
}

main {
  padding: 7rem;
}

.card-video {
  font-family: "League Spartan", sans-serif;
  margin-right: 50px;
  border-radius: 1rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  background-color: #302f2f;
}

iframe {
  height: 300px;
  width: 380px;
}
.btn button {
  color: #eef;
  background-color: #800000;
  font-size: 16pt;
  border-radius: 1rem;
  margin-top: 10px;
  height: 50px;
  width: 250px;
}
</style>
