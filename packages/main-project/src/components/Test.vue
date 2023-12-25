<script lang="ts" setup>
import { getTestApi } from '@/api/test'
defineOptions({
  name: 'Test'
})
const name = ref("")

getTestApi().then((res: any) => {
  name.value = res.name
})
</script>

<template>
<div>{{ name || "--" }}</div>
</template>

<style lang="scss" scoped></style>
