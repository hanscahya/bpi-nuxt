<template lang="pug">
  div.mx-auto.pt-3.px-5.flex.justify-between.items-center
    div.container.mx-auto.flex.justify-between.items-center
      div.py-3
        img.w-60.cursor-pointer(src="/images/logo.png" @click="$router.push('/')")
      div(class="hidden md:flex")
        div.menu-pointer(
          v-for="(menu, menuIndex) in menus"
          :key="menuIndex"
          :class="{ active: $route.path === menu.link }"
        )
          div.py-1.menu-item.px-3(@click="$router.push(menu.link)") {{ menu.label }}

        div.p-3
          Dropdown

    b-icon.text-xl.cursor-pointer(
      icon="list"
      class="block md:hidden"
      @click="isMenuActive = true"
    )

    //- slide menu
    div.animate-menu-backdrop.fixed.inset-0.bg-black.bg-opacity-50(
      :class="{ active: isMenuActive }"
      @click="isMenuActive = false"
    )
    div.animate-menu.fixed.inset-0.left-10(
      :class="{ active: isMenuActive }"
    )
      div.pl-8.p-5.rounded-tl-3xl.rounded-bl-3xl.h-full.bg-white.text-black
        //- head
        div.flex.justify-between.items-center
          img.cursor-pointer(
            src="/images/logo.png"
            srcset="/images/logo@2x.png 2x, /images/logo.png 1x"
            alt="Logo Aladin Bank"
            title="aladin-bank-logo"
            @click="$router.push('/')"
          )
          b-icon.text-2xl.cursor-pointer(icon="x" @click="isMenuActive = false")

        //- body
        div.mt-3(style="max-height: calc(100% - 90px)")
          div.py-7.text-md.font-extrabold.font-lufga-bold.cursor-pointer.rounded-lg(
            v-for="(menu, menuIndex) in menus"
            :key="menuIndex"
            @click="$router.push(menu.link), isMenuActive = false"
          )
            span.border-b-2.border-transparent(
              :class="{ 'border-aladin-blue': $route.path === menu.link }"
            ) {{ menu.label }}

          Dropdown.mt-3

</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,

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

  watch: {
    $route() {
      this.isMenuActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-pointer {
  @apply p-3;
  @apply relative;
  @apply overflow-hidden;
  cursor: pointer;

  .menu-item {
    @apply border-b-2;
    @apply border-white;
  }

  &.active .menu-item {
    @apply border-primary;
  }

  &:hover .menu-item {
    @apply border-primary;
  }
}

.animate-menu {
  transition: all 0.5s ease;
  transform: translateX(100%);

  &.active {
    transform: translateX(0);
  }
}

.animate-menu-backdrop {
  visibility: hidden;
  opacity: 0;

  transition: all 0.4s ease;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
