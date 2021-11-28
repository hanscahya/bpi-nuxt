<template lang="pug">
  div.grid.grid-cols-4.gap-1
    div.img-container(v-for="(image, imageIndex) in images" :key="imageIndex")
      div.absolute.inset-0.bg-gray-200.bg-opacity-50
      img(:src="image")

</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: null,
    },
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
    filter: grayscale(100%);

    &:hover {
      transform: scale(110%);
      filter: grayscale(0%);
    }
  }
}
</style>
