<template>
  <div class="background" v-show="visible">
    <div class="card">

      <div class="card-header">
        <i class="icon icon-cross float-right" @click="onClose"></i>
        <div class="card-title h5">Profiel wisselen</div>
        <div class="card-subtitle text-gray">Kies een profiel uit de lijst</div>
      </div>

      <div class="card-body">
        <Avatar
          class="avatar-xl"
          v-for="user in allUsers"
          :key="user.name"
          :traits="user.avatar"
          :class="{ highlighted: isHighlighted(user.name) }"
          @click.native="onSelectUser(user.name)" />
      </div>

      <div class="card-footer">
        <button
          class="btn btn-primary btn-block"
          :class="{ disabled: !this.selectedUserId }"
          @click="onLogin">
          Inloggen
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';

export default {
  name: 'ProfileSwitcher',
  components: {
    Avatar,
  },
  props: {
    allUsers: {
      type: Array,
      required: true,
    },
    currentUserId: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedUserId: this.currentUserId,
    };
  },
  methods: {
    isHighlighted(userId) {
      return this.selectedUserId === userId;
    },
    onClose() {
      this.$emit('cancel');
    },
    onLogin() {
      this.$emit('login', this.selectedUserId);
    },
    onSelectUser(userId) {
      this.selectedUserId = userId;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/wiggle.scss';

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
  text-align: center;
  width: 320px;

  .avatar-xl {
    height: 84px;
    opacity: 0.25;
    width: 84px;

    &.highlighted {
      opacity: 1;
      @include wiggle();
    }
  }
}
</style>
