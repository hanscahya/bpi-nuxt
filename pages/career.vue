<template lang="pug">
  div
    div
      //- hero
      img.mb-4.w-full.object-cover.object-top(src="/images/career.jpg" style="height: 600px")

    div.container.mt-10.mx-auto
      //- filter
      div(v-if="!_.isEmpty(content.body)")
        div.my-3.text-center.text-2xl.font-bold {{ content.body.title }}
        div.mt-8.grid.grid-cols-4(
          md:grid-cols-6
          xl:grid-cols-8
        )
          div.px-3.col-start-2(cols="12" md="6" lg="4")
            label.block.text-gray-700.text-sm.font-bold.mb-2 Position
            b-form-input.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
              v-model="search.position"
              v-debounce:500="filterJob"
              class="focus:outline-none focus:shadow-outline"
              placeholder="E.g. Senior Engineer"
              autocomplete="off"
            )
          div.px-3(cols="12" md="6" lg="4")
            label.block.text-gray-700.text-sm.font-bold.mb-2 Department
            b-form-select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(
              v-model="search.department"
              :options="department_options"
              class="focus:outline-none focus:shadow-outline"
              @change="filterJob()"
            )
    
      //- jobs
      div.section-3.grid.grid-cols-6(v-if="!_.isEmpty(content.body.jobs)")
        div.col-span-4.col-start-2
          div.p-5.text-center(v-if="content.body.jobs.length === 0") No job found...
          div.grid.grid-cols-6(v-else)
            div.p-3.col-span-3(
              v-for="(job, jobIndex) in filteredJobs"
              :key="jobIndex"

              cols="12"
              md="6"
              lg="5"
            )
              div.item-wrapper
                div.mb-3
                  div.title(v-html="job.title")
                  div.department(v-html="job.department")
                  div.location(v-html="job.location")
                b-button.apply-job-btn(@click="popup = true, popup_content = job") APPLY JOB

      //- POPUP
      div.custom-popup(
        :class="{ active: popup }"
        @keydown.esc="popup = false"
      )
        div.popup-backdrop(@click="popup = false")
        b-container.popup-body(v-if="!_.isEmpty(popup_content)")
          b-row
            b-col.d-flex.align-items-center
              h5(v-html="popup_content.title")
            //- b-col.text-right
              b-button.apply-now-btn(@click="windowOpen(popup_content.link, '_self')") APPLY NOW
              div Send your application here:
              a(href="mailto:hc.recruitment@aladinbank.id") hc.recruitment@aladinbank.id

          b-row.mt-3
            b-col(cols="6" md="4" lg="3")
              h6 Location
              p(v-html="popup_content.location")
            b-col(cols="6" md="4" lg="3")
              h6 Department
              p(v-html="popup_content.department")
            b-col(cols="6" md="4" lg="3")
              h6 Level
              p(v-html="popup_content.level")
            b-col(lg="3")
            b-col(cols="6" md="4" lg="3")
              h6 Years of experience
              p(v-html="popup_content.years_of_experience")
            b-col(cols="6" md="4" lg="3")
              h6 Job type
              p(v-html="popup_content.job_type")
            b-col(cols="6" md="4" lg="3")
              h6 Qualification
              p(v-html="popup_content.qualification")
          b-row.mt-3
            b-col
              div(v-if="popup_content.description")
                h6 About the Job
                p(v-html="popup_content.description")
              div(v-if="popup_content.responsibilities")
                h6 Responsibilities
                p(v-html="popup_content.responsibilities")
              div(v-if="popup_content.requirement")
                h6 Requirement
                p(v-html="popup_content.requirement")

          b-row
            b-col.text-center
              b-button.apply-now-btn(@click="windowOpen('https://forms.gle/6NuQy92uKzocT1c17', '_self')") APPLY NOW
              div.mt-3
                span.cursor-pointer(@click="popup = false") Close

</template>

<script>
import main from '@/mixins/main'
import content from '@/content/career.json'

export default {
  mixins: [main],
  transition: 'fade',

  data() {
    return {
      filteredJobs: [],

      department_options: ['All Department', 'Technology', 'Digital Banking'],
      search: {
        position: '',
        department: 'All Department',
      },

      // custom popup
      popup: false,
      popup_content: {},
    }
  },

  head() {
    return {
      title: this.content ? this.content.page_title : '',
      titleTemplate: this.content ? 'Aladin Bank | %s' : 'Aladin Bank',
      meta: [
        {
          name: 'title',
          content: 'Aladin Bank - Sharia banking with peace of mind',
        },
        {
          name: 'text',
          content: 'The Future of Sharia Finance in your grasp.',
        },
        {
          name: 'description',
          content:
            'Aladin is a new phase of Islamic finance solutions for all modern Indonesian society. From daily-use to long term investment, Aladin will accompany your passionate life anytime, anywhere!',
        },
      ],
    }
  },

  computed: {
    content() {
      return content
    },
  },

  mounted() {
    this.$store.commit('setPageTitle', content.page_title)
    this.filteredJobs = content.body.jobs

    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },

  methods: {
    filterJob() {
      if (this.search.department !== 'All Department')
        this.filteredJobs = this.content.body.jobs.filter(
          (j) =>
            j.department === this.search.department &&
            j.title.toLowerCase().includes(this.search.position.toLowerCase())
        )
      else
        this.filteredJobs = this.content.body.jobs.filter((j) =>
          j.title.toLowerCase().includes(this.search.position.toLowerCase())
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.section-3 {
  padding-top: 40px;
  padding-bottom: 40px;

  .item-wrapper {
    padding: 20px;

    height: 100%;

    border: 1px solid #d8e1e6;
    border-radius: 12px;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > div {
      margin-right: 20px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .department {
      font-size: 14px;
      color: #61686d;
    }

    button {
      @apply border;
      @apply bg-blue-600;
      @apply border-blue-600;

      padding: 10px 16px;

      color: #fff;
      border-radius: 8px;

      white-space: nowrap;
      font-size: 14px;
      font-weight: 600;

      box-shadow: 0px 5px 5px 0 rgba(212, 217, 232, 0.4);
      transition: box-shadow ease 0.4s;

      &:hover {
        box-shadow: 0px 15px 20px rgba(212, 217, 232, 0.9);
      }
    }
  }
}

.custom-popup {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 200;

  visibility: hidden;
  opacity: 0;

  transition: all 0.4s ease;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  .popup-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 210;

    background-color: #0005;
  }

  .popup-body {
    padding: 20px;
    z-index: 220;

    background-color: #fff;
    border-radius: 12px;

    min-height: 500px;
    max-height: 90vh;
    overflow-y: scroll;

    .close-button {
      margin-top: 20px;
      text-align: center;

      span {
        cursor: pointer;
      }
    }

    h5,
    h6 {
      font-family: 'Lufga-Bold';
      // font-weight: 900;
    }

    button {
      padding: 12px 16px;
      background-color: #1b21cc;
      border: 1px solid #1b21cc;
      border-radius: 8px;
      color: #fff;
      white-space: nowrap;
    }
  }
}
</style>
