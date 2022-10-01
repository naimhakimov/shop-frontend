<template>
 <div class="bg-red-500">
   Lorem ipsum dolor.
   <n-input v-model="name" label="werwerwe"></n-input>
   <div v-for="item in data">
     <p>{{ item.name }}</p>
   </div>
 </div>
</template>

<script setup lang="ts">
import { useFetch } from "#app";
import NInput from "~/components/ui/n-input.vue";
import { ref, watch } from "vue";

const name = ref('1234')

watch(name, (old, newValue) => {
  console.log('old', old)
  console.log('newValue', newValue)
})

const {data, error} = useFetch<{ name: string }[]>('https://staging-shop-server.herokuapp.com/api/category')
</script>