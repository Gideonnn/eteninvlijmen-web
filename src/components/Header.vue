<template>
  <div class="text-center">

    <figure class="avatar avatar-lg">

      <div v-if="!this.getCurrentUser">
        <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&clotheType=Default&skinColor=Pale" alt="Avatar">
      </div>

      <div v-if="this.getCurrentUser">
        <router-link :to="`/profile/${this.getCurrentUser.name}`">
          <img v-if="avatarUrl" :src="avatarUrl" alt="Avatar">
        </router-link>
      </div>
    </figure>

    <div class="panel-title h5" @click="showProfileSwitcher">{{ title }}</div>
    <div class="panel-subtitle">{{ subtitle }}</div>

    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';

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
  computed: {
    ...mapGetters(['getCurrentUser', 'getShowProfileSwitcher']),
    defaultAvatarUrl() {
      return (
        'https://avataaars.io/?' +
        'avatarStyle=Circle&' +
        'topType=Default&' +
        'hairColor=Default&' +
        'hatColor=Default&' +
        'accessoriesType=Default&' +
        'facialHairType=Default&' +
        'facialHairColor=Default&' +
        'clotheType=Default&' +
        'clotheColor=Default&' +
        'eyeType=Default&' +
        'eyebrowType=Default&' +
        'mouthType=Default&' +
        'skinColor=Default'
      );
    },
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
