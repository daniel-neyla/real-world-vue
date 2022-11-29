import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "../views/AboutView.vue";
import NotFound from "../views/NotFound.vue";
import NetworkErr from "../views/NetworkErr.vue";
import CreateEvent from '../views/CreateEvent.vue'

import EventDetails from "../views/event/details.vue";
import EventRegister from "../views/event/register.vue";
import EventEdit from "../views/event/edit.vue";
import EventLayout from "../views/event/layout.vue";
import NProgress from 'nprogress'
import EventService from "@/services/EventService.js";
import store from '@/store'
import { useFlashMessageStore } from "@/store/FlashMessageStore";
import { useEventStore } from "@/store/EventStore";


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
    // component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/create-event',
    name: 'create-event',
    component: () => 
      import(/* webpackChunkName: 'create-event' */ "../views/CreateEvent.vue")
  },

  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return {path: '/events/' + to.params.afterEvent}
    }
  },


  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    beforeEnter: to => {
      const existingEvent = store.state.events.find(event => event.id === to.params.id)
      const eventStore = useEventStore()
      if(existingEvent) {
        
        eventStore.setEvent(existingEvent)
       
      } else {
      
      return EventService.getEvent(to.params.id)

      .then((response) => {
        

        eventStore.setEvent(response.data)
        
      })
      .catch((err) => {
        
        if(err.response && err.response.status == 404) {

        return {
          name: '404Resource',
          params: {resource: 'event'}
        }
        } else {
          return {name: 'NetworkErr'}
        }

      });
    }
    },
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

        meta: {
          requiredAuth: true
        },

        component: EventEdit,
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkErr',
    component: NetworkErr
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to , from, savedPosition) {

    if(savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return {top: 0}
    }

    
  },

 
});



router.beforeEach((to, from) => {
  NProgress.start()



  const notAuthorized = true
  if(to.meta.requiredAuth && notAuthorized) {

    
    const flashMessageStore = useFlashMessageStore()


    flashMessageStore.setFlashMessage('Sorry, you are not authorized to view this page')

    if(from.href) {
      return false
    } else {
      return '/'
    }
    
  }


})

router.afterEach(() => {
  NProgress.done()
})

export default router;
