<template lang="pug">
  div.container.mx-auto
    div.mt-20.grid.gap-4.grid-cols-2
      img.h-full.object-cover(src="/images/contact.jpg")

      form.bg-white.border.rounded-lg.px-8.pt-6.pb-8
        div.mb-4
          label.block.text-gray-700.text-sm.font-bold.mb-2 Name
          input.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
            class="focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your name"
          )
        div.mb-4
          label.block.text-gray-700.text-sm.font-bold.mb-2 Email
          input.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
            class="focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your email"
          )
        div.mb-4
          label.block.text-gray-700.text-sm.font-bold.mb-2 Phone Number
          input.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
            class="focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your phone number"
          )
        div.mb-4
          label.block.text-gray-700.text-sm.font-bold.mb-2 Message
          textarea.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
            class="focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="What do you have in mind?"
          )

        div.flex.justify-between.items-center
          button.bg-primary.text-white.font-bold.py-2.px-4.rounded(
            class="hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          ) Submit

    div.mt-20.px-20
      h2.text-center Need help urgently?
      div.mt-10.grid.grid-cols-4.gap-10
        a.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
          href="tel:02122251127"
          @mouseover="tel1 = true"
          @mouseleave="tel1 = false"
        )
          b-icon(icon="telephone" font-scale="1.5")
          span(v-if="tel1") &emsp;Call Now
          span(v-else ) &emsp;021 22251127
        a.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
          href="tel:02122251128"
          @mouseover="tel2 = true"
          @mouseleave="tel2 = false"
        )
          b-icon(icon="telephone" font-scale="1.5")
          span(v-if="tel2") &emsp;Call Now
          span(v-else ) &emsp;021 22251128
        div.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
          @click="windowOpen('https://facebook.com/profile.php?id=140078712676242', '_blank')"
        )
          b-icon(icon="facebook" font-scale="1.5")
          span &emsp;Facebook
        a.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
          href="mailto:salessupport@bpioke.com"
          @mouseover="em = true"
          @mouseleave="em = false"
        )
          b-icon(icon="envelope" font-scale="1.5")
          span(v-if="em") &emsp;Send Email
          span(v-else ) &emsp;salessupport@bpioke.com

    //- div#mapbox.mt-20.px-20

    div.mt-20.mb-10.px-20
      h2.text-center Locations
      p.mt-2.mb-5.text-center We have comprehensive offices and branches to provide the best service for our clients.

      div.grid.grid-cols-2.gap-10
        LocationCard(
          v-for="(location, locationIndex) in locations"
          :locationName="location.locationName"
          :locationImage="location.locationImage"
          :gmapsURL="location.gmapsURL"
          :addressLines="location.addressLines"
        )

</template>

<script>
import LocationCard from '@/components/LocationCard.vue'

export default {
  components: {
    LocationCard,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },

      tel1: false,
      tel2: false,
      em: false,

      map: null,
      default_map: [106.6125053, -6.2189436],

      locations: [
        {
          locationName: 'Head office',
          locationImage: '/images/head-office.jpeg',
          gmapsURL: 'https://goo.gl/maps/UWxXf2Au4wWE4BH97',
          addressLines: [
            'PT . BANGUNPAPAN IDAMAN',
            '(021) 22251127',
            'Ruko CBD, Jl. Palem Jepang No.20, RT.001/RW.009, Panunggangan Bar., Kec. Cibodas, Kota Tangerang, Banten 15810',
          ],
        },
        {
          locationName: 'Branch office',
          locationImage: '/images/branch-office.jpeg',
          gmapsURL: 'https://goo.gl/maps/MsoS5WypYioV4sBA6',
          addressLines: [
            'Ruko Purnawirawan Regency No. 5',
            'Jl. Purnawirawan, Gunter, Bandar Lampung',
            'Telp. +62 852 1919 4454 | +62 821 8610 4844',
          ],
        },
      ],
    }
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)

    this.createMap()
  },

  methods: {
    windowOpen(url, opt) {
      /*
        for nuxt change windows location
      */
      if (url.includes('http')) opt = '_blank'
      window.open(url, opt)
    },

    createMap() {
      const mapboxgl = require('mapbox-gl')
      mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFuc2NhaHlhIiwiYSI6ImNrcmZwYmJ2ZzAyNTQyd28yanUzM202M2oifQ.6-GZtO1Ksq07GEF6hR0YgA'

      try {
        this.map = new mapboxgl.Map({
          container: 'mapbox',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.default_map,
          zoom: 10,
          scrollZoom: true,
          geocoder: false,
          attributionControl: false,
        })

        // set marker
        const el = document.createElement('div')
        el.style.backgroundImage = `url('/images/map-marker.png')`
        el.style.width = `40px`
        el.style.height = `40px`
        el.style.backgroundSize = 'contain'
        el.style.backgroundRepeat = 'no-repeat'
        el.style.backgroundPosition = 'center'

        const popup = new mapboxgl.Popup({ offset: 25 }).setText('Office')

        new mapboxgl.Marker(el)
          .setLngLat([106.6125053, -6.2189436])
          .setPopup(popup)
          .addTo(this.map)
      } catch (err) {
        console.debug('map error', err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#mapbox {
  margin-bottom: -6px;
  border: 0px;

  width: 100%;
  height: 500px;
}
</style>
