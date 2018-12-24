<template>
  <div class="popover popover-bottom">
    <div class="popover-container">
      <div class="card">

        <div class="card-header">
          <i class="icon icon-cross float-right" @click="onClose"></i>
          <div class="card-title h5">Profiel wisselen</div>
          <div class="card-subtitle text-gray">Kies een profiel uit de lijst</div>
        </div>

        <div class="card-body">
          <Avatar
            class="avatar-xl"
            v-for="user in getAllUsers"
            :key="user.name"
            :traits="user.avatar"
            :class="{ highlighted: isHighlighted(user.name) }"
            @click.native="onSelectUser(user.name)" />
        </div>

        <div class="card-footer">
          <button
            class="btn btn-primary btn-block"
            :class="{ disabled: !this.getSelectedUserId }"
            @click="onLogin"
          >
            Inloggen
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';

// Components
import Avatar from './Avatar';

export default {
  name: 'ProfileSwitcher',
  components: {
    Avatar,
  },
  computed: {
    ...mapGetters(['getAllUsers', 'getCurrentUserId', 'getSelectedUserId']),
  },
  methods: {
    isHighlighted(userId) {
      if (this.getSelectedUserId) {
        return this.getSelectedUserId === userId;
      } else {
        return this.getCurrentUserId === userId;
      }
    },
    onClose() {
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
    onLogin() {
      this.$store.commit(types.SWITCH_CURRENT_USER);
    },
    onSelectUser(name) {
      this.$store.commit(types.SELECT_USER, name);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-xl {
  height: 4.2rem;
  margin: 0.1rem;
  opacity: 0.25;
  width: 4.2rem;

  &.highlighted {
    opacity: 1;
  }
}

.popover-container {
  transform: translate(-50%, 0) scale(1);
  opacity: 1;
}
</style>
