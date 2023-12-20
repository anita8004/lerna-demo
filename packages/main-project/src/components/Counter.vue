<template>
<p>Count is {{ counterStore.count }}</p>
<p class="counter-flex">
  <button @click="counterStore.decrement()">Decrement</button>
  <button @click="counterStore.increment()">Increment</button>
  <button @click="counterStore.$reset()">Reset</button>
</p>
</template>

<script lang="ts" setup>
// @ts-ignore
import { useCounterStore } from '@/stores/counter'

defineOptions({
  name: 'Counter'
})

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
.counter-flex {
  display: flex;
  gap: 8px;
}
</style>
