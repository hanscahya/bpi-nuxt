<template lang="pug">
  //- div.grid.grid-cols-2.gap-4
  div.px-5.py-10.flex(
    :class="layout === 'default'\
      ? 'sm:flex-col md:flex-row'\
      : 'sm:flex-col md:flex-row-reverse'"
  )
    div.p-10.flex-1.flex.flex-col.justify-center(
      :class="layout === 'default'\
        ? 'items-end text-right'\
        : 'items-start text-left'"
    )
      h1.animate {{ title }}
      p {{ paragraph }}

    div.flex-1.flex.flex-col.justify-center(
      :class="layout === 'default'\
        ? 'items-end text-right'\
        : 'items-start text-left'"
    )
      img.animate.rounded-xl(class="w-10/12" :src="image")

    
  
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'default',
    },
    title: {
      type: String,
      default: '',
    },
    paragraph: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
img.animate {
  @apply shadow-sm;
  transition: all 0.5s ease;

  &:hover {
    @apply shadow-xl;
  }
}
</style>
