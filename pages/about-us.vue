<template lang="pug">
  div.flex.flex-col
    OneColumnContent(
      v-if="content"
      :title="content.section1.title"
      :paragraph="content.section1.paragraph"
      :image="content.section1.image"
      :bg-image="content.section1.bgImage"
      :button-link="content.section1.buttonLink"
      :button-text="content.section1.buttonText"
    )

    div.py-10.container.self-center(class="sm:px-10 md:px-20 lg:px-40")
      TwoColumnsContent(
        v-for="(item, itemIndex) in content.section2.items"
        :key="itemIndex"
        :layout="item.layout"
        :title="item.title"
        :paragraph="item.paragraph"
        :link="item.link"
        :image="item.image"
      )

    LargeProfile.px-20.py-10(
      :title="content.section3.highlight.title"
      :paragraph="content.section3.highlight.paragraph"
      :button-1-text="content.section3.highlight.button1Link"
      :button-1-link="content.section3.highlight.button1Text"
      :button-2-text="content.section3.highlight.button2Link"
      :button-2-link="content.section3.highlight.button2Text"
      :image="content.section3.highlight.image"
    )

    ThumbnailProfile.mb-10(
      :items="content.section3.items.slice(1, 5)"
    )

</template>

<script>
import main from '@/mixins/main.js'

import profile from '@/content/profile.json'

import OneColumnContent from '@/components/OneColumnContent.vue'
import TwoColumnsContent from '@/components/TwoColumnsContent.vue'
import LargeProfile from '@/components/LargeProfile.vue'
import ThumbnailProfile from '@/components/ThumbnailProfile.vue'

export default {
  components: {
    OneColumnContent,
    TwoColumnsContent,
    LargeProfile,
    ThumbnailProfile,
  },
  mixins: [main],

  data() {
    return {
      content: {
        section1: {
          title: 'Tentang Kami',
          paragraph:
            'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
          image: '/icons/group.png',
          bgImage: '/images/about-us.jpg',
          buttonLink: '/',
          buttonText: 'Read More',
        },
        section2: {
          items: [
            {
              title: 'Visi',
              paragraph:
                'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
              image: '/images/about-us-a.jpg',
              layout: 'default',
              link: '/',
            },
            {
              title: 'Misi',
              paragraph:
                'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
              image: '/images/about-us-b.jpg',
              layout: 'reverse',
              link: '/',
            },
          ],
        },
        section3: {
          highlight: {
            title: 'Sambutan Direktur Utama',
            paragraph:
              'Excepteur ea nostrud occaecat in do quis consequat aliquip sit tempor esse. Duis nisi elit id consectetur ullamco quis voluptate incididunt dolor reprehenderit sunt ad. Sint deserunt nulla et exercitation ipsum consequat non reprehenderit adipisicing non.',
            button1Link: '/',
            button1Text: 'Baca Selengkapnya',
            button2Link: '/',
            button2Text: 'Lihat Profil Direktur',
            image:
              'https://im3-img.indosatooredoo.com/dataprod/portalcontent/portal/images/metaimages/637391772578405884.png',
          },
          items: [],
        },
      },
    }
  },

  mounted() {
    const response = profile
    console.log(response)
    this.content.section3.items = response

    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>

<style lang="scss" scoped></style>
