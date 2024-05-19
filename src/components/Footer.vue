<template>
  <footer class="footer">
    <div class="footer-information">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="footer-copyright">
        © 2024 Medisis SRL. Todos los derechos reservados
      </div>
      <div class="footer-contactenos">
        <a :href="whatsappLink" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-square-whatsapp"
            class="size-icon"
            style="color: #8be38f"
          />
        </a>
        <a :href="linkedinLink" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            class="size-icon"
            style="color: #8be38f"
          />
        </a>
        <a :href="facebookLink" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-square-facebook"
            class="size-icon"
            style="color: #8be38f"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      whatsappLink: "https://wa.me/945659062",
      linkedinLink: "https://www.linkedin.com/in/tuusuario",
      facebookLink: "https://www.facebook.com/tupagina",
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  height: 220px;
  background-image: linear-gradient(
    to right,
    #011832 0%,
    #04675a 45%,
    #003d35 100%
  );
}

.footer-information {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
}

.logo-box {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.logo-box img {
  max-height: 100%;
}

.footer-copyright {
  height: 50px;
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  margin: 0 15px 0 15px;
}

.footer-contactenos {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
}

.size-icon {
  font-size: 30px;
  margin: 0 10px 0 10px;
}

@media screen and (min-width: 600px) {
}

@media screen and (min-width: 900px) {
  .footer {
    height: 100px;
  }

  .footer-information {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .logo-box {
    width: 48%;
  }

  .footer-copyright {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-contactenos {
    width: 88%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 0 0 0;
  }
}

@media screen and (min-width: 1200px) {
  .footer {
    height: 100px;
  }

  .footer-information {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1200px;
  }

  .logo-box {
    width: 37%;
  }

  .footer-copyright {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-contactenos {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 0 0 0;
  }
}
</style>
