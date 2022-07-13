<template lang="pug">
  div.border-2.border-gray-200.rounded-xl.grid.gap-10.overflow-hidden(
    class="grid-cols-1 md:grid-cols-2"
  )
    img.h-full.w-50(:src="locationImage" @click="windowOpen(gmapsURL)")
    div.pt-5.pr-5(class="p-5 md:pl-0 md:pb-0")
      h3.mb-3 {{ locationName }}
      p.mb-2(v-for="(addressLine, addressLineIndex) in addressLines" :key="addressLineIndex") {{ addressLine }}

</template>

<script>
export default {
  props: {
    locationName: {
      type: String,
      default: '',
    },
    addressLines: {
      type: Array,
      default: null,
    },
    locationImage: {
      type: String,
      default: '',
    },
    gmapsURL: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
