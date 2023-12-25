<script lang="ts">
export default {
  name: 'FullName',
  setup() {
    const firstName = ref('Danny')
    const lastName = ref('Li')
    const getFullName = (firstName: string, lastName: string) => [firstName, lastName].filter(Boolean).join(' ')
    const fullName = computed({
      get() {
        // return firstName.value + ' ' + lastName.value
        return getFullName(firstName.value, lastName.value)
      },
      set(newValue) {
        [firstName.value = '', lastName.value = ''] = newValue.split(' ')
        // const [first, last] = newValue.split(' ')
        // firstName.value = first || ''
        // lastName.value = last || ''
      }
    })
    return {
      firstName,
      lastName,
      fullName
    }
  }
}
</script>

<template>
  <form>
    <div class="form-item">
      <label for="">First Name: </label>
      <input v-model="firstName" />
    </div>
    <div class="form-item">
      <label for="">Last Name: </label>
      <input v-model="lastName" />
    </div>
    <div class="form-item">
      <label for="">Full Name: </label>
      <input v-model="fullName" />
    </div>
  </form>
  <ul>
    <li>first name: {{ firstName }}</li>
    <li>last name: {{ lastName }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
