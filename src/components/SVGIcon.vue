<template>
  <svg aria-hidden="true" class="svg-icon" :width="width" :height="height">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts" setup>
  import { defineProps, computed } from "vue";
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: () => "1em",
    },
    width: {
      type: [String, Number],
      default: () => "",
    },
    height: {
      type: [String, Number],
      default: () => "",
    },
    color: {
      type: String,
      default: () => "currentColor",
    },
  });
  const symbolId = computed(() => `#icon-${props.icon}`);
  const width = computed(() => props.width || props.size);
  const height = computed(() => props.height || props.size);
</script>

<style>
  .svg-icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
