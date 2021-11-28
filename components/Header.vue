<template lang="pug">
  div.px-3
    div.container.mx-auto.flex.justify-between.items-center
      div.py-3
        img.w-60.cursor-pointer(src="/images/logo.png" @click="$router.push('/')")

      div.flex
        div.animate-menu(
          v-for="(menu, menuIndex) in menus"
          :key="menuIndex"
          :class="{ active: $route.path === menu.link }"
        )
          div.py-1.menu-item
            nuxt-link.px-3(:to="menu.link") {{ menu.label }}

        div.p-3
          button.px-4.py-1.rounded-full.bg-green-500.text-white BPI Application

</template>

<script>
export default {
  data() {
    return {
      menus: [
        // {
        //   label: 'Home',
        //   link: '/',
        // },
        {
          label: 'About Us',
          link: '/about-us',
        },
        {
          label: 'Our Service',
          link: '/our-service',
        },
        {
          label: 'Contact Us',
          link: '/contact-us',
        },
        {
          label: 'Career',
          link: '/career',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.animate-menu {
  @apply p-3;
  @apply relative;
  @apply overflow-hidden;
  cursor: pointer;

  &.active .menu-item {
    @apply border-b-2;
    @apply border-blue-200;
  }

  &:hover .menu-item {
    @apply border-b-2;
    @apply border-blue-200;
  }
}
</style>
