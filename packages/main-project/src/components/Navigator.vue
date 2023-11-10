<script lang="ts">
export default {
  name: 'Navigator'
}
</script>

<script lang="ts" setup></script>

<template>
<div class="navigator">
  <router-link to="/home">Home</router-link>
  <router-link to="/game">Game</router-link>
</div>
</template>

<style lang="scss" scoped>
.navigator {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
