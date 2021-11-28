<template lang="pug">
  div
    Header.header

    //- loading
    //- Loading.loading(:class="{ active: $store.state.loading }")
    Nuxt.nuxt-container.overflow-hidden

    Footer

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
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

.loading {
  visibility: hidden;
  opacity: 0;

  transition: visibility 1s ease, opacity 0.5s linear;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}

.nuxt-container {
  @apply tracking-wider;

  min-height: calc(100vh - theme('spacing.20'));
}
</style>
