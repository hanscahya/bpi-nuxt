/* eslint-disable no-console */

// import { gsap, Power4 } from 'gsap/dist/gsap'
import smoothscroll from 'smoothscroll-polyfill'

export default {
  methods: {
    convertToIDR(number) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number)
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    forceRerender() {
      /*
        add componentKey -> to data
        add :key="componentKey" -> to component

        use forceRerender() to rerender the component
      */
      this.componentKey += 1
    },

    // try lodash
    // isObjectEmpty(obj) {
    //   for (const prop in obj) {
    //     if (obj.hasOwnProperty(prop)) return false
    //   }

    //   return JSON.stringify(obj) === JSON.stringify({})
    // },

    removeLastSlash(url) {
      const t = url.split('/')
      t.pop()
      return t.join('/')
    },

    scrollToTop() {
      smoothscroll.polyfill() // fix bug on Safari, IE, Edge
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    stringToSnake(string) {
      if (string) {
        const a = string.toLowerCase()
        const b = a.split(' ')
        let c = a

        if (b.length > 0) c = b.join('-')
        return c
      } else return null
    },

    snakeToString(snake, separator) {
      let a
      const words = snake.split(separator)

      if (words.length === 0) a = snake
      else {
        for (const [i, word] of words.entries()) {
          words[i] = this.capitalizeFirstLetter(word)
        }
        a = words.join(' ')
      }

      return a
    },

    windowOpen(url, opt) {
      /*
        for nuxt change windows location
      */
      if (url.includes('http')) opt = '_blank'
      window.open(url, opt)
    },

    // API Request
    async fetchJSON(endpoint) {
      try {
        const json = await this.$axios.get(endpoint)
        if (!json) throw new Error(json.data.message)
        else return json.data
      } catch (error) {
        // API request fatal error
        console.log(error)
        this.setGlobalAlert(
          'Sorry, we failed to load content...',
          'error',
          8000
        )
      }
    },
  },
}
