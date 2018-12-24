<template>
  <div>
    <Toast
      v-if="getToastVisible"
      :message="getToastMessage"
      :type="getToastType" />

    <ProfileSwitcher
      :all-users="getAllUsers"
      :current-user-id="getCurrentUserId"
      :visible="getShowProfileSwitcher"
      @cancel="onCancelLogin"
      @login="onLogin"/>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from './store/types';

// Components
import ProfileSwitcher from './components/ProfileSwitcher';
import Toast from './components/Toast';

export default {
  name: 'App',
  components: {
    ProfileSwitcher,
    Toast,
  },
  computed: {
    ...mapGetters([
      'getAllUsers',
      'getCurrentUserId',
      'getShowProfileSwitcher',
      'getToastMessage',
      'getToastType',
      'getToastVisible',
    ]),
  },
  created() {
    this.$store.commit(types.LOAD_CURRENT_USER);
    this.$store.dispatch(types.LOAD_USERS);
  },
  methods: {
    onCancelLogin() {
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
    onLogin(name) {
      this.$store.commit(types.SWITCH_CURRENT_USER, name);
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
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
