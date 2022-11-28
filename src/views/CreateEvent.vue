<template>
    <div class="container">
    <h1>Create an event</h1>
    <form @submit.prevent="sendEvent">
      <div>
        <BaseSelect :options="categories" v-model="event.category" label="Select a category:" />
      </div>

      <fieldset>
        <legend>Name & describe your event</legend>
        <div>
          <BaseInput label="Title" type="text" v-model="event.title" />
        </div>
        <div>
          <BaseInput label="Description" type="text" v-model="event.description" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>
        <div>
          <BaseInput label="Location" type="text" v-model="event.location" />
        </div>
      </fieldset>

      <fieldset>
        <legend>When is your Event?</legend>
        <div>
          <BaseInput label="Date" type="text" v-model="event.date" />
        </div>
        <div>
          <BaseInput label="Time" type="text" v-model="event.time" />
        </div>
      </fieldset>
        
      <button class="button" type="submit">Submit</button>
    </form>


  </div>
</template>

<script>

import UniqueID from "@/features/UniqueID";
import EventService from "@/services/EventService.js";
import axios from "axios";


export default {

  name: 'create-event',
  inject: ['GStore'],
  data () {
    return {
      categories: [
        'Sustainability',
        'Nature',
        'Animal welfare',
        'Housing',
        'Education',
        'Food',
        'Community'
      ],
      event: {
        id: null,
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        petsAllowed: true,
        organizer: ''
      },
  
    }
  },
  methods: {
    resetEvent() {
      this.event.id = null
      this.event.category = ''
      this.event.title = ''
      this.event.description = ''
      this.event.location = ''
      this.event.date = ''
      this.event.time = ''
      this.event.petsAllowed  = true,
      this.event.organizer = ''
    },  
  
    sendEvent() {
      this.event.id = UniqueID()
      this.event.organizer = this.$store.state.user
      EventService.postEvent(this.event).then((response) => {
        console.log('Response', response)
        

      }).catch((err) => console.log('Error', err)).finally(() => {
        this.resetEvent()
        this.$router.push({name: 'EventList'})
      
        this.$store.commit('SET_FLASHMESSAGE', 'Your Event was successfully created')  

          setTimeout(() => {
            this.$store.commit('SET_FLASHMESSAGE', '')
          }, 3000)
        })
        
    }
  },

}
</script>

<style scoped>
template {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
.container {
  box-sizing: border-box;
  width: 500px;
  padding: 0 20px 20px;
  margin: 0 auto;
}



fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 10px;
}



h1 {
  
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}






.button {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}


button {
  overflow: visible;
}
button {
  text-transform: none;
}
button,
[type="button"],

[type="submit"] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,

[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}











.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  margin-left: 1em;
}
.button {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
}

/* .-fill-gradient */
.button.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}

</style>