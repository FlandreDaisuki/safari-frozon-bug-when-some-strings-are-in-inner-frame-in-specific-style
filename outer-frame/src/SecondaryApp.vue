<script>
export default {
  name: 'SecondaryApp',
}
</script>

<template>
  <div class="frame-box">
    <iframe
      src="<% INNER_FRAME_ORIGIN %>"
      allow="autoplay"
      scrolling="no"
    />
  </div>
</template>
<style>
.frame-box {
  /* The width should >=122px, 121px will be fine in MacOS */
  /* The width should >=123px, 122px will be fine in iPadOS */
  width: 123px;
}
iframe {
  height: 100%;
  width: 100%;
}
</style>
