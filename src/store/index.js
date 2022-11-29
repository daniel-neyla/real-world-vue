
// import {createStore, storeKey} from 'vuex'

// import EventService from '@/services/EventService'

// export default createStore({
//   state: {
//     flashMessage: '', 
//     event: null,
//     user: 'Daniel Hornung',
//     events: []

//   },
//   mutations: {
//     SET_FLASHMESSAGE(state, str) {
//       state.flashMessage = str
//     },
//     SET_EVENT(state, event) {

//       state.event = event
//     },
//     ADD_EVENT(state, event) {
//       state.events.push(event)
//     }
//   },
//   actions: {
//     createEvent({commit}, event) {
//       EventService.postEvent(event).then(() => {
//         commit('ADD_EVENT', event)
        

//       }).catch((err) => console.log('Error', err))
//     },
//     setFlashMessage({commit}, str) {
//       commit('SET_FLASHMESSAGE', str)  

//       setTimeout(() => {
//         commit('SET_FLASHMESSAGE', '')
//       }, 3000)
//     },
//     setEvent({commit}, event) {
//       commit('SET_EVENT', event)
//     }
//   },
//   modules: {}
// })



