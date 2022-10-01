import { defineStore } from "pinia";
import { ref } from "vue";
import { useLazyFetch } from "#app";

import { api } from "~/env";
import { Category } from "~/stores/admin/category";

export interface BrandInterface {
   _id: string
   name: string
   slug: string
   code: string
   category: Category | string
   brand: BrandInterface | string
   description: string
   image: string
   price: string
   tradePrice: string
   createdAt: string
   updatedAt: string
}

export const useProduct = defineStore("admin", () => {
   const product = ref<BrandInterface[] | null>([]);

   function getProducts() {
      try {
         const {data} = useLazyFetch<BrandInterface[]>(`${api}/product`)
         product.value = data.value;
      } catch (e) {
         throw e
      }
   }

   function createProduct(product: BrandInterface) {
      try {
         const formData = transformData(product)
         useLazyFetch(`${api}/product`, {
            method: 'POST',
            body: formData,
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
      } catch (e) {
         throw e
      }
   }

   return {
      product,
      getProducts
   }
})

function transformData(product: any) {
   const formData = new FormData()
   Object.keys(product).forEach(key => {
      formData.append(key, product[key])
   })
   return formData;
}