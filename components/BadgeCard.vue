<template lang="pug">
  div.p-4.rounded-xl.flex.justify-between.items-center.animate
    img.w-14(:src="icon")
    div.text-right
      div.font-bold {{ label }}
      h2 {{ value || '' }}

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.animate {
  @apply shadow-sm;
  @apply bg-gray-50;
  transition: all 0.5s ease;

  &:hover {
    @apply shadow-2xl;
    // @apply bg-gray-200;

    // transform: scale(102%);
  }
}
</style>
