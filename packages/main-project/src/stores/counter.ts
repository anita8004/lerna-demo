import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {

  const count = ref<number>(0)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function $reset() {
    count.value = 0
  }
  
  return {
    count,
    increment,
    decrement,
    $reset
  }
});