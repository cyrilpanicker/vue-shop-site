<template>
  <div class="bg-black">
    <div
      :class="`${areProductsShown && products.length ? 'auto' : 'h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)]'} bg-black flex justify-center items-center relative`"
    >
      <section class="w-full z-20 scroll-pt-60 -translate-y-5">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Get quality products at low cost
          </h1>
          <p
            class="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
          >
            A store you cannot afford to miss
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
          >
            <button
              @click="showProducts"
              :class="`absolute ${products.length && areProductsShown ? '-left-[50%]' : 'left-[50%] translate-x-[-50%] translate-y-4'} transition-all duration-100  inline-flex justify-center items-center py-3 px-5 text-lg font-normal text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`"
            >
              Get started
              <svg
                class="ml-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#e8eaed"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
    <ProductList />
  </div>
</template>

<script>
import { productStore } from '@/stores/app'
import ProductList from './ProductList.vue'
export default {
  name: 'LandingPage',
  data() {
    return {
      isProductsShown: false,
    }
  },
  watch: {},
  components: {
    ProductList,
  },
  computed: {
    products() {
      return productStore().products
    },
    areProductsShown() {
      return productStore().isProductsShown
    },
  },
  methods: {
    showProducts() {
      productStore().updateProductsVisibility(true)
    },
  },
}
</script>

<style scoped lang="scss"></style>
