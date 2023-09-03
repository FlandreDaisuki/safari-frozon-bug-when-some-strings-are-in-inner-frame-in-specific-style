<template>
  <main>
    <!-- This gray div is unnecessary -->
    <div style="height: 200vh; background: gray" />
    <div id="an-element-in-main-app" />

    <!-- This link is a test whether safari is frozen -->
    <a href="http://example.com" target="_blank">Try to click me</a>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>
