import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', () => {
  const cart = ref([])
  const noOfItemsInCart = computed(() => cart.value.length)
  function addToCart(newProdcut) {
    cart.value.push(newProdcut)
  }

  return { cart, noOfItemsInCart, addToCart }
})

export const productStore = defineStore('products', () => {
  const products = ref([])
  let isProductsShown = ref(false)
  function updateProductsVisibility(value) {
    isProductsShown.value = value
  }
  function updateProducts(newProdcut) {
    products.value.push(...newProdcut)
  }

  return { products, isProductsShown, updateProductsVisibility, updateProducts }
})
