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

    <button
      v-if="getNewsItems.length"
      class="btn btn-link btn-news"
      @click="onShowWhatsNew">
      🎁
    </button>

    <WhatsNew
      :visible="getShowWhatsNew"
      :news="getNewsItems"
      @close="onHideWhatsNew"
      @read="onReadNewsItem" />

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from './store/types';

// Components
import ProfileSwitcher from './components/ProfileSwitcher';
import Toast from './components/Toast';
import WhatsNew from './components/WhatsNew/WhatsNew';

// Services
import newsService from './services/news.service';

export default {
  name: 'App',
  components: {
    ProfileSwitcher,
    Toast,
    WhatsNew,
  },
  computed: {
    ...mapGetters([
      'getAllUsers',
      'getCurrentUserId',
      'getNewsItems',
      'getShowProfileSwitcher',
      'getShowWhatsNew',
      'getToastMessage',
      'getToastType',
      'getToastVisible',
    ]),
  },
  created() {
    this.$store.commit(types.LOAD_CURRENT_USER);
    this.$store.dispatch(types.LOAD_USERS);
    this.$store.dispatch(types.LOAD_NEWS);
  },
  methods: {
    onCancelLogin() {
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
    onLogin(name) {
      this.$store.commit(types.SWITCH_CURRENT_USER, name);
      this.$store.commit(types.HIDE_PROFILE_SWITCHER);
    },
    onHideWhatsNew() {
      this.$store.commit(types.HIDE_WHATS_NEW);
    },
    onShowWhatsNew() {
      this.$store.commit(types.SHOW_WHATS_NEW);
    },
    onReadNewsItem(id) {
      this.$store.dispatch(types.MARK_NEWS_ITEM_READ, id);
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/spectre.css/dist/spectre.min.css';
@import '../node_modules/spectre.css/dist/spectre-exp.min.css';
@import '../node_modules/spectre.css/dist/spectre-icons.min.css';
@import './styles/wiggle.scss';

.panel {
  border: none;
}

.btn-news {
  @include wiggleInfinite();
  font-size: 25px;
  position: absolute;
  right: 16px;
  top: 16px;

  &:focus {
    box-shadow: none;
  }
}
</style>
