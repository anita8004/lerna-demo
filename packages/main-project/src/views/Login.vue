<script lang="ts">
export default {
  name: 'Login'
}
</script>

<script lang="ts" setup>
import router from '@/router'

const login = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <button @click="login">Login</button>
</template>

<style lang="scss" scoped></style>
