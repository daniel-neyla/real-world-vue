<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    

    <nav>

      <router-link :to="{name: 'EventDetails'}">Details</router-link> |

      <router-link :to="{name: 'EventRegister'}">Register</router-link> |

      <router-link :to="{name: 'EventEdit'}">Edit</router-link> 
    </nav>


    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      event: null,
      
    };
  },
  created() {
    // fetch event by id and display it
    console.log(this.id);
    EventService.getEvent(this.id)

      .then((response) => {
        this.event = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
