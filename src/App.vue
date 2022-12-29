<script setup lang="ts">
  import TitleVue from "./components/TitleVue.vue";
  import ControlVue from "./components/ControlVue.vue";
  import SwiperVue from "./components/SwiperVue.vue";
</script>

<template>
  <div class="player">
    <TitleVue class="player-title" />
    <main class="player-container">
      <SwiperVue class="player-content" />
      <ControlVue class="player-control" />
    </main>
  </div>
</template>

<style lang="scss">
  .player {
    --color-primary: #333;
    --color-secondary: #666;
    --color-normal: #999;

    display: flex;
    flex-flow: column;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(to bottom, var(--color-secondary, #666), var(--color-normal, #999));
    color: var(--color-primary, #333);

    &-container {
      flex: 1;
      display: flex;
      flex-flow: column;
      overflow: hidden;
    }

    &-content {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
