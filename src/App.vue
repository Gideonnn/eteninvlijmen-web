<template>
  <div>

    <transition name="fade" enter-active-class="bounce">
      <div class="toast-wrapper" v-if="this.getToastVisible">
        <div class="toast" :class="`toast-${this.getToastType}`">
          {{ this.getToastMessage }}
        </div>
      </div>
    </transition>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from './store/types';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getToastMessage', 'getToastType', 'getToastVisible']),
  },
  created() {
    this.$store.commit(types.LOAD_CURRENT_USER);
    this.$store.dispatch(types.LOAD_USERS);
  },
};
</script>

<style lang="scss">
@import '../node_modules/spectre.css/dist/spectre.min.css';
@import '../node_modules/spectre.css/dist/spectre-exp.min.css';
@import '../node_modules/spectre.css/dist/spectre-icons.min.css';

.avatar {
  background: none;
}

.panel {
  border: none;
}

.toast-wrapper {
  left: 0;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}

.bounce {
  animation: bounce 0.15s;
}
</style>
