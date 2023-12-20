<template>
  <p ref="content">Count is {{ counterStore.count }}</p>
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
    name: 'LifeCycle'
  })

  const counterStore = useCounterStore();
  const content = ref<any>(null)
  
  onBeforeMount(() => {
    console.log('onBeforeMount');
  })
  
  onMounted(() => {
    console.log('onMounted');
  })
  
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
    console.log(content.value && content.value.outerHTML);
  })
  
  onUpdated(() => {
    console.log('onUpdated');
    console.log(content.value && content.value.outerHTML);
  })
  
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
  })
  
  onUnmounted(() => {
    console.log('onUnmounted');
  })
  
  onErrorCaptured(() => {
    console.log('onErrorCaptured');
  })
  
</script>

<style lang="scss" scoped>
.counter-flex {
  display: flex;
  gap: 8px;
}
</style>
  