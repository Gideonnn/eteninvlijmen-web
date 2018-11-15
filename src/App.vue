<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import types from './store/types';

export default {
  name: 'App',
  created() {
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
</style>
