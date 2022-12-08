import { defineStore } from 'pinia'

export const useMainStore = defineStore('app-store', {
  state: () => ({
    reloadFlag: true
  })
})
