<template class="max-w-[1440px]">
  <NavSection
    class="sticky top-0 z-50"
    position="header"
    :appWidth="appWidth"
  />
  <router-view />
</template>

<script>
import NavSection from './components/common/NavSection.vue'
export default {
  data() {
    return {
      browserWidth: null,
    }
  },
  methods: {
    onResize(event) {
      this.browserWidth = event.target.innerWidth
    },
  },
  computed: {
    appWidth() {
      return this.browserWidth
    },
  },
  components: {
    NavSection: NavSection,
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style scoped lang="scss"></style>
