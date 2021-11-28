import { gsap, Power4 } from 'gsap/dist/gsap';
import smoothscroll from 'smoothscroll-polyfill';

export default {
  methods: {
    // hc.js
    convertToIDR(number) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number);
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    forceRerender() {
      /*
        add componentKey -> to data
        add :key="componentKey" -> to component

        use forceRerender() to rerender the component
      */
      this.componentKey += 1;
    },
    isObjectEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return false;
      }
    
      return JSON.stringify(obj) === JSON.stringify({});
    },
    removeLastSlash(url) {
      let t = url.split('/');
      t.pop();
      return t.join('/');
    },
    setGlobalAlert(message, theme, duration) {
      if (typeof message === 'string') message = this.capitalizeFirstLetter(message);

      this.$bvToast.toast(
        message || 'Sorry, we have a problem',
        {
          // title: `Toaster ${toaster}`,
          toaster: 'b-toaster-top-center',
          bodyClass: ['tr--toast', theme || 'warning'],
          autoHideDelay: duration || 4000,
          noCloseButton: true,
          solid: true
        }
      );
    },
    scrollToTop() {
      smoothscroll.polyfill(); // fix bug on Safari, IE, Edge
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    stringToSnake(string) {
      if (string) {
        let a = string.toLowerCase();
        let b = a.split(' ');
        let c = a;

        if (b.length > 0) c = b.join('-');
        return c;
      }
      else return null;
    },
    snakeToString(snake, separator) {
      let a;
      let words = snake.split('_');

      if (words.length === 0) a = snake;
      else {
        for (let [i, word] of words.entries()) {
          words[i] = this.capitalizeFirstLetter(word);
        }
        a = words.join(' ');
      }

      return a;
    },
    windowOpen(url, opt) {
      /*
        for nuxt change windows location
      */
      if (url.includes('http')) opt = '_blank';
      window.open(url, opt);
    },


    // API Request
    async fetchContent(endpoint) {
      try {
        let response = await this.$axios.get(`${window.location.origin}${endpoint}`);
        // console.log(response);

        // error
        if (response.status !== 200) throw new Error(response.data.message);

        // success
        else return response.data.data;

      } catch (error) {
        // API request fatal error
        console.log(error);
        this.setGlobalAlert('Sorry, we encounter some error...', 'error', 8000);
      }
    },
    async sendEmail(form, feedback) {
      // validation
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(form.email).toLowerCase())) {
        this.setGlobalAlert('Email format invalid...');
      }
      
      // send email
      else {
        try {
          const response = feedback ?  await this.$axios.post('/formnewsletter', form) :
            await this.$axios.post('/formnewsletter/send-email', form);
  
          if (!response.data.success) {
            throw new Error(response.data.message);
          } else {
            this.setGlobalAlert('Thank you for your submission. We\'ll be contact you soon!');
            location.reload();
          }
        } catch (error) {
          this.setGlobalAlert('Opps, an error occured. Please try again later...');
        }
      }
    }
  }
}
