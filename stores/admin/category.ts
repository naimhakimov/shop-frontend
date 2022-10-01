import { defineStore } from "pinia";
import { useFetch, useLazyFetch } from "#app";
import { ref } from "vue";
import { api } from "~/env";

export interface Category {
   _id: string
   name: string
   slug: string
}

export const useCategory = defineStore("admin", () => {
   const category = ref<Category[] | null>([])

   function getCategory() {
      try {
         const {data} = useFetch<Category[]>(`${api}/category`)
         category.value = data.value
      } catch (e) {
         throw e
      }
   }

   function createCategory(name: string) {
      try {
         const {data} = useLazyFetch<Category>(`${api}/category`, {
            method: 'POST',
            body: {name}
         })
         console.log(data)
      } catch (e) {
         throw e
      }
   }

   return {
      category,
      getCategory,
      createCategory
   }
})

