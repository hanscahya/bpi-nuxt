<template lang="pug">
  div.flex.flex-col
    div.mt-10.grid.grid-cols-1(class="md:grid-cols-2")
      client-only
        FitVideo
      div.p-5.flex.flex-col.justify-center(
        class="col-span-2 md:col-span-1 items-center md:items-start text-center md:text-left"
      )
        div.text-3xl.font-black Tentang BPI
        div.mt-3.text-lg(class="w-10/12") Pengalaman dalam bidang standar kebersihan hotel membuat BPU menjadi perusahaan terbaik

    div.mx-auto.my-10.text-center(class="w-10/12")
      div.text-sm.font-black.text-blue-400 PT. Bangunpapan Idaman (BPI)
      div.mt-5.leading-loose Perusahaan yg bergerak dalam bidang spesialist penyedia jasa kebersihan (cleaning service) di Indonesia. Yg mana saat ini memiliki jumlah pekerja lebih dari 3000 pekerja. Berdasarkan dengan akta pendirian perusahaan, PT. Bangunpapan Idaman (BPI) resmi didirikan pada tanggal 04 Agustus 2006. BPI sudah memiliki pengalaman lebih dari satu dekade menjadi partner setia klien-klien kami baik dari Apartemen, Perkantoran, RS, Pabrik, universitas, sekolah, pusat perbelanjaan dll, sejak pertama kali didirikan Di tahun 2006, selama 14 tahun beroperasi, BPI telah menjadi salah satu perusahaan penyedia layanan fasilitas yg profesional & mengutamakan kepuasan klien klien kami serta didukung dengan Sumber daya manusia yg dapat diandalkan & berlandaskan kejujuran & profesionalitas.

    div.py-10.container.self-center(class="px-0 md:px-20 lg:px-40")
      TwoColumnsContent(
        v-for="(item, itemIndex) in content.section2.items"
        :key="itemIndex"
        :layout="item.layout"
        :title="item.title"
        :paragraph="item.paragraph"
        :link="item.link"
        :image="item.image"
      )

    LargeProfile.py-10(
      class="px-10 md:px-20 lg:px-40"
      :label="content.section3.highlight.label"
      :title="content.section3.highlight.title"
      :paragraph="content.section3.highlight.paragraph"
      :button1Link="content.section3.highlight.button1Link"
      :button1Text="content.section3.highlight.button1Text"
      :button2Link="content.section3.highlight.button2Link"
      :button2Text="content.section3.highlight.button2Text"
      :image="content.section3.highlight.image"
      @click="$router.push(`/profile/${content.section3.highlight.id}`)"
    )

    div.mx-auto.my-10.p-5.text-center
      div.text-sm.font-black.text-blue-400 Jajaran Pimpinan
    ThumbnailProfile.mb-10(
      :items="content.section3.items.filter((item) => item.group === 'jajaran-pimpinan')"
    )

    div.mx-auto.my-10.p-5.text-center
      div.text-sm.font-black.text-blue-400 Manager
    ThumbnailProfile.mb-10(
      :items="content.section3.items.filter((item) => item.group === 'manager')"
    )

    //- div.mx-auto.my-10.p-5.text-center
    //-   div.text-sm.font-black.text-blue-400 Dokter Perusahaan
    //- ThumbnailProfile.mb-10(
    //-   :items="content.section3.items.filter((item) => item.group === 'dokter-perusahaan')"
    //- )

</template>

<script>
import main from '@/mixins/main.js'

import profile from '@/content/profile.json'

import OneColumnContent from '@/components/OneColumnContent.vue'
import TwoColumnsContent from '@/components/TwoColumnsContent.vue'
import LargeProfile from '@/components/LargeProfile.vue'
import ThumbnailProfile from '@/components/ThumbnailProfile.vue'
import FitVideo from '@/components/FitVideo.vue'

export default {
  components: {
    OneColumnContent,
    TwoColumnsContent,
    LargeProfile,
    ThumbnailProfile,
    FitVideo,
  },
  mixins: [main],

  data() {
    return {
      content: {
        section1: {
          title: 'Tentang Kami',
          paragraph:
            'PT. Bangunpapan Idaman (BPI) adalah perusahaan yg bergerak dalam bidang spesialist penyedia jasa kebersihan (cleaning service) di Indonesia. Yg mana saat ini memiliki jumlah pekerja lebih dari 3000 pekerja. Berdasarkan dengan akta pendirian perusahaan, PT. Bangunpapan Idaman (BPI) resmi didirikan pada tanggal 04 Agustus 2006. BPI sudah memiliki pengalaman lebih dari satu dekade menjadi partner setia klien-klien kami baik dari Apartemen, Perkantoran, RS, Pabrik, universitas, sekolah, pusat perbelanjaan dll, sejak pertama kali didirikan Di tahun 2006, selama 14 tahun beroperasi, BPI telah menjadi salah satu perusahaan penyedia layanan fasilitas yg profesional & mengutamakan kepuasan klien klien kami serta didukung dengan Sumber daya manusia yg dapat diandalkan & berlandaskan kejujuran & profesionalitas.',
          image: '/images/logo.png',
          bgImage: '/images/slider/cs.jpg',
          buttonLink: '/',
          buttonText: 'Read More',
        },
        section2: {
          items: [
            {
              title: 'Visi',
              paragraph:
                'MENJADI PERUSAHAAN PELAYANAN TERBAIK YANG MENJUNJUNG TINGGI PROFESIONALISME',
              image: '/images/about/pexels-fauxels-3184431.jpg',
              layout: 'default',
              link: '/',
            },
            {
              title: 'Misi',
              paragraph:
                '<ul class="list-decimal pl-5"><li>Menyediakan Pelayanan Kebersihan dan Keamanan yang Dapat Diandalkan</li><li>Melaksanakan Budaya Kerja yang Berlandaskan Kejujuran dan Profesionalisme</li><li>Meningkatkan dan Mengembangkan Kompetensi Sumber Daya Manusia</li></ul>',
              image: '/images/about/pexels-laura-tancredi-7078666.jpg',
              layout: 'reverse',
              link: '/',
            },
          ],
        },
        section3: {
          highlight: {
            label: 'Founder & CEO',
            title: 'Sambutan Direktur Utama',
            paragraph:
              '<b class="text-lg">H. Purnomo Hadisaputro</b><br /> Dengan mengucapkan puji syukur kepada Tuhan yang Maha Esa serta dengan hormat kami haturkan terima kasih, kepada para relasi serta klien kami yang telah percaya menggunakan Jasa PT. Bangunpapan Idaman (BPI) sejak tahun 2006 hingga saat ini berdiri dengan kokoh.<br /> <br />Dalam satu dekade PT. Bangun Idaman (BPI) telah tumbuh menjadi perusahaan spesialist penyedia jasa kebersihan dan keamanan atau human capital resources provider yang telah memiliki banyak pengalaman di berbagai sektor industri di Indonesia.',
            button1Link: '/profile/h-purnomo-hadisaputro',
            button1Text: 'Baca Selengkapnya',
            button2Link: '',
            button2Text: 'Lihat Profil Direktur',
            image: '/images/profile/h-purnomo-hadisaputro.jpg',
          },
          items: [],
        },
      },
    }
  },

  mounted() {
    const response = profile.filter((item) => item.group !== 'founder')
    this.content.section3.items = response

    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>
