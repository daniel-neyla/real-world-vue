import {defineStore} from 'pinia'

export const useFlashMessageStore = defineStore('FlashMessageStore', {
  state() {
    return {
      flashMessage: '', 
    }
  }, 
  actions: {
    setFlashMessage(str) {
      this.flashMessage = str

      setTimeout(() => {
        this.flashMessage = ''
      }, 3000)
    },
  }
})