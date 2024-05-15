<template>
  <section class="servicios">
    <div class="servicios-title">Nuestros servicios</div>
    <section class="servicios-box">
      <div class="servicios-carousel">
        <article class="servicios-card">
          <figure class="servicios-card-img">
            <img src="../assets/hunting.jpg" alt="hunting" />
          </figure>
          <div class="servicios-card-content">
            <h3 class="servicios-card-title">Hunting</h3>
            <p class="servicios-card-description">
              Reclutamos al mejor talento de TI que necesitas
            </p>
          </div>
        </article>
        <article class="servicios-card">
          <figure class="servicios-card-img">
            <img src="../assets/consulting.jpg" alt="consulting" />
          </figure>
          <div class="servicios-card-content">
            <h3 class="servicios-card-title">Consulting</h3>
            <p class="servicios-card-description">
              Reclutamos al mejor talento de TI que necesitas
            </p>
          </div>
        </article>
        <article class="servicios-card">
          <figure class="servicios-card-img">
            <img src="../assets/software_factory.jpg" alt="software_factory" />
          </figure>
          <div class="servicios-card-content">
            <h3 class="servicios-card-title">Software Factory</h3>
            <p class="servicios-card-description">
              Desarrollamos software a tu medida
            </p>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Servicios",
};
</script>

<style scoped>
.servicios {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 700px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #011832 0%,
    #04675a 45%,
    #003d35 100%
  );
}

.servicios-title {
  font-size: 35px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
}

.servicios-box {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
}

.servicios-carousel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  gap: 50px;
}

.servicios-card {
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  border: none;
  border-radius: 8px;
  background-color: white;
}

.servicios-card-img {
  width: 100%;
  height: 60%;
  margin: 0;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.servicios-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.servicios-card-content {
  display: flex;
  flex-direction: column;
}

.servicios-card-title {
  font-size: 30px;
  color: #011832;
  text-align: center;
  padding: 0;
  margin: 18px;
  font-family: "IBM Plex Sans", sans-serif;
}

.servicios-card-description {
  font-size: 20px;
  text-align: center;
  margin: 12px;
  font-family: "IBM Plex Sans", sans-serif;
}
</style>
