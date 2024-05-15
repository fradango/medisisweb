<template>
  <section class="clientes">
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
  height: 300px;
  width: 100%;
  background-color: white;
}

.clientes-title {
  color: #011832;
  font-size: 35px;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
}

.companies-logo {
  display: flex;
  justify-content: center;
}

.companies-logo-center {
  display: flex;
  justify-content: space-around;
  gap: 200px;
}

.companies-logo-box {
  display: flex;
  height: 80px;
}
</style>
