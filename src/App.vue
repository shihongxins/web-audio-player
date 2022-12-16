<script setup lang="ts">
  import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="backdrop">
      <HelloWorld msg="Vite + Vue" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    // 测试 SCSS
    background-color: $color_theme-primary;

    .logo {
      padding: 1.5em;
      height: 6em;
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }

    .backdrop {
      border-radius: 25px;

      // 测试 PostCSS
      width: 960px;
      box-shadow: inset 0 0 6px hwb(0deg 100% 0% / 0.2);
      background: hwb(0deg 100% 0% / 0.2);
      color: oklch(61% 0.2 29);
      backdrop-filter: blur(8px);
    }
  }
</style>
