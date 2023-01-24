<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../assets/shallusa.png" alt="" />
      </a>
    </div>
    <div class="list">
      <ul>
        <li>Home</li>
        <li>Dúvidas frequentes</li>
        <li>Sobre nós</li>
        <button>ao-vivo</button>
      </ul>
    </div>
  </header>
</template>

<style>
header {
  font-family: "League Spartan", sans-serif;
  align-items: center;
  display: flex;
  height: 75px;
  background: #000000;
}

header ul {
  display: flex;
}

.logo img {
  margin-left: 5rem;
  cursor: pointer;
  display: flex;
  width: 250px;
}

li {
  color: #87c8e0;
  cursor: pointer;
  font-size: 16pt;
  list-style: none;
  margin-left: 20px;
}

li:hover {
  text-decoration: underline;
}
button {
  cursor: pointer;
  margin-left: 15px;
  width: 100px;
  color: #87c8e0;
  background-color: #000000;
  border: solid 1px #87c8e0;
  border-radius: 10px;
}
button:hover {
  color: #000000;
  background-color: #87c8e0;
  transition: 1s;
  border-radius: 10px;
}
</style>
