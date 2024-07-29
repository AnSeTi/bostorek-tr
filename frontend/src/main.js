import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";

const app = createApp(App);
app.use(router);
app.mount('#app');

// const app = createApp({
//     data() {
//         return {
//             name: "Fatih",
//         };
//     },
//     template: `<h1>Benim Adım {{name}}</h1>`,
// });

// app.mount("#app");