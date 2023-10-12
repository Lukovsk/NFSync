import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Home from "./views/Home.vue";

import "./style.css";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Login", component: Login },
    { path: "/home", name: "Home", component: Home },
  ],
});

createApp(App).use(router).mount("#app");
