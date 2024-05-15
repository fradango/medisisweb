<template>
  <section class="nosotros">
    <div class="mision">
      <div class="mision-box">
        <div class="mision-title">Nuestra misión</div>
        <div class="mision-content">
          Medisis Outsourcing es una empresa con la misión de ayudar a las
          empresas con su transformación digital mediante nuestros servicios
          especializados en TI
        </div>
      </div>
      <div class="mision-img">
        <img src="../assets/mision.jpg" alt="mision" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Nosotros",
};
</script>

<style scoped>
.nosotros {
  display: flex;
  height: 360px;
  background-color: white;
}

.mision {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}

.mision-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 50px;
}

.mision-title {
  font-size: 35px;
  font-weight: bold;
  color: #011832;
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0 0 14px 0;
}

.mision-content {
  font-size: 20px;
  color: #011832;
  font-family: "IBM Plex Sans", sans-serif;
}

.mision-img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-right: 50px;
}

.mision-img img {
  border-radius: 15px;
  height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.mision-img img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 767px) {
}

@media screen and (min-width: 1280px) {
}
</style>
