<script lang="ts" setup>
import { getTestApi } from '@/api/test'
defineOptions({
  name: 'Test'
})
const name = ref("")

getTestApi().then((res: any) => {
  console.log(res);
  if (res.status === 200) {
    name.value = res.data.data.name
  }
})
</script>

<template>
<div>{{ name || "--" }}</div>
</template>

<style lang="scss" scoped></style>
