<template>
  <div v-if="event" >
    <h1>{{ event.title}}</h1>
    

    <nav>

      <router-link :to="{name: 'EventDetails'}">Details</router-link> |

      <router-link :to="{name: 'EventRegister'}">Register</router-link> |

      <router-link :to="{name: 'EventEdit'}">Edit</router-link> 
    </nav>


    <router-view :event="event" />
  </div>
</template>

<script>
import { useEventStore } from '@/store/EventStore';

export default {
computed: {
  event() {
    return this.eventStore.event
  }
}, 
setup() {
  const eventStore = useEventStore()
  return {
    eventStore
  }
}
};
</script>
