<template lang="pug">
  div.container.mx-auto.py-20.flex.items-center.relative.overflow-hidden
    div.grid(class="grid-cols-1 md:grid-cols-2")
      div.px-10.flex.flex-col.justify-center
        div.text-sm.font-black.text-blue-400 Our Services
        div.mt-3.text-3xl.font-black Making your world work better
        div.mt-5.leading-loose Smart, integrated facility services can help your organisation grow profitability, boost efficiency and gain a competitive edge - all while freeing you to focus on your core business. We adapt to your needs and ongoing transformation. Whichever industry, whichever place, we're there to enhance your success.
      div.px-10.flex.flex-wrap.justify-center.items-center
        div(v-for="(item, itemIndex) in content.items" :key="itemIndex" class="w-4/12")
          div.m-1.flex.flex-col.justify-center.items-center.text-white.transition-all.duration-400.cursor-pointer(
            :class="['hover:rounded-lg', !item.disabled && 'hover:bg-green-500', 'hover:shadow-xl', item.active ? 'bg-green-300' : item.bgColor]"
            class="h-28 md:h-40"
            @click="selectedItem(itemIndex, item.active)"
          )
            img(v-if="!item.disabled" :src="item.icon")
            div.mt-2.font-black.text-center(v-else) {{ item.title }}

    div.absolute.inset.h-full.transition-all.duration-500(
      v-for="(item, itemIndex) in content.items"
      :key="itemIndex"
      class="w-4/4 md:w-2/4 overflow-y-scroll"
      :class="`${item.bgColor} ${item.active ? 'item-transform-x-0' : 'item-transform-x-100'}`"
    )
      img.mb-4.w-full.object-cover(
        v-if="!item.disabled"
        :src="item.headImage"
        class="h-2/4"
      )
      div.p-5.text-white(v-if="!item.disabled")
        div.text-lg.font-bold {{ item.title }}
        div.mt-5(v-html="item.html")
        Gallery.my-6(:images="item.galleryImages")
        button.rounded-full(@click="item.active = false") Close

</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  components: {
    Gallery,
  },

  data() {
    return {
      content: {
        items: [
          {
            title: 'Cleaning Service',
            icon: 'https://img.icons8.com/external-linector-fill-linector/64/ffffff/external-cleaning-hotel-service-linector-fill-linector.png',
            bgColor: 'bg-blue-400',

            active: false,
            html: '<div class="mt-3">Kami memberikan pelayanan kebersihan, kerapihan dan higienisasi dari sebuah gedung/bangunan baik indoor ataupun outdoor sehingga tercipta suasana yang nyaman dalam menunjang aktivitas sehari-hari.</div><div class="mt-3">Dengan diberi keterampilan yang baik serta didukung dengan peralatan dan chemical yang sesuai dengan standar kebersihan hotel, kami optimis dapat memberikan layanan yang terbaik bagi para pelanggan kami.</div>',
            headImage: '/images/cleaning-service.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'General Cleaning',
            icon: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-cleaning-labour-day-vitaliy-gorbachev-lineal-vitaly-gorbachev.png',
            bgColor: 'bg-blue-300',

            active: false,
            html: '<div class="mt-3">BPI menyediakan pasukan petugas kebersihan guna melakukan pekerjaan pembersihan unit gedung, rumah, ruang-ruang secara menyeluruh dengan sistem treatment atau kontrak sesuai kebutuhan.</div>',
            headImage: '/images/general-cleaning.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
            ],
          },
          {
            title: 'Fasad',
            icon: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-gondola-travel-flatart-icons-outline-flatarticons.png',
            bgColor: 'bg-blue-400',

            active: false,
            html: '<div class="mt-3">BPI juga menyediakan tenaga ahli dalam gondola yg membuat menjadi lebih apik serta indah dipandang oleh mata</div>',
            headImage: '/images/gondola.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
            ],
          },
          {
            title: 'Landscape',
            icon: 'https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/ffffff/external-park-spring-photo3ideastudio-solid-photo3ideastudio.png',
            bgColor: 'bg-blue-300',

            active: false,
            html: '<div class="mt-3">BPI juga menyediakan tenaga ahli dalam menata landscape dan membuat suasana landscape menjadi lebih apik serta indah dipandang oleh mata</div>',
            headImage: '/images/landscape.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            disabled: true,
            title: 'OUR SERVICE',
            bgColor: 'bg-gray-400',
          },
          {
            title: 'Support Staff',
            icon: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-cleaning-stay-home-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png',
            bgColor: 'bg-blue-300',

            active: false,
            html: '<div class="mt-3">kami menyediakan pramukarya untuk menangani pekerjaan administrasi yang disesuaikan dengan kebutuhan bisnis anda</div>',
            headImage: '/images/office-boy.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'Pramukarya',
            icon: 'https://img.icons8.com/ios/50/ffffff/pottery-workshop.png',
            bgColor: 'bg-blue-400',

            active: false,
            html: '<div class="mt-3">kami menyediakan pramukarya untuk menangani pekerjaan administrasi yang disesuaikan dengan kebutuhan bisnis anda</div>',
            headImage: '/images/pramukarya.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'Pramusaji',
            icon: 'https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/ffffff/external-buffet-wedding-kmg-design-detailed-outline-kmg-design.png',
            bgColor: 'bg-blue-300',

            active: false,
            html: '<div class="mt-3">Kami menyediakan petugas pramusaji yang dapat ditempatkan di rumah makan, restoran atau kafe.</div>',
            headImage: '/images/pramusaji.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
            ],
          },
          {
            title: 'Security',
            icon: 'https://img.icons8.com/ios/50/ffffff/security-guard.png',
            bgColor: 'bg-blue-400',

            active: false,
            html: '<div class="mt-3">Kami menyediakan petugas keamanan yang dapat ditempatkan dilokasi untuk kenyamanan anda.</div>',
            headImage: '/images/pramusaji.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
            ],
          },
        ],
      },
    }
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },

  methods: {
    selectedItem(index, bool) {
      for (const item of this.content.items) {
        item.active = false
      }

      if (!('disabled' in this.content.items[index]))
        this.content.items[index].active = !bool
    },
  },
}
</script>

<style lang="scss" scoped>
.item-transform-x-0 {
  transform: translateX(0);
}
.item-transform-x-100 {
  transform: translateX(-100%);
}
</style>
