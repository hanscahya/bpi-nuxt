<template lang="pug">
  div
    //- Header.main-header

    div.wrapper
      b-img(src="/images/logo.png")

      div.mt-5 Page Not Found

      NuxtLink.text-blue-400(to="/" rel="nofollow") Back to Home

    //- Footer

</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    margin: 20px;
  }
}
</style>
