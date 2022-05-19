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
      div.relative.pt-14.px-28.grid.grid-cols-4.gap-2.text-center.z-20
        BadgeCard.mx-4(
          v-for="(item, itemIndex) in content.section3.items2"
          :key="itemIndex"
          :label="item.label"
          :value="item.value"
          :icon="item.icon"
        )
      div.relative.pt-14.pb-28.px-28.flex.justify-center.z-20
        img.mx-4(
          v-for="(item, itemIndex) in content.section3.items3"
          :key="itemIndex"
          :src="item.icon"
          width="150px"
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
            image: '/images/slider/sekolah.jpg',
            title: 'GENERAL CLEANING SERVICE SOLUTIONS',
            subtitle: 'PT. Bangunpapan Idaman',
            paragraph:
              'PT. Bangunpapan Idaman menyediakan pelayanan kebersihan mulai dari:OB, Waitress, General Cleaning, dll..',
            link: '',
          },
          {
            image: '/images/slider/rumah_sakit.jpg',
            title: 'GREAT STAFF AND BACK OFFICE SUPPORT',
            subtitle: 'PT. Bangunpapan Idaman',
            paragraph:
              'PT. Bangunpapan Idaman memiliki staff yang handal untuk mendukung operasional perusahaan, penanganan komplain, serta memiliki sistem enterprise guna menunjang operasional perusahaan.',
            link: '',
          },
          {
            image: '/images/slider/staff-welcoming.jpg',
            title: 'Great Corporate Client',
            subtitle: 'PT. Bangunpapan Idaman',
            paragraph:
              'PT. Bangunpapan Idaman memiliki klien yang tersebar di daerah Jabodetabek. Mulai dari perusahaan, rumah sakit, kampus, pabrik, hingga ke perumahan elit.',
            link: '',
          },
          {
            image: '/images/slider/gardener.jpg',
            title: 'Technician Ready',
            subtitle: 'PT. Bangunpapan Idaman',
            paragraph:
              'PT. Bangunpapan Idaman memiliki teknisi yang siap sedia didalam melakukan pemeliharaan peralatan cleaning. Petugas standby selama jam kerja dan siap melakukan on site support untuk area yang membutuhkan penanganan teknis.',
            link: '',
          },
        ],
        section1: {
          items: [
            {
              title: 'PROFESSIONAL STAFF',
              paragraph:
                'BPI memiliki staf yang ahli di bidangnya guna menjalankan kegiatan operasional kantor sehari-hari seperti accounting, pajak, hrd, dll',
              image: '/icons/professional-staff.jpg',
              layout: 'default',
              link: '/',
            },
            {
              title: 'SAFETY & EXPERIENCE',
              paragraph:
                'Semua staf cleaner, gondola, landscape, dll memiliki pengalaman yang baik dan dibekali keterampilan dengan dilakukan training secara regular',
              image: '/icons/safety-experience.jpg',
              layout: 'reverse',
              link: '/',
            },
            {
              title: 'FAIR PRICES',
              paragraph:
                'Selain tenaga ahli, BPI memiliki kelebihan dari segi sisi harga, harga yang kami tawarkan kompetitif serta berkualitas untuk skala enterprise',
              image: '/icons/fair-prices.jpg',
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
          bgImage: '/images/slider/cs.jpg',
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
