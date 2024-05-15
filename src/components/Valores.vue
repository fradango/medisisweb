<template>
  <section class="nosotros-valores">
    <div class="valores">
      <div class="valores-title">Nuestros valores</div>
      <div class="valores-carousel">
        <swiper
          class="swiper"
          :modules="modules"
          :slidesPerView="3"
          :spaceBetween="40"
          loop="true"
          :navigation="false"
          :pagination="{ clickable: true }"
          mousewheel
          grab-cursor="true"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="(valor, index) in valores"
            :key="index"
          >
            <article class="valores-card">
              <figure class="valores-card-img">
                <font-awesome-icon
                  icon="fa-regular fa-lightbulb"
                  class="size-icon"
                  style="color: #8be38f"
                />
              </figure>
              <div class="valores-card-content">
                <h3 class="valores-card-title">{{ valor.title }}</h3>
                <p class="valores-card-description">{{ valor.description }}</p>
              </div>
            </article>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
export default {
  name: "Valores",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = ref([Navigation, Pagination]);
    return {
      modules,
    };
  },
  data() {
    return {
      valores: [
        {
          title: "Innovación Constante",
          description:
            "Impulsamos soluciones creativas y vanguardistas para mantener a nuestros clientes a la delantera tecnológica",
        },
        {
          title: "Integridad Total",
          description:
            "Operamos con transparencia y honestidad, construyendo relaciones de confianza con cada cliente",
        },
        {
          title: "Colaboración Efectiva",
          description:
            "Fomentamos un trabajo en equipo sinérgico, tanto internamente como con nuestros socios y clientes",
        },
        {
          title: "Excelencia Operativa",
          description:
            "Nos esforzamos por la perfección en cada proyecto, garantizando calidad y eficiencia máximas",
        },
        {
          title: "Adaptabilidad",
          description:
            "Nos adaptamos rápidamente a las cambiantes demandas del mercado para ofrecer soluciones flexibles y eficaces",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nosotros-valores {
  display: flex;
  flex-direction: column;
  height: 600px;
  background-color: #f0fff2;
}

.valores {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.valores-title {
  height: 20%;
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  color: #011832;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.valores-carousel {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  height: 90%;
  width: 92%;
}

.valores-card {
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  border-radius: 8px;
  font-family: "IBM Plex Sans", sans-serif;
}

.valores-card-img {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.size-icon {
  font-size: 80px;
}

.valores-card-content {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.valores-card-title {
  height: 30%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin: 0 20px 0 20px;
}

.valores-card-description {
  height: 70%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 20px;
  font-size: 18px;
}

@media screen and (min-width: 767px) {
}

@media screen and (min-width: 1280px) {
}
</style>
