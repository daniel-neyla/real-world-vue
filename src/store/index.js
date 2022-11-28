
import {createStore, storeKey} from 'vuex'


export default createStore({
  state: {
    flashMessage: '', 
    event: null,
    user: 'Daniel Hornung'

  },
  mutations: {
    SET_FLASHMESSAGE(state, str) {
      state.flashMessage = str
    },
    SET_EVENT(state, event) {
      console.log(event)
      state.event = event
    }
  },
  actions: {},
  modules: {}
})



