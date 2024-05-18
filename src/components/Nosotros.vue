<template>
  <section id="nosotros" class="nosotros">
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
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  background-color: white;
}

.mision {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mision-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
}

.mision-title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #011832;
  font-family: "IBM Plex Sans", sans-serif;
  margin: 30px 0 15px 0;
}

.mision-content {
  font-size: 18px;
  text-align: center;
  margin: 0 30px 0 30px;
  color: #011832;
  font-family: "IBM Plex Sans", sans-serif;
}

.mision-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
}

.mision-img img {
  border-radius: 15px;
  height: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.mision-img img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 600px) {
  .mision-box {
    height: 35%;
  }

  .mision-img {
    height: 65%;
  }

  .mision-title {
    font-size: 35px;
  }

  .mision-content {
    font-size: 20px;
    margin: 0 45px 0 45px;
  }
}

@media screen and (min-width: 900px) {
  .nosotros {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 360px;
  }

  .mision {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mision-box {
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    margin-left: 50px;
  }

  .mision-title {
    font-size: 35px;
    text-align: left;
    margin: 0 0 14px 0;
  }

  .mision-content {
    font-size: 20px;
    text-align: left;
    margin: 0 0 0 0;
  }

  .mision-img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 0 50px 0 20px;
  }

  .mision-img img {
    height: 70%;
  }
}

@media screen and (min-width: 1200px) {
  .nosotros {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 360px;
  }

  .mision {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mision-box {
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    margin-left: 50px;
  }

  .mision-title {
    font-size: 35px;
    text-align: left;
    margin: 0 0 14px 0;
  }

  .mision-content {
    font-size: 20px;
    text-align: left;
    margin: 0 0 0 0;
  }

  .mision-img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 0 50px 0 0;
  }
}
</style>
