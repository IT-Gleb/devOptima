import { createApp } from "vue";
import "../src/assets/css/my_styles.css";
// import CanvasJSChart from "@canvasjs/vue-charts";

import App from "./App.vue";

const this_app = createApp(App);

this_app.mount("#app");
