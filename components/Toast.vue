<template lang="pug">
  div.flex.space-x-2.justify-center.toast(:class="{ active: $store.state.toast.active }")
    div.bg-white.shadow-lg.mx-auto.w-96.max-w-full.text-sm.pointer-events-auto.bg-clip-padding.rounded-lg.block
      div.bg-white.flex.justify-between.items-center.py-2.px-3.bg-clip-padding.border-b.border-gray-200.rounded-t-lg
        p.font-bold.text-gray-500 {{ $store.state.toast.title }}
        div.flex.items-center
          b-icon.cursor-pointer(icon="x" @click="hide")

      div.p-3.bg-white.rounded-b-lg.break-words.text-gray-700 {{ $store.state.toast.message }}
  
</template>

<script>
export default {
  methods: {
    hide() {
      this.$store.commit('setToast', {
        active: false,
        title: '',
        message: '',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.toast {
  @apply fixed;
  @apply bottom-5;
  @apply right-5;

  transition: all 0.5s ease;
  transform: translateY(calc(100% + 1.25rem));

  &.active {
    transform: translateY(0);
  }
}
</style>
