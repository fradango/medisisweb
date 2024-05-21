<template>
  <section class="banner">
    <nav :class="['navbar', { 'navbar-open': isMenuOpen }]">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="LogoMedisis" />
        <div class="brand-name">MedisisTech</div>
      </div>
      <div class="hamburger-menu">
        <button class="hamburger-button" @click="toggleMenu">
          <font-awesome-icon
            :icon="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"
            class="size-icon"
            style="color: #8be38f"
          />
        </button>
      </div>
      <ul class="menu-box">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#clientes">Clientes</a></li>
      </ul>
    </nav>
    <div class="banner-presentation">
      <div class="banner-title-1">
        Transformamos el futuro de tu empresa
        <br />
        <span class="banner-title-2"
          >integrando tecnología, innovación y talento</span
        >
      </div>
      <div class="banner-editor">
        <div class="code-editor">
          <div class="editor-header">MedisisTech</div>
          <div class="editor-body">
            <div class="typing-text">
              Potencia tu empresa con nuestros servicios de
              <span class="dynamic-text">{{ dynamicText }}</span
              ><span class="cursor">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú lateral -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="side-menu">
        <ul>
          <li><a href="#nosotros" @click="toggleMenu">Nosotros</a></li>
          <li><a href="#servicios" @click="toggleMenu">Servicios</a></li>
          <li><a href="#clientes" @click="toggleMenu">Clientes</a></li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      dynamicText: "",
      phrases: ["Outsourcing TI", "Consultoría TI", "Software Factory"],
      currentPhrase: 0,
      isMenuOpen: false,
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  height: 700px;
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

.navbar-open {
  background-color: #011832; /* Mismo color que el sidebar */
  position: fixed;
  z-index: 1000;
}

.logo-box {
  width: 60%;
  height: 100%;
  display: flex;
  margin: 0 0 0 0;
}

.brand-name {
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.hamburger-menu {
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px 0 0;
}

.hamburger-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-box {
  display: none;
}

.banner-presentation {
  display: flex;
  flex-direction: column;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
}

.banner-title-1 {
  height: 30%;
  margin: 20px 15px 0 15px;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.banner-title-2 {
  color: #8be38f;
}

.banner-editor {
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-editor {
  height: 70%;
  width: 80%;
  background-color: #282c34;
  color: #abb2bf;
  border-radius: 10px;
  font-family: "Fira Code", "Consolas", monospace;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.editor-header {
  background-color: #1e2125;
  color: #abb2bf;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
}

.editor-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  margin: 0 10px 0 10px;
}

.typing-text {
  color: rgb(192, 192, 131);
  font-size: 20px;
  text-align: center;
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

/* Estilos para el menú lateral */
.side-menu {
  position: fixed;
  top: 100px;
  width: 100%;
  height: 200px;
  background-color: #011832;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter, .slide-leave-to /* .slide-leave-active en versiones anteriores de Vue */ {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(-100px);
  opacity: 1;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.side-menu li {
  margin: 20px 0;
}

.side-menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: center;
  display: block;
  width: 100%;
}

@media screen and (min-width: 600px) {
  .banner-title-1 {
    font-size: 35px;
    margin: 50px 50px 0 50px;
  }

  .code-editor {
    height: 50%;
  }

  .editor-body {
    margin: 0 50px 0 50px;
  }

  .typing-text {
    font-size: 22px;
  }
}

@media screen and (min-width: 900px) {
  .logo-box {
    width: 50%;
    margin: 0 0 0 25px;
  }

  .hamburger-menu {
    display: none;
  }

  .menu-box {
    width: 50%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 50px 0 0;
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

  .banner-title-1 {
    font-size: 40px;
    height: 20%;
    margin: 50px 50px 0 50px;
  }

  .banner-editor {
    height: 80%;
  }

  .code-editor {
    height: 50%;
  }

  .editor-body {
    margin: 0 50px 0 50px;
  }

  .typing-text {
    font-size: 25px;
  }
}

@media screen and (min-width: 1200px) {
  .logo-box {
    width: 50%;
    margin: 0 0 0 25px;
  }

  .hamburger-menu {
    display: none;
  }

  .menu-box {
    width: 50%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 50px 0 0;
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

  .banner-title-1 {
    font-size: 50px;
    height: 20%;
    margin: 50px 50px 0 50px;
  }

  .banner-editor {
    height: 80%;
  }

  .code-editor {
    height: 50%;
  }

  .editor-body {
    margin: 0 55px 0 55px;
  }

  .typing-text {
    font-size: 25px;
  }
}
</style>
