<template>
  <div class="background" v-show="visible">
    <div class="card">

      <div class="card-header">
        <i class="icon icon-cross float-right" @click="onClose"></i>
        <div class="card-title h5">Nieuwigheidjes</div>
      </div>

      <div class="card-body">

        <Message
          v-for="item in news"
          :key="item.id"
          :id="item.id"
          :date="item.date"
          :title="item.title"
          :text="item.text"
          @read="onRead(item.id)" />
      </div>

    </div>
  </div>
</template>

<script>
import Message from './components/Message';

export default {
  name: 'ProfileSwitcher',
  components: {
    Message,
  },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    onRead(id) {
      this.$emit('read', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.card {
  margin: 32px auto 0 auto;
  width: 320px;
}
</style>
