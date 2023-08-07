<template lang="pug">
  div.flex.flex-col
    HeroSlider(:items="content.slides")

    div.py-10.container.self-center(class="sm:px-10 md:px-20 lg:px-40")
      TwoColumnsContent(
        v-for="(item, itemIndex) in content.section1.items"
        :key="itemIndex"
        :layout="item.layout"
        :title="item.title"
        :paragraph="item.paragraph"
        :image="item.image"
        :link="item.link"
      )

    OneColumnContent(
      :title="content.section2.title"
      :paragraph="content.section2.paragraph"
      :image="content.section2.image"
      :bg-image="content.section2.bgImage"
      :button-link="content.section2.buttonLink"
      :button-text="content.section2.buttonText"
      :is-button-animate="true"
    )

    div.bg-lightgray
      div.py-10(class="sm:px-10 md:px-20 lg:px-40")
        div.text-4xl.font-bold.text-center Our Client
        InfiniteSlider.mt-10(:items="content.section3.items1")
      div.relative.grid.gap-2.text-center.z-20(
        class="pt-4 md:pt-14 px-3 md:px-28 grid-cols-2 md:grid-cols-4"
      )
        BadgeCard(
          v-for="(item, itemIndex) in content.section3.items2"
          class="mx-0 md:mx-4"
          :key="itemIndex"
          :label="item.label"
          :value="item.value"
          :icon="item.icon"
        )
      div.relative.pt-14.px-28.flex.justify-center.z-20(
        class="pb-10 md:pb-28"
      )
        img.mx-4(
          v-for="(item, itemIndex) in content.section3.items3"
          :key="itemIndex"
          :src="item.icon"
          class="w-20 md:w-28"
        )

    Gallery(:images="content.section4.images")

</template>

