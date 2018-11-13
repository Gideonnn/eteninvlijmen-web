<template>
  <div class="tile tile-centered">

    <div class="tile-content col-sm-4 col-2">
      <div class="tile-title text-bold">{{ title }}</div>
      <div class="tile-subtitle">{{ subtitle }}</div>
    </div>

    <div class="tile-action col-sm-8 col-10">
      <div class="bar">
        <div class="bar-item" role="progressbar" :style="`width:${percent}%;`"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SummaryTile',
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
    percent: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  margin: 12px 0;
}
</style>
