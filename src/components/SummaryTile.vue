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
      <div class="counter text-right">
        <sup>{{ amountOfVotes }}/{{ getAllUsersCount }}</sup>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    amountOfVotes: {
      required: true,
      type: Number,
    },
  },
  computed: {
    ...mapGetters(['getAllUsersCount']),
    percent() {
      return (this.amountOfVotes / this.getAllUsersCount) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  margin: 12px 0;
}

.tile-action {
  display: flex;

  .counter {
    margin-left: 12px;
  }
}
</style>
