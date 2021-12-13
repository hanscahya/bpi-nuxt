<template lang="pug">
  div.loading(:class="{ active: $store.state.loading }")
    div.bg-black.opacity-20.h-full.w-full
    div.fixed.inset-0.flex.justify-center.items-center
      span.h-5.w-5.animate-ping.absolute.inline-flex.rounded-full.bg-blue-400.opacity-75

</template>

<style lang="scss" scoped>
.loading {
  @apply fixed;
  @apply inset-0;
  z-index: 200;

  visibility: hidden;
  opacity: 0;
  transition: visibility 1s ease, opacity 0.5s linear;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
