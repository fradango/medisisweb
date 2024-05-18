<template>
  <a
    href="https://wa.me/945659062"
    class="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <font-awesome-icon icon="fa-brands fa-whatsapp" />
  </a>
</template>

<script>
export default {
  name: "WhatsappButton",
};
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.whatsapp-float:hover {
  background-color: #20b357;
}

.whatsapp-float svg {
  width: 30px;
  height: 30px;
}
</style>
