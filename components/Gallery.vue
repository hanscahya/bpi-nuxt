<template lang="pug">
  div
    div.grid.gap-1(
      class="grid-cols-2 md:grid-cols-4"
    )
      div.img-container(v-for="(image, imageIndex) in images" :key="imageIndex")
        div.absolute.inset-0.bg-gray-200.bg-opacity-50
        img(:src="image" @click=";(popup = true); fullscreenImage = image")

    div.popup.fixed.inset-0(
      style="z-index: 100"
      :class="{ active: popup }"
      tabindex="0"
      @keyup.esc=";(popup = false); fullscreenImage = null"
    )
      div.bg-black.opacity-50.h-full.w-full(@click=";(popup = false); fullscreenImage = null")
      img.fixed.inset-2.m-auto.max-w-6xl(:src="fullscreenImage" style="z-index: 110")

</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      popup: false,
      fullscreenImage: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  @apply relative;
  @apply overflow-hidden;

  cursor: pointer;

  img {
    transition: all 0.35s ease;
    filter: grayscale(80%);

    &:hover {
      transform: scale(110%);
      filter: grayscale(0%);
    }
  }
}

.popup {
  visibility: hidden;
  opacity: 0;

  transition: all 0.4s ease;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
