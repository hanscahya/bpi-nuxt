<template lang="pug">
  div(v-if="content")
    div.container.mt-20.mx-auto.grid.grid-cols-8.gap-8
      img.col-span-2.col-start-2(:src="content.image")
      div.col-span-4
        div.text-xl.font-extrabold {{ content.name }}
        div.text-md.font-semibold.text-gray-800 {{ content.label }}
        div.mt-4(v-html="content.html1")

      div.col-span-6.col-start-2(v-html="content.html2")

    div.mx-auto.my-10.p-5.text-center
      div.text-sm.font-black.text-blue-400 Profil Lainnya
      ThumbnailProfile.mb-10(
        :items="relatedItems.slice(0, 3)"
      )

</template>

<script>
import main from '@/mixins/main.js'

import profile from '@/content/profile.json'

export default {
  mixins: [main],

  data() {
    return {
      content: null,
      relatedItems: [],
    }
  },

  async mounted() {
    if (!this.$route.params.id)
      return this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })
    else {
      const responseContent = await this.getContent()
      if (responseContent.length > 0) {
        this.content = responseContent[0]
        this.getRelatedProfile()
      } else
        return this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })

      setTimeout(() => {
        this.$store.commit('setLoading', false)
      }, 200)
    }
  },

  methods: {
    getContent() {
      const index = this.$route.params.id
      const response = profile

      return response.filter((c) => c.id === index)
    },
    getRelatedProfile() {
      this.relatedItems = []
      if (this.content.related)
        this.content.related.forEach((id) => {
          this.relatedItems.push(profile.find((p) => p.id === id))
        })
    },
  },
}
</script>
