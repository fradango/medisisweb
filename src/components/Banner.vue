<template>
  <section class="banner">
    <nav class="navbar">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="LogoMedisis" />
        <div class="brand-name">Medisis TI</div>
      </div>
      <button class="hamburger-menu" @click="toggleMenu">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="size-icon"
          style="color: #8be38f"
        />
      </button>
      <ul class="menu-box">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#clientes">Clientes</a></li>
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
          <div class="editor-body">
            <div class="typing-text">
              Potencia tu empresa con los mejores
              <span class="dynamic-text">{{ dynamicText }}</span
              ><span class="cursor">|</span>
            </div>
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
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px 0 0;
}

.menu-box {
  display: none;
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
  height: 15%;
  margin: 20px 15px 0 15px;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
}

.banner-title-2 {
  height: 15%;
  color: #8be38f;
  font-size: 30px;
  margin: 0 15px 0 15px;
  text-align: center;
  font-weight: bold;
  font-family: "IBM Plex Sans", sans-serif;
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

@media screen and (min-width: 600px) {
  .banner-title-1 {
    font-size: 35px;
    height: 15%;
    margin: 50px 50px 0 50px;
  }

  .banner-title-2 {
    font-size: 35px;
    height: 15%;
    margin: 0 50px 0 50px;
  }

  .banner-editor {
    height: 70%;
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
    height: 10%;
    margin: 50px 50px 0 50px;
  }

  .banner-title-2 {
    font-size: 40px;
    height: 10%;
    margin: 0 50px 0 50px;
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
    height: 10%;
    margin: 50px 50px 0 50px;
  }

  .banner-title-2 {
    font-size: 50px;
    height: 10%;
    margin: 0 50px 0 50px;
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
</style>
