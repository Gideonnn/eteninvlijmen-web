<template>
  <div class="selector">
    <h5>{{ title }}</h5>
    <div class="flex-wrap">

      <button class="btn btn-action s-circle" :disabled="!canDecrement" @click="decrement">
        <i class="icon icon-arrow-left"></i>
      </button>

      <span class="text">{{ getSelectedValue }}</span>

      <button class="btn btn-action s-circle" :disabled="!canIncrement" @click="increment">
        <i class="icon icon-arrow-right"></i>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  computed: {
    canDecrement() {
      return this.selectedIndex > 0;
    },
    canIncrement() {
      return this.selectedIndex < this.list.length - 1;
    },
    getSelectedValue() {
      return this.list[this.selectedIndex];
    },
  },
  methods: {
    decrement() {
      if (this.canDecrement) {
        this.selectedIndex--;
        this.$emit('change', this.list[this.selectedIndex]);
      }
    },
    increment() {
      if (this.canIncrement) {
        this.selectedIndex++;
        this.$emit('change', this.list[this.selectedIndex]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selector + .selector {
  margin-top: 16px;
}

.selector {
  .text {
    line-height: 2.25em;
  }
}

.flex-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
