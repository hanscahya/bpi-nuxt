<template lang="pug">
  div.relative
    swiper.relative.z-10(ref="heroSwiper" :options="swiperOptions")
      swiper-slide(v-for="(item, contentIndex) in items" :key="contentIndex")
        div
          img.object-cover(
            class="w-full"
            :src="item.image"
          )
        //- div.absolute.inset-0.flex.flex-col.justify-center.items-center.text-white
          div.animate-title.text-center.mx-auto(class="w-5/6 md:w-4/6")
            div.text-5xl.font-black.text-shadow.py-3 {{ item.title.toUpperCase() }}
          div.mt-5.mx-auto.text-center.animate-subtitle(class="w-5/6 md:w-4/6")
            div.text-xl.font-bold.text-shadow.pt-3 {{ item.subtitle }}
            div.text-md.font-bold.text-shadow.pb-3 {{ item.paragraph }}

      div.swiper-pagination.pb-3(slot="pagination")

    div.navigation-wrapper.text-white
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

.text-shadow {
  text-shadow: 1px 1px 20px #0006;
}
</style>
