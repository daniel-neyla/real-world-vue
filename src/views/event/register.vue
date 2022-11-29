<template>
  <div v-if="event">
    <p>Register for Event here</p>
    <button @click="register">Register Button</button>
  </div>
</template>

<script>
import { useFlashMessageStore } from '@/store/FlashMessageStore';

export default {
  props: ["event"],

  setup() {
    const flashMessageStore = useFlashMessageStore()
    return {

      flashMessageStore
    } 
  },

  methods: {
    register() {
      // Call to Api
      // If registered then redirect to event details


      
      this.flashMessageStore.setFlashMessage('You are successfully registered for ' + this.event.title)
      this.$router.push({
        name: 'EventDetails',
        params: {id: this.event.id}
      })
    }
  },

};
</script>
