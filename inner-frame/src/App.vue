<template>
  <div id="app">
    <div style="max-width: calc(100% - 70px)">
      <div class="m-3">
        <div class="px-2">
          <!-- any of following words will cause safari frozen -->
          <span>ariさん🎵KATE</span>
          <span>お得🉐!</span>
          <span>お得🉐！</span>
          <span>お得🉐-</span>
          <span>お得🉐/</span>
          <span>お得🉐?</span>
          <span>✿ⒶⒾ🅐🅘</span>
          <span>ⒶⒾ🅐🅘✿</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* these styles are necessary to trigger the bug */
.m-3{margin:.75rem}
.px-2{padding-left:.5rem;padding-right:.5rem}
*{word-break:break-word;word-wrap:break-word}
body,html{width:100%;margin:0 auto}
html{font-size:16px}
</style>
