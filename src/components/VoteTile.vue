<template>
  <div class="tile tile-centered">

    <div class="tile-content">
      <div class="tile-title text-bold">{{ title }}</div>
      <div class="tile-subtitle">{{ subtitle }}</div>
    </div>

    <div class="tile-action">

      <button class="btn btn-link btn-lg">
        <i class="icon icon-stop text-gray" :class="{ 'text-error': !checked}"></i>
      </button>

      <button class="btn btn-link btn-lg">
        <i class="icon icon-check text-gray" :class="{ 'text-success': checked}"></i>
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'VoteTile',
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
    checked: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  margin: 12px 0;
}
</style>
