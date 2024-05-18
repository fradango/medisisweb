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
    <WhatsappButton />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Nosotros from "./components/Nosotros.vue";
import Valores from "./components/Valores.vue";
import Servicios from "./components/Servicios.vue";
import Clientes from "./components/Clientes.vue";
import Footer from "./components/Footer.vue";
import WhatsappButton from "./components/WhatsappButton.vue";

export default {
  components: {
    Banner,
    Nosotros,
    Valores,
    Servicios,
    Clientes,
    Footer,
    WhatsappButton,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Estilo para la barra de desplazamiento */
::-webkit-scrollbar {
  width: 10px; /* Ancho de la barra de desplazamiento */
}

/* Estilo para el track de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color de fondo del track */
  border-radius: 10px; /* Bordes redondeados */
}

/* Estilo para el thumb de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background: #888; /* Color del thumb */
  border-radius: 8px; /* Bordes redondeados */
}

/* Estilo para el thumb al pasar el mouse */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color del thumb al pasar el mouse */
}

/* Estilo para la barra de desplazamiento de elementos específicos */
.custom-scrollbar {
  overflow-y: scroll; /* Habilita la barra de desplazamiento vertical */
  scrollbar-width: thin; /* Estilo para Firefox */
  scrollbar-color: #888 #f1f1f1; /* Colores para Firefox */
}

/* Estilo para la barra de desplazamiento en Firefox */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
