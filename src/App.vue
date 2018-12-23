<template>
  <div>
    <Toast v-if="getToastVisible" :message="getToastMessage" :type="getToastType" />
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from './store/types';

// Components
import Toast from './components/Toast';

export default {
  name: 'App',
  components: {
    Toast,
  },
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
</style>
