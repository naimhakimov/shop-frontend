<template>
  <div class="input">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input type="text" :value="modelValue" @input="updateValue" class="input-control"/>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  label: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.input {
  @apply flex flex-col;

  &-label {
    @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300;
  }

  &-control {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
  }
}
</style>