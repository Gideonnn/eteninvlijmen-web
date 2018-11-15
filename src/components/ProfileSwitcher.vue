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

          <figure
            class="avatar avatar-xl"
            v-for="user in getAllUsers"
            :class="{ selected: getSelectedUserId === user._id }"
            :key="user._id"
            @click="onSelectUser(user._id)"
          >
            <img alt="Avatar" :src="user.avatar">
          </figure>

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

export default {
  name: 'ProfileSwitcher',
  computed: {
    ...mapGetters(['getAllUsers', 'getSelectedUserId']),
  },
  methods: {
    onClose() {
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
    onLogin() {
      this.$store.commit(types.SWITCH_CURRENT_USER);
    },
    onSelectUser(userId) {
      this.$store.commit(types.SELECT_USER, userId);
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

  &.selected {
    opacity: 1;
  }
}

.popover-container {
  transform: translate(-50%, 0) scale(1);
  opacity: 1;
}
</style>
