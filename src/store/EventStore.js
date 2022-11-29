import {defineStore} from 'pinia' 
import EventService from '@/services/EventService'

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: null
    }
  }, 
  actions: {
    createEvent( event) {
      EventService.postEvent(event).then(() => {
        this.events.push(event)
      }).catch((err) => console.log('Error', err))
    },
    setEvent(event) {
      this.event = event
    }
  }
})