<template lang="pug">
  swiper.relative.z-10(ref="infiniteSwiper" :options="swiperOptions")
    swiper-slide(v-for="(item, contentIndex) in items" :key="contentIndex")
      div.mx-3.bg-white.flex.items-center.rounded-xl
        img.p-2.w-40.h-40.mx-auto.animate.object-contain(:src="item.image")

</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        initialSlide: 0,
        effect: 'slide',
        speed: 2000,
        slideClass: 'swiper-slide',
        autoplay: {
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      },
    }
  },

  computed: {
    swiper() {
      return this.$refs.infiniteSwiper.$swiper
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

.swiper-slide {
  @apply self-center;
}
</style>