<script>
export default {
  data() {
    return {
      content: {
        slides: [
          {
            image: '/images/slider/slide-1.png',
          },
          {
            image: '/images/slider/slide-2.png',
          },
          {
            image: '/images/slider/slide-3.png',
          },
          {
            image: '/images/slider/slide-4.png',
          },
          {
            image: '/images/slider/slide-5.png',
          },
          {
            image: '/images/slider/slide-6.png',
          },
        ],
        section1: {
          items: [
            {
              title: 'PROFESSIONAL STAFF',
              paragraph:
                'PT.BPI memiliki Tim dan staf yang ahli di bidangnya, baik pekerja di lapangan maupun di backoffice, hal ini yang menjadikan PT.BPI tetap menjadi pilihan utama bagi customer PT.BPI.',
              image: '/images/IMG_3060.jpg',
              layout: 'default',
              link: '/',
            },
            {
              title: 'SAFETY & EXPERIENCE',
              paragraph:
                'Seluruh staf PT.BPI baik gondola, cleaning service, landscape, dll selalu mengedepankan keselamatan kerja dan memiliki pengalaman yang baik juga dibekali keterampilan dengan diadakannya training secara regular',
              image: '/images/gondola2.jpg',
              layout: 'reverse',
              link: '/',
            },
            {
              title: 'FAIR PRICES',
              paragraph:
                'Salah satu keunguglan BPI adalah dari sisi harga, harga yang ditawarkan kompetitif namun tetap menjaga kualitas layanan untuk skala enterprise',
              image: '/images/pexels-breakingpic-3305.jpg',
              layout: 'default',
              link: '/',
            },
          ],
        },
        // about us
        section2: {
          title: 'Tentang Kami',
          paragraph:
            'PT. Bangunpapan Idaman (BPI) adalah perusahaan yg bergerak dalam bidang spesialist penyedia jasa kebersihan (cleaning service) di indonesia.',
          image: '/images/logo.png',
          bgImage: '/images/IMG_2953.jpg',
          buttonLink: '/about-us',
          buttonText: 'Read More',
        },
        // clients
        section3: {
          items1: [
            {
              image: '/images/clients/adf.png',
            },
            {
              image: '/images/clients/bandara-city-mall.png',
            },
            {
              image: '/images/clients/bt-cocoa.png',
            },
            {
              image: '/images/clients/buwanatala-indah-permah.png',
            },
            {
              image: '/images/clients/green-bay-pluit.png',
            },
            {
              image: '/images/clients/green-lake-sunter.png',
            },
            {
              image: '/images/clients/its.png',
            },
            {
              image: '/images/clients/lippo-office-tower.png',
            },
            {
              image: '/images/clients/madison-park.png',
            },
            {
              image: '/images/clients/metro-park-residence.png',
            },
            {
              image: '/images/clients/pemkot-tangerang-selatan.png',
            },
            {
              image: '/images/clients/rs-pelni.png',
            },
            {
              image: '/images/clients/sdh.png',
            },
            {
              image: '/images/clients/smailing-tour.png',
            },
            {
              image: '/images/clients/tomang-tol-pasar-swalayan.png',
            },
            {
              image: '/images/clients/universitas-trisakti.png',
            },
            {
              image: '/images/clients/uph-1.png',
            },
            {
              image: '/images/clients/uph-2.png',
            },
            {
              image: '/images/clients/vimala-hills.png',
            },
            {
              image: '/images/clients/inner-city.png',
            },
            {
              image: '/images/clients/nifarro.png',
            },
            {
              image: '/images/clients/rs-bhaktiasih.png',
            },
            {
              image: '/images/clients/siloam-hospitals.png',
            },
            {
              image: '/images/clients/rs-mulya.png',
            },
            {
              image: '/images/clients/bay-walk.png',
            },
            {
              image: '/images/clients/gading-mediterania.png',
            },
            {
              image: '/images/clients/athalia.png',
            },
            {
              image: '/images/clients/bandara-city.png',
            },
            {
              image: '/images/clients/atlanta.png',
            },
          ],

          bgImage: '/images/slider/pool_cleaning.jpg',
          items2: [
            {
              icon: 'https://img.icons8.com/fluency-systems-regular/48/000000/conference-background-selected.png',
              icon2x:
                'https://img.icons8.com/fluency-systems-regular/96/000000/conference-background-selected.png',
              label: 'Karyawan',
              value: 3000,
            },
            {
              icon: 'https://img.icons8.com/fluency-systems-regular/48/000000/place-marker--v1.png',
              icon2x:
                'https://img.icons8.com/fluency-systems-regular/96/000000/place-marker--v1.png',
              label: 'Area',
              value: 53,
            },
            {
              icon: 'https://img.icons8.com/fluency-systems-regular/48/000000/project.png',
              icon2x:
                'https://img.icons8.com/fluency-systems-regular/96/000000/project.png',
              label: 'Project Berjalan',
              value: 55,
            },
            {
              icon: 'https://img.icons8.com/fluency-systems-regular/48/000000/prize.png',
              icon2x:
                'https://img.icons8.com/fluency-systems-regular/96/000000/prize.png',
              label: 'Penghargaan',
              value: 12,
            },
          ],
          items3: [
            {
              icon: '/images/iso-9001-logo.png',
              label: 'Quality Management System',
            },
            {
              icon: '/images/iso-14001-logo.png',
              label: 'Environmental management system',
            },
            {
              icon: '/images/iso-45001-logo.png',
              label: 'Occupational Health & safety management System',
            },
            {
              icon: '/images/kadin.png',
              label: 'Kamar Dagang Indonesia',
            },
            {
              icon: '/images/abujapi.png',
              label: 'Asosiasi Badan Usaha Jasa Pengamanan',
            },
          ],
        },
        // gallery
        section4: {
          images: [
            '/images/gallery/IMG_3060.jpg',
            '/images/gallery/IMG_2982.jpg',
            '/images/gallery/IMG_3407.jpg',
            '/images/gallery/IMG_3043.jpg',
            '/images/gallery/IMG_3450.jpg',
            '/images/gallery/IMG_2973.jpg',
            '/images/gallery/IMG_2971.jpg',
            '/images/gallery/IMG_3107.jpg',
            '/images/gallery/IMG_3069.jpg',
            '/images/gallery/IMG_3383.jpg',
            '/images/gallery/IMG_3267.jpg',
            '/images/gallery/IMG_3401.jpg',
            '/images/gallery/IMG_3229.jpg',
            '/images/gallery/IMG_3124.jpg',
            '/images/gallery/IMG_3281.jpg',
            '/images/gallery/IMG_3355.jpg',
          ],
        },
      },
    }
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>

<style lang="scss" scoped></style>
