<template>
  <div class="dropdown inline-block relative">
    <button
      class="inline-flex items-center px-4 py-1 rounded-full bg-primary text-white"
    >
      <span class="mr-1">BPI Access</span>
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class="">
        <a
          class="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap"
          href="#"
        >
          BPI e-attendance
        </a>
      </li>
      <li class="">
        <a
          class="bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap"
          href="#"
        >
          BPI
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

/*
Note: you can also do this with Tailwind's group-hover. Unfortunately Tailwind CDN version does not include this variant, so you will have to adjust the tailwind.config.js file in your own project.

Example with group-hover: https://codesandbox.io/s/tailwind-dropdown-with-group-hover-gm9k9
 */
</style>
