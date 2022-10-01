import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
   meta: {
      title: 'Shop',
      meta: [
         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {
            hid: 'description',
            name: 'description',
            content: 'Shop',
         },
      ],
      link: [
         {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
         {rel: 'stylesheet', href: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css'},
      ],
     script: [
       {
         src: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
       }
     ]
   },
   css: ['@/assets/css/main.css'],

   typescript: {
      strict: true,
      shim: false,
   },
   modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
   components: true,
})
