<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  const RefDOMSwiperContainer = ref<null | HTMLElement>(null);
  const RefDOMSwiperIndicator = ref<null | HTMLElement>(null);
  const initSwiperIndicatorDots = () => {
    for (let i = 0; i < RefDOMSwiperContainer.value!.children.length; i++) {
      const dot = document.createElement("i");
      if (i === 0) {
        dot.className = "active";
      }
      RefDOMSwiperIndicator.value?.appendChild(dot);
    }
  };
  onMounted(() => {
    initSwiperIndicatorDots();
  });
</script>

<template>
  <div class="swiper">
    <div class="swiper-container" ref="RefDOMSwiperContainer">
      <slot>
        <div class="swiper-item">
          <SVGIcon icon="disc" size="100%"></SVGIcon>
        </div>
      </slot>
    </div>
    <div class="swiper-indicator" ref="RefDOMSwiperIndicator"></div>
  </div>
</template>

<style lang="scss">
  .swiper {
    position: relative;
    display: flex;
    flex-flow: column;

    &-container {
      flex: 1;
      display: flex;
      margin: 16px;
      overflow: hidden;
    }

    &-item {
      flex: 1;
      overflow: hidden;
    }

    &-indicator {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translate(-50%, 0);

      > i {
        display: inline-block;
        margin: 0 4px;
        border: 2px;
        width: 8px;
        height: 4px;
        background-color: var(--color-normal, #999);

        &.active {
          background-color: var(--color-primary, #333);
        }
      }
    }
  }
</style>
