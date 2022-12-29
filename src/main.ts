import { createApp } from "vue";
import App from "./App.vue";
import "virtual:svg-icons-register";
import SVGIconNames from "virtual:svg-icons-names";
import SVGIcon from "./components/SVGIcon.vue";
import "normalize.css";
import "./style.css";

console.log(SVGIconNames);

createApp(App).component("SVGIcon", SVGIcon).mount("#app");
