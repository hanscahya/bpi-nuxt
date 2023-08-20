<template lang="pug">
  //- div.grid.grid-cols-2.gap-4
  div.px-5.py-10.flex(
    :class="layout === 'default'\
      ? 'flex-col md:flex-row'\
      : 'flex-col md:flex-row-reverse'"
  )
    div.p-10.flex-1.flex.flex-col.justify-center(
      :class="layout === 'default'\
        ? 'md:items-end md:text-right'\
        : 'items-start text-left'"
    )
      h1.animate {{ title }}
      p.mt-3(v-html="paragraph")

    div.flex-1.flex.flex-col(
      :class="layout === 'default'\
        ? 'md:items-start md:text-right'\
        : 'items-end text-left'"
    )
      img.animate.rounded-xl(class="mx-auto md:mx-0 w-10/12" :src="image")

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
  @apply border;
  @apply border-0;

  transition: all 0.5s ease;

  &:hover {
    @apply shadow-xl;
  }
}
</style>
