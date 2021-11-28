<template lang="pug">
  div.relative
    swiper.relative.z-10(ref="heroSwiper" :options="swiperOptions")
      swiper-slide(v-for="(item, contentIndex) in items" :key="contentIndex")
        div.animate-img
          img(:src="item.image")
        div.absolute.inset-0.flex.flex-col.justify-center.items-center
          div.animate-title
            div.text-6xl.font-bold {{ item.title.toUpperCase() }}
          div.animate-subtitle
            div.text-3xl {{ item.subtitle }}

      div.swiper-pagination.pb-3(slot="pagination")
    
    div.navigation-wrapper
      div.animate-arrow.text-4xl.px-3(@click="swiper.slidePrev()")
        b-icon(icon="chevron-left")
      div.animate-arrow.text-4xl.px-3(@click="swiper.slideNext()")
        b-icon(icon="chevron-right")

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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        initialSlide: 1,
        autoplay: {
          delay: 8000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      },
    }
  },

  computed: {
    swiper() {
      return this.$refs.heroSwiper.$swiper
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation-wrapper {
  @apply absolute;
  @apply inset-0;
  @apply flex;
  @apply justify-between;
  @apply items-center;
  @apply z-50;
}

.animate-img,
.animate-title,
.animate-subtitle {
  @apply overflow-hidden;
}
.animate-title {
  div {
    transition: all 0.75s ease;
    transform: translateY(100%);
  }
}
.animate-subtitle {
  div {
    transition: all 0.75s ease;
    transform: translateY(-100%);
  }
}

.swiper-slide-active {
  .animate-img > img {
    transition: all 60s linear;
    transform: scale(2);
  }
  .animate-title > div {
    transform: translateY(0%);
  }
  .animate-subtitle > div {
    transform: translateY(0%);
  }
}

.animate-arrow {
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
}
</style>
