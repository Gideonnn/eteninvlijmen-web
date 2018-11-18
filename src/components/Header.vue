<template>
  <div class="text-center" v-if="this.getCurrentUser">

    <figure class="avatar avatar-lg">
      <router-link :to="`/profile/${this.getCurrentUser.name}`">
        <img v-if="avatarUrl" :src="avatarUrl" alt="Avatar">
      </router-link>
    </figure>

    <div class="panel-title h5" @click="showProfileSwitcher">{{ title }}</div>
    <div class="panel-subtitle">{{ subtitle }}</div>

    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';

// Components
import ProfileSwitcher from './ProfileSwitcher.vue';

export default {
  name: 'Header',
  props: {
    avatarUrl: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
  },
  components: {
    ProfileSwitcher,
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getShowProfileSwitcher']),
  },
  methods: {
    showProfileSwitcher() {
      this.$store.commit(types.SHOW_PROFILE_SWITCHER);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
