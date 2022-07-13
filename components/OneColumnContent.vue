<template lang="pug">
  div.one-column-container(
    class="sm:px-10 md:px-20 lg:px-40"
    :style="{ 'background-image': `url('${bgImage}')` }"
  )
    div.bg-overlay

    div.container.relative.flex.flex-col.justify-center.items-center.text-center.z-20.font-bold
      div.mb-5.p-5.w-80.bg-white.rounded-xl.bg-opacity-80
        img.w-full(:src="image")
      div.font-black.text-3xl {{ title }}
      p.mt-5.text-lg(
        class="w-5/6 hidden md:block"
      ) {{ paragraph }}

      div.button-container
        button.mt-5.bg-blue-500.text-white.font-bold.py-2.px-4.rounded-3xl(
          v-if="buttonLink"
          :class="isButtonAnimate ? 'scale-0' : 'scale-1'"
          @click="$router.push(buttonLink)"
        ) {{ buttonText }}

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
    image: {
      type: String,
      default: '',
    },
    bgImage: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    isButtonAnimate: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @apply hover:bg-blue-700;
  transition: all 0.5s ease;
}

.bg-overlay {
  @apply absolute;
  @apply inset-0;
  @apply bg-gray-300;
  @apply bg-opacity-50;
  @apply z-10;

  transition: all 0.5s ease;
}

.one-column-container {
  @apply relative;
  @apply py-40;

  @apply bg-cover;
  @apply bg-center;
  @apply bg-no-repeat;

  .button-container {
    @apply overflow-hidden;

    button {
      transition: all 0.15s ease;
    }
  }

  &:hover {
    // .bg-overlay {
    //   @apply bg-gray-500;
    //   @apply bg-opacity-50;
    // }

    .button-container > button {
      transform: scale(1);
    }
  }
}
</style>
