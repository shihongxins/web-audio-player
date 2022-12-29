<template>
  <header>
    <div>
      <h4>岩石音乐</h4>
      <p>像石头一样摇滚</p>
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
