<template>
  <div class="tile tile-centered">

    <div class="tile-content">
      <div class="tile-title text-bold">{{ title }}</div>
      <div class="tile-subtitle">{{ subtitle }}</div>
    </div>

    <div class="tile-action">

      <button class="btn btn-link btn-lg" v-show="!checked" @click="toggle()">
        <i class="icon icon-stop text-gray"></i>
      </button>

      <button class="btn btn-link btn-lg" v-show="checked" @click="toggle()">
        <i class="icon icon-check text-success"></i>
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
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  margin: 12px 0;
}
</style>
