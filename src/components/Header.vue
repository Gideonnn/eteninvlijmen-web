<template>
  <div class="text-center">

    <Avatar :traits="avatar || {}" @click.native="navigateToProfile(getCurrentUser)" />

    <div class="panel-title h5" @click="showProfileSwitcher">
      {{ title }}
    </div>

    <div class="panel-subtitle">
      {{ subtitle }}
    </div>

    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';

// Components
import Avatar from './Avatar';

// Services
import avatarService from '../services/avatar.service';

export default {
  name: 'Header',
  props: {
    avatar: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  components: {
    Avatar,
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getShowProfileSwitcher']),
  },
  methods: {
    showProfileSwitcher() {
      this.$store.commit(types.SHOW_PROFILE_SWITCHER);
    },
    navigateToProfile(user) {
      if (user) {
        this.$router.push(`/profile/${user.name}`);
      }
    },
  },
};
</script>
