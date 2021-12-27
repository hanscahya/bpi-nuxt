<template lang="pug">
  div(v-if="content")
    div.container.mt-20.mx-auto.grid.grid-cols-8.gap-8
      img.col-span-2.col-start-2(:src="content.image")
      div.col-span-4
        div.text-xl.font-extrabold {{ content.name }}
        div.text-md.font-semibold.text-gray-800 {{ content.label }}
        div.mt-4 {{ content.html1 }}

      div.col-span-6.col-start-2 {{ content.html2 }}

</template>

<script>
import main from '@/mixins/main.js'

export default {
  mixins: [main],

  data() {
    return {
      content: null,
    }
  },

  async mounted() {
    if (!this.$route.params.id)
      return this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })
    else {
      const responseContent = await this.getContent()
      if (responseContent.length > 0) this.content = responseContent[0]
      else
        return this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })

      setTimeout(() => {
        this.$store.commit('setLoading', false)
      }, 200)
    }
  },

  methods: {
    async getContent() {
      const index = parseInt(this.$route.params.id)
      const response = await this.fetchJSON(`/json/profile/index.json`)

      return response.filter((c) => c.id === index)
    },
  },
}
</script>
