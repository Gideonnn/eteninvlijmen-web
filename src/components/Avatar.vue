<template>
  <figure class="avatar avatar-lg">
    <img :src="url" alt="Avatar">
  </figure>
</template>

<script>
import avatarService from '../services/avatar.service';

export default {
  name: 'Avatar',
  props: {
    traits: {
      type: Object,
    },
  },
  computed: {
    url() {
      return avatarService.createUrl(this.traits);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  min-height: 48px;
}
</style>
