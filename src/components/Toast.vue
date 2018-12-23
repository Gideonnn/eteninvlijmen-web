<template>
  <transition name="fade" enter-active-class="bounce">

      <div class="toast-wrapper">
        <div class="toast" :class="`toast-${type}`">
          {{ message }}
        </div>
      </div>

    </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-wrapper {
  left: 0;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
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
