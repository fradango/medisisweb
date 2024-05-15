<template>
  <section class="banner">
    <nav class="navbar">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="LogoMedisis" />
        <div class="brand-name">Medisis TI</div>
      </div>
      <ul class="menu-box">
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Clientes</a></li>
      </ul>
    </nav>
    <div class="banner-presentation">
      <div class="banner-title-1">Transformamos el futuro de tu empresa</div>
      <div class="banner-title-2">
        Conectando Innovación, Impulsando Negocios
      </div>
      <div class="banner-editor">
        <div class="code-editor">
          <div class="editor-header">Medisis</div>
          <div class="typing-text">
            Potencia tu empresa con los mejores
            <span class="dynamic-text">{{ dynamicText }}</span
            ><span class="cursor">|</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      dynamicText: "",
      phrases: [
        "desarrolladores frontend",
        "desarrolladores backend",
        "administradores de base de datos",
      ],
      currentPhrase: 0,
    };
  },
  mounted() {
    this.nextPhrase();
  },
  methods: {
    typePhrase(phrase) {
      let i = 0;
      const typing = setInterval(() => {
        this.dynamicText += phrase[i];
        i++;
        if (i === phrase.length) {
          clearInterval(typing);
          setTimeout(this.clearPhrase, 2000);
        }
      }, 100);
    },
    clearPhrase() {
      let i = this.dynamicText.length;
      const clearing = setInterval(() => {
        this.dynamicText = this.dynamicText.substring(
          0,
          this.dynamicText.length - 1
        );
        i--;
        if (i === 0) {
          clearInterval(clearing);
          this.nextPhrase();
        }
      }, 50);
    },
    nextPhrase() {
      this.typePhrase(this.phrases[this.currentPhrase]);
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  height: 720px;
  background-image: linear-gradient(
    to right,
    #011832 0%,
    #04675a 45%,
    #003d35 100%
  );
}

.navbar {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  height: 100px;
}

.logo-box {
  width: 50%;
  height: 100%;
  display: flex;
}

.brand-name {
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.menu-box {
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu-box li {
  margin-left: 20px;
}

.menu-box li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: "IBM Plex Sans", sans-serif;
}

.banner-presentation {
  display: flex;
  flex-direction: column;
  height: 620px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
}

.banner-title-1 {
  height: 10%;
  margin-top: 8%;
  color: white;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.banner-title-2 {
  height: 10%;
  color: #8be38f;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.banner-editor {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-editor {
  height: 50%;
  width: 60%;
  background-color: #282c34; /* Fondo oscuro típico de los editores de código */
  color: #abb2bf; /* Color claro para el texto general */
  border-radius: 10px; /* Bordes redondeados para la caja del editor */
  font-family: "Fira Code", "Consolas", monospace; /* Fuente monoespaciada */
  /*box-shadow: 0 8px 20px rgba(4, 103, 90, 0.7), 0 16px 30px rgba(0, 61, 53, 0.7);*/
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.editor-header {
  background-color: #1e2125; /* Un tono ligeramente más oscuro para la barra superior */
  color: #abb2bf;
  height: 10%;
  border-top-left-radius: 10px; /* Redondear solo las esquinas superiores */
  border-top-right-radius: 10px;
  padding: 10px 20px; /* Espaciado interno de la barra */
}

.typing-text {
  height: 95%;
  color: rgb(192, 192, 131);
  font-size: 25px;
  text-align: center;
  margin: 50px;
}

.dynamic-text {
  color: fuchsia;
}

.cursor {
  display: inline-block;
  background-color: fuchsia;
  color: fuchsia;
  margin-left: 5px;
  width: 8px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
