<template lang="pug">
  div(v-if="content")
    div.container.mx-auto.grid.grid-cols-4.gap-8
      div
        img(:src="content.image")
      div.col-span-3 {{ content.html1 }}
    
    div.container.mx-auto.text-center {{ content.html2 }}

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
    console.log(this.$route.params)

    if (!this.$route.params.id)
      return this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })
    else {
      const response = await this.fetchJSON(
        `/json/profile/${this.$route.params.id}.json`
      )
      this.content = response

      setTimeout(() => {
        this.$store.commit('setLoading', false)
      }, 200)
    }
  },
}
</script>
