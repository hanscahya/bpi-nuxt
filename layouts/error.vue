<template lang="pug">
  div
    //- Header.main-header

    div.wrapper
      b-img(src="/images/logo.png")

      div.mt-5 Page Not Found

      NuxtLink(to="/" rel="nofollow") Back to Home

    //- Footer

</template>

<style lang="scss" scoped>
.wrapper {
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 200px;
    margin: 20px;
  }
}
</style>
