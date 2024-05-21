import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faScaleBalanced,
  faGears,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faHandshake,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
  faSquareWhatsapp,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faScaleBalanced,
  faLightbulb,
  faHandshake,
  faStar,
  faGears,
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
  faSquareWhatsapp,
  faWhatsapp,
  faBars,
  faTimes
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
