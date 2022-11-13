import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "../views/AboutView.vue";

import EventDetails from "../views/event/details.vue";
import EventRegister from "../views/event/register.vue";
import EventEdit from "../views/event/edit.vue";
import EventLayout from "../views/event/layout.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },


  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: "EventDetails",
        component: EventDetails,
      },

      {
        path: "register",
        name: "EventRegister",

        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",

        component: EventEdit,
      },
    ]
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
