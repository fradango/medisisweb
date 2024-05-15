<template>
  <div>
    <main>
      <Banner />
      <Nosotros />
      <Valores />
      <Servicios />
      <Clientes />
    </main>
    <Footer />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Nosotros from "./components/Nosotros.vue";
import Valores from "./components/Valores.vue";
import Servicios from "./components/Servicios.vue";
import Clientes from "./components/Clientes.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Banner,
    Nosotros,
    Valores,
    Servicios,
    Clientes,
    Footer,
  },
};
</script>

<style></style>
