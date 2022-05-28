import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "@/views/EntryPage.vue";

const routes = [
  {
    path: "/",
    component: EntryPage,
    name: "HomePage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
