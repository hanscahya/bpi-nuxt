<template lang="pug">
  div.container.mx-auto
    div.mt-20.grid.gap-4.grid-cols-2
      img.h-full.object-cover(src="https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys=")

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
          button.bg-green-500.text-white.font-bold.py-2.px-4.rounded(
            class="hover:bg-green-700 focus:outline-none focus:shadow-outline"
          ) Submit

    div.mt-20.px-20
      h2.text-center Need help urgently?
      div.mt-10.grid.grid-cols-4.gap-10
        div.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
        )
          b-icon(icon="telephone" font-scale="1.5")
          span &emsp;Telephone
        div.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
        )
          b-icon(icon="facebook" font-scale="1.5")
          span &emsp;Facebook
        div.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
        )
          b-icon(icon="twitter" font-scale="1.5")
          span &emsp;Twitter
        div.py-5.flex.justify-center.items-center.border.rounded-xl.cursor-pointer.transition.duration-200.ease-in(
          class="hover:bg-gray-50 hover:shadow-md"
        )
          b-icon(icon="envelope" font-scale="1.5")
          span &emsp;Email

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>

<style lang="scss" scoped></style>
