<template lang="pug">
  swiper.relative.z-10(
    v-if="swiperOptions.slidesPerView"
    ref="infiniteSwiper"
    :options="swiperOptions"
  )
    swiper-slide(v-for="(item, contentIndex) in items" :key="contentIndex")
      div.mx-3.bg-white.flex.items-center.rounded-xl.animate
        img.p-2.mx-auto.object-contain(
          class="w-30 md:w-40 h-30 md:h-40"
          :src="item.image"
        )

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
        slidesPerView: null,
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

  mounted() {
    if (document.body.clientWidth < 768) this.swiperOptions.slidesPerView = 2
    else this.swiperOptions.slidesPerView = 5
  },
}
</script>

<style lang="scss" scoped>
.animate {
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
