import { defineStore } from "pinia";
import { ref } from "vue";
import { useLazyFetch } from "#app";

import { api } from "~/env";

export interface BrandInterface {
   _id: string
   name: string
   slug: string
}

export const useBrand = defineStore("admin", () => {
   const brand = ref<BrandInterface[] | null>([]);

   function getBrand() {
      try {
         const {data} = useLazyFetch<BrandInterface[]>(`${api}/brand`)
         brand.value = data.value;
      } catch (e) {
         throw e
      }
   }

   return {
      brand,
      getBrand
   }
})