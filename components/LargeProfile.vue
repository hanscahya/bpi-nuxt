<template lang="pug">
  div.container.mx-auto.grid.grid-cols-5(
    class="px-3 md:px-10 gap-5 md:gap-20"
  )
    div.flex.flex-col.justify-center(
      class="col-span-5 md:col-span-3 row-start-2 md:row-start-1"
    )
      div.text-sm.font-black.text-blue-400 {{ label }}
      h1.mt-3 {{ title }}
      p.mt-5.leading-loose(v-html="paragraph")
      button.mt-3.button-primary.w-60(v-if="button1Link" @click="$router.push(button1Link)") {{ button1Text }}
      button(v-if="button2Link") {{ button2Text }}

    div(class="col-span-5 md:col-span-2")
      img.rounded-xl(:src="image")

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    paragraph: {
      type: String,
      default: '',
    },
    button1Link: {
      type: String,
      default: '',
    },
    button1Text: {
      type: String,
      default: '',
    },
    button2Link: {
      type: String,
      default: '',
    },
    button2Text: {
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
.button-primary {
  @apply bg-primary;
  @apply border-primary;

  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  white-space: nowrap;
}
</style>
