<template>
  <section id="clientes" class="clientes">
    <div>
      <p class="clientes-title">
        Clientes que potenciaron su capacidad digital
      </p>
    </div>
    <div class="companies-logo">
      <div class="companies-logo-center">
        <div class="companies-logo-box">
          <img src="../assets/curat.png" alt="curat" />
        </div>
        <div class="companies-logo-box">
          <img src="../assets/chenet.png" alt="chenet" />
        </div>
        <div class="companies-logo-box">
          <img src="../assets/SYM.png" alt="SYM" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clientes",
};
</script>

<style scoped>
.clientes {
  height: 500px;
  width: 100%;
  background-color: white;
}

.clientes-title {
  color: #011832;
  font-size: 30px;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: center;
  margin: 40px 15px 50px 15px;
}

.companies-logo {
  display: flex;
  justify-content: center;
}

.companies-logo-center {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
}

.companies-logo-box {
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.companies-logo-box img {
  max-height: 100%;
}

@media screen and (min-width: 600px) {
  .clientes-title {
    margin: 40px 50px 50px 50px;
  }
}

@media screen and (min-width: 900px) {
  .clientes {
    height: 250px;
  }

  .clientes-title {
    font-size: 35px;
    margin: 40px 0 50px 0;
  }

  .companies-logo-center {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }

  .companies-logo-box {
    height: 70px;
  }
}

@media screen and (min-width: 1200px) {
  .clientes {
    height: 250px;
  }

  .clientes-title {
    font-size: 35px;
    margin: 40px 0 50px 0;
  }

  .companies-logo-center {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  .companies-logo-box {
    height: 80px;
  }
}
</style>
