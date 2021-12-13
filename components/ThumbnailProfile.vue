<template lang="pug">
  div.container.mx-auto.px-10.grid.grid-cols-4.gap-8
    div.card(
      v-for="(item, itemIndex) in items"
      :key="itemIndex"
      @click="$router.push(`/profile/${item.id}`)"
    )
      h1 {{ item.name }}
      p {{ item.label }}
      img.mt-5(:src="item.image")

</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  @apply p-5;
  @apply border;
  @apply border-gray-100;
  @apply rounded-xl;
  @apply shadow-xl;
  @apply cursor-pointer;

  transition: all 0.5s ease;

  &:hover {
    @apply shadow-2xl;
  }
}
</style>
