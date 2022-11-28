<template>
  <div v-if="event">
    <p>Register for Event here</p>
    <button @click="register">Register Button</button>
  </div>
</template>

<script>
export default {
  props: ["event"],

  methods: {
    register() {
      // Call to Api
      // If registered then redirect to event details

      this.$store.commit('SET_FLASHMESSAGE', 'You are successfully registered for ' + this.event.title)  

      setTimeout(() => {
          this.$store.commit('SET_FLASHMESSAGE', '')
      }, 3000)


      this.$router.push({
        name: 'EventDetails',
        params: {id: this.event.id}
      })
    }
  }
};
</script>
