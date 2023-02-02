<template lang="pug">
  div.container.mx-auto.px-10.flex.flex-wrap.justify-center
    div.my-5.flex.flex-col.justify-between.card(
      v-for="(item, itemIndex) in items"
      :key="itemIndex"
      class="w-12/12 md:w-3/12 md:mx-5"
      @click="$router.push(`/profile/${item.id}`)"
    )
      div
        div.text-xl.font-black {{ item.name }}
        div.mt-3.text-sm {{ item.label }}
      img.mt-5.rounded-xl(:src="item.image")

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
