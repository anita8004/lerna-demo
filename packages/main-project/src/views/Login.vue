<script lang="ts" setup>
import router from '@/router'

defineOptions({
  name: 'Login'
})

const login = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <button @click="login">Login</button>
</template>

<style lang="scss" scoped></style>
