<script lang="ts" setup>
  import { ComputedRef, computed, inject } from "vue";
  import { Song } from "./ControlVue.vue";

  const currentPlaying = inject<ComputedRef<Song>>("currentPlaying");

  const title = computed(() => {
    let text = "岩石音乐";
    const song = currentPlaying?.value;
    if (song && song.info.tags) {
      const { title = "" } = song.info.tags;
      text = title || text;
    }
    return text;
  });
  const intro = computed(() => {
    let text = "像石头一样摇滚";
    const song = currentPlaying?.value;
    if (song && song.info.tags) {
      const { artist = "", album = "" } = song.info.tags;
      text = artist || album || text;
      if (artist && album) {
        text = `${artist} - ${album}`;
      }
    }
    return text;
  });
</script>

<template>
  <header>
    <div>
      <h4>{{ title }}</h4>
      <p>{{ intro }}</p>
    </div>
    <button>
      <SVGIcon icon="round-more-vert"></SVGIcon>
    </button>
  </header>
</template>

<style lang="scss">
  header {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 16px;
    height: 64px;
    overflow: hidden;

    > div {
      flex: 1;
      overflow: hidden;

      > * {
        margin: 0;
        text-align: center;
        white-space: nowrap;
      }
    }

    > button {
      position: absolute;
      right: 0;
      border: none;
    }
  }
</style>
