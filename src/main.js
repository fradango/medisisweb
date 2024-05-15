import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faScaleBalanced, faGears } from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faHandshake,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
library.add(faScaleBalanced, faLightbulb, faHandshake, faStar, faGears);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
