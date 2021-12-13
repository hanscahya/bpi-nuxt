<template lang="pug">
  div.container.mx-auto.px-10.grid.grid-cols-5.gap-20
    div.col-span-3
      h1 {{ title }}
      p {{ paragraph }}
      button(v-if="button1Link") {{ button1Text }}
      button(v-if="button2Link") {{ button2Text }}

    div.col-span-2
      img(:src="image")

</template>

<script>
export default {
  props: {
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

<style lang="scss" scoped></style>
