<template>
  <div class="message">

    <div class="divider"></div>

    <small>{{ date }}</small>
    <h5>{{ title }}</h5>
    <p>{{ text }}</p>

    <div class="btn-read">
      <button
        class="btn btn-sm btn-link"
        @click="$emit('read')">
        gelezen
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    id: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.btn-read {
  text-align: right;
}
</style>
