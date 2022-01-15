import { acceptHMRUpdate, defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  /**
   * Current named of the user.
   */
  const target = ref(null)

  return {
    target,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
