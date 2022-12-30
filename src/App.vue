<script setup lang="ts">
  import { ref, computed, provide, watchEffect } from "vue";
  import TitleVue from "./components/TitleVue.vue";
  import ControlVue, { Song } from "./components/ControlVue.vue";
  import SwiperVue from "./components/SwiperVue.vue";
  import { ImageColors, getImageColors } from "./utils";
  const playerDOM = ref<HTMLElement>();
  const playerControl = ref();
  const currentPlaying = computed(() => {
    if (playerControl.value && playerControl.value.listCircleObj) {
      const song: Song = playerControl.value.listCircleObj.selectedList().pop();
      return song;
    }
    return null;
  });

  const defaultColors = (): ImageColors => ({
    imageData: [],
    colors: {},
    theme: "",
    complementary: "",
  });
  const colors = ref<ImageColors>(defaultColors());
  const cover = ref("");

  const changeTheme = () => {
    cover.value = "";
    colors.value = defaultColors();
    if (currentPlaying.value && currentPlaying.value.info.tags.picture?.data) {
      const { data, format } = currentPlaying.value.info.tags.picture;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
        base64String += String.fromCharCode(data[i]);
      }
      cover.value = `data:${format};base64,${window.btoa(base64String)}`;
      colors.value = getImageColors(data);
      if (colors.value.theme) {
        playerDOM.value!.style.setProperty("--color-primary", colors.value.theme || "#333");
        playerDOM.value!.style.setProperty("--color-secondary", colors.value.complementary || "#666");
      }
    }
  };

  watchEffect(changeTheme);

  provide("currentPlaying", currentPlaying);
  provide("cover", cover);
  provide("colors", colors);
</script>

<template>
  <div class="player" ref="playerDOM">
    <TitleVue class="player-title" />
    <main class="player-container">
      <SwiperVue class="player-content">
        <div class="swiper-item" v-if="cover">
          <img :src="cover" class="song-cover" />
        </div>
      </SwiperVue>
      <ControlVue class="player-control" ref="playerControl" />
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

      .song-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
