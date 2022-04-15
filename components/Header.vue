<template lang="pug">
  div.bg-white
    div.container.mx-auto.px-3.flex.justify-between.items-center
      div.py-3
        img.w-60.cursor-pointer(src="/images/logo.png" @click="$router.push('/')")

      div.flex
        div.animate-menu(
          v-for="(menu, menuIndex) in menus"
          :key="menuIndex"
          :class="{ active: $route.path === menu.link }"
        )
          div.py-1.menu-item.px-3(@click="$router.push(menu.link)") {{ menu.label }}

        div.p-3
          Dropdown

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

  .menu-item {
    @apply border-b-2;
    @apply border-white;
  }

  &.active .menu-item {
    @apply border-blue-200;
  }

  &:hover .menu-item {
    @apply border-blue-300;
  }
}
</style>
