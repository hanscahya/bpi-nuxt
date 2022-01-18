<template lang="pug">
  div.bg-blue-200
    Header.header
    Nuxt.nuxt-container
    Footer

    Loading
    Toast

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'
import Toast from '@/components/Toast.vue'

export default {
  components: { Header, Footer, Loading, Toast },

  watch: {
    $route() {
      console.log('hello')
      this.$store.commit('setLoading', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  // @apply shadow-md;

  // border-bottom: 2px solid #e5e5e5;
  background-color: #fff;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.nuxt-container {
  @apply tracking-wider;
  @apply overflow-hidden;

  min-height: calc(100vh - theme('spacing.20'));
}

.header,
.nuxt-container,
.footer {
  @apply mx-auto;
  @apply bg-white;

  max-width: 1440px;
}
</style>
