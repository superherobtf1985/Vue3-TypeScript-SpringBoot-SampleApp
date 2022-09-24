import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import NewBookView from "../views/NewBookView.vue";
import EditBookView from "../views/EditBookView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "new",
      component: NewBookView
    },
    {
      path:"/books",
      name: "books",
      component: BooksView
    },
    {
      path:"/books/edit/:id",
      name: "edit",
      component: EditBookView
    }
  ],
});

export default router;
