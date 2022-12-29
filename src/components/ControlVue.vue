<script lang="ts" setup>
  import { ref } from "vue";
  const playlistVisiable = ref(false);
  const playlist = ref<File[]>([]);
  const loadPlayList = (e: Event) => {
    const fileInput = e.target as HTMLInputElement;
  };
</script>

<template>
  <section class="control-container">
    <div class="progress-bar">
      <span class="start-time">00:00</span>
      <div class="bar-container">
        <button class="bar-dot"></button>
      </div>
      <span class="start-time">00:00</span>
    </div>
    <div class="control-btns">
      <button>
        <SVGIcon icon="round-shuffle"></SVGIcon>
      </button>
      <button>
        <SVGIcon icon="round-skip-previous"></SVGIcon>
      </button>
      <button style="font-size: 48px">
        <SVGIcon v-show="true" icon="round-play-circle"></SVGIcon>
        <SVGIcon v-show="false" icon="round-pause-circle"></SVGIcon>
      </button>
      <button>
        <SVGIcon icon="round-skip-next"></SVGIcon>
      </button>
      <button @click="playlistVisiable = true">
        <SVGIcon icon="round-queue-music"></SVGIcon>
      </button>
    </div>
    <label class="btn-next">
      <span>播放列表为空</span>
      <input type="file" accept="audio/*" multiple webkitdirectory @change="loadPlayList" />
    </label>
    <div class="playlist-popover" :class="{ show: playlistVisiable }">
      <p>播放队列({{ playlist.length }})</p>
      <ul class="playlist-items">
        <li v-for="(item, index) in 6" :key="index">
          <p>
            <span>千千阙歌</span>
            <span>陈慧娴</span>
          </p>
          <button>
            <SVGIcon icon="round-close" size="14px"></SVGIcon>
          </button>
        </li>
      </ul>
    </div>
    <div class="popover-mask" v-show="playlistVisiable" @click="playlistVisiable = false"></div>
  </section>
</template>

<style lang="scss">
  .control-container {
    display: flex;
    flex-flow: column;
    margin: 0 16px;
    overflow: hidden;

    .progress-bar {
      --progress-percentage: 50%;

      display: flex;
      margin: 16px 0;
      font-size: 12px;

      .bar-container {
        position: relative;
        flex: 1;
        margin: 0 16px;

        &::before,
        &::after {
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          margin-top: -2px;
          border-radius: 2px;
          height: 4px;
          content: "";
          background: var(--color-normal, #999);
        }

        &::after {
          width: var(--progress-percentage, 0%);
          background: var(--color-primary, #333);
        }

        .bar-dot {
          position: absolute;
          top: 50%;
          left: var(--progress-percentage, 0%);
          width: 4px;
          height: 8px;
          background: var(--color-primary, #333);
          transform: translate(-50%, -50%);
        }
      }
    }

    .control-btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 8px;
      font-size: 24px;
    }

    .btn-next {
      position: relative;
      margin: 16px 16px 32px;
      border-radius: 4px;
      padding: 0 16px;
      line-height: 48px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);

      input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
      }
    }
  }

  .playlist {
    &-popover {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 16px;
      background-color: #fff;
      transform: translateY(100%);
      transition: transform 1s;

      > p {
        margin-top: 0;
        text-align: center;
      }

      &.show {
        z-index: 999;
        transform: translateY(0%);
      }
    }

    &-items {
      margin: 0;
      padding: 0;
      height: 150px;
      overflow: hidden auto;

      li {
        display: flex;
        margin: 8px 0;
        height: 30px;
        overflow: hidden;

        p {
          flex: 1;
          display: flex;
          flex-flow: column;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          span {
            &:first-child {
              font-size: 14px;
              color: #666;
            }

            &:last-child {
              font-size: 12px;
              color: #999;
            }
          }
        }

        button {
          padding: 4px;
        }
      }
    }
  }

  .popover-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background-color: #000;
    opacity: 0.3;
  }
</style>
