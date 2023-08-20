<template>
  <div class="videoWrapper">
    <!-- Copy & Pasted from YouTube -->
    <iframe
      width="560"
      height="349"
      src="https://www.youtube.com/embed/DVI0dBpPY4g?autoplay=1"
      frameborder="0"
      allowfullscreen
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
