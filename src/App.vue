<template>
  <nav>
    <div id="flashMessage" v-if="FlashMessageStore.flashMessage">
      {{FlashMessageStore.flashMessage}}
    </div>
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{name: 'create-event'}">Create Event</router-link>
    <p>Logged in as {{UserStore.firstName}}</p>
  </nav>
  <router-view />
</template>


<script>

import {useFlashMessageStore} from '@/store/FlashMessageStore'
import {useUserStore} from '@/store/UserStore'


export default {
  setup() {
    const FlashMessageStore = useFlashMessageStore()
    const UserStore = useUserStore()
    return {
      FlashMessageStore,
      UserStore
    }
  }
}

</script>

<style>

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;

}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
