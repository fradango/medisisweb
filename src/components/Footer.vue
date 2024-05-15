<template>
  <footer class="footer">
    <div class="logo-box">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="footer-copyright">Copyright 2024 © Medisis</div>
    <div class="footer-contactenos">Telefono: 945659062</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #011832;
}

.logo-box {
  display: flex;
  height: 100px;
  margin-left: 200px;
}

.footer-copyright {
  color: white;
}

.footer-contactenos {
  color: white;
  margin-right: 200px;
}
</style>
