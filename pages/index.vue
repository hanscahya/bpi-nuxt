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

    //- div.container.self-center(class="sm:px-10 md:px-20 lg:px-40")
    OneColumnContent(
      :title="content.section2.title"
      :paragraph="content.section2.paragraph"
      :image="content.section2.image"
      :bg-image="content.section2.bgImage"
      :button-link="content.section2.buttonLink"
      :button-text="content.section2.buttonText"
    )

    //- div.relative.bg-center(:style="{ 'background-image': `url('${content.section3.bgImage}')` }")
      div.absolute.inset-0.bg-gray-400.bg-opacity-50.z-10
    div.bg-gray-200
      div.py-10(class="sm:px-10 md:px-20 lg:px-40")
        div.text-4xl.font-bold.text-center Our Client
        InfiniteSlider.mt-10(:items="content.section3.items1")
      div.relative.pt-14.pb-28.flex.justify-center.items-center.text-center.z-20
        BadgeCard.mx-4(
          v-for="(item, itemIndex) in content.section3.items2"
          :key="itemIndex"
          :label="item.label"
          :value="item.value"
          :icon="item.icon"
        )
    
    Gallery(:images="content.section4.images")

</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue'
import OneColumnContent from '@/components/OneColumnContent.vue'
import TwoColumnsContent from '@/components/TwoColumnsContent.vue'
import InfiniteSlider from '@/components/InfiniteSlider.vue'
import BadgeCard from '@/components/BadgeCard.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  components: {
    HeroSlider,
    OneColumnContent,
    TwoColumnsContent,
    InfiniteSlider,
    BadgeCard,
    Gallery,
  },

  data() {
    return {
      content: {
        slides: [
          {
            image: '/images/slider/cs.jpg',
            title: 'title 1',
            subtitle: 'subtitle 1',
            paragraph:
              'Culpa sunt in cupidatat quis eu nisi pariat e minim deserunt ut magna occaur.',
            link: '',
          },
          {
            image: '/images/slider/vim.jpg',
            title: 'title 2',
            subtitle: 'subtitle 2',
            paragraph:
              'Qui commodo sint id sunt do sunt ipsum aliquip minim dolore excepteur.',
            link: '',
          },
          {
            image: '/images/slider/tech.jpg',
            title: 'title 3',
            subtitle: 'subtitle 3',
            paragraph:
              'Ad excepteur sint mollit irure minim deserunt ut magna occaecat ut est occaecat.',
            link: '',
          },
          {
            image: '/images/slider/pool_cleaning.jpg',
            title: 'title 4',
            subtitle: 'subtitle 4',
            paragraph:
              'Minim ea duis reprehenderit officia pariatur aliqua Lorem consequat nostrud.',
            link: '',
          },
          {
            image: '/images/slider/management.jpg',
            title: 'title 5',
            subtitle: 'subtitle 5',
            paragraph:
              'Amet irure amet sit commodo aliquip proident occaecat id ullamco ex quis consequat.',
            link: '',
          },
        ],
        section1: {
          items: [
            {
              title: 'Test 1',
              paragraph:
                'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
              image: 'https://via.placeholder.com/600x400',
              layout: 'default',
              link: '/',
            },
            {
              title: 'Test 2',
              paragraph:
                'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
              image: 'https://via.placeholder.com/600x400',
              layout: 'reverse',
              link: '/',
            },
            {
              title: 'Test 3',
              paragraph:
                'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
              image: 'https://via.placeholder.com/600x400',
              layout: 'default',
              link: '/',
            },
          ],
        },
        section2: {
          title: 'Test',
          paragraph:
            'Ipsum ut incididunt aliqua officia anim sint magna laborum. Est reprehenderit occaecat aute ad voluptate id do aliqua sit commodo labore cillum aliquip ullamco.',
          image: '/images/blank-img.png',
          bgImage: '/images/slider/cs.jpg',
          buttonLink: '/',
          buttonText: 'Read More',
        },
        section3: {
          items1: [
            {
              image: 'https://via.placeholder.com/150',
            },
            {
              image: 'https://via.placeholder.com/150',
            },
            {
              image: 'https://via.placeholder.com/150',
            },
            {
              image: 'https://via.placeholder.com/150',
            },
            {
              image: 'https://via.placeholder.com/150',
            },
            {
              image: 'https://via.placeholder.com/150',
            },
          ],

          bgImage: '/images/slider/pool_cleaning.jpg',
          items2: [
            {
              icon: '/icons/item-1.png',
              icon2x: '/icons/item-1@2x.png',
              label: 'Item 1',
              value: 999,
            },
            {
              icon: '/icons/item-2.png',
              icon2x: '/icons/item-2@2x.png',
              label: 'Item 2',
              value: 999,
            },
            {
              icon: '/icons/item-3.png',
              icon2x: '/icons/item-3@2x.png',
              label: 'Item 3',
              value: 999,
            },
            {
              icon: '/icons/item-4.png',
              icon2x: '/icons/item-4@2x.png',
              label: 'Item 4',
              value: 999,
            },
          ],
        },
        section4: {
          images: [
            'https://i.picsum.photos/id/674/640/420.jpg?hmac=n5l7xFT7zjIv5ejnqiG5ksHH2Zc95k9AVwJyGdf_Vl8',
            'https://i.picsum.photos/id/528/640/420.jpg?hmac=P912tKq-jKdwcxeme64BoomF8q378DmAPpGUJ5U0AM4',
            'https://i.picsum.photos/id/690/640/420.jpg?hmac=eo59FquhyC3lRoXODCqTn7-37JozRWF1VTaUCPhuYnA',
            'https://i.picsum.photos/id/939/640/420.jpg?hmac=ZFIJ6FYzn6xvSqCncCeFQai-_R1CnVRLieRRV5nHCPw',
            'https://i.picsum.photos/id/558/640/420.jpg?hmac=07ldQaPdXSF3kYX5eN9N_LR4q-zDe-i54DLkSdS0hng',
            'https://i.picsum.photos/id/3/640/420.jpg?hmac=FPwYL8kz_tv2AzushPSOhBNTyoEqBf_iU8KfFf98aqQ',
            'https://i.picsum.photos/id/591/640/420.jpg?hmac=E1Vw6ABx9Vp0aJYG0A-TsaDlKM1yzxiv4vYFfpYh5FQ',
            'https://i.picsum.photos/id/786/640/420.jpg?hmac=fF1nNib62KmAmidSAI2BaPTydl-FsB9doo6ivg7XW0I',
            'https://i.picsum.photos/id/1049/640/420.jpg?hmac=AC04VwO-w7Nm4dTtwvcc0Vog9vZshNujiOhFBSAS1ds',
            'https://i.picsum.photos/id/931/640/420.jpg?hmac=mMEyApSbejr-BDgaCpHQHlnVABbNivzy-wy1dtJ5mn0',
            'https://i.picsum.photos/id/909/640/420.jpg?hmac=yCkI4EYSn2LYAp4uLJoiHApjduFDIMBbY7l-UPueJNg',
            'https://i.picsum.photos/id/218/640/420.jpg?hmac=i008w8-9NZ7Z-x3yIan5f-4qUNMdH44tHuIpR2GPrWs',
          ],
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
