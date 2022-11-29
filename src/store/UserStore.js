import {defineStore} from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    
      user: 'Daniel Hornung',

  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})