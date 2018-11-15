<template>
  <div class="text-center">

    <figure class="avatar avatar-lg">
      <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Light" alt="Avatar">
    </figure>

    <div class="panel-title h5" @click="showProfileSwitcher">{{ title }}</div>
    <div class="panel-subtitle">{{ subtitle }}</div>

    <ProfileSwitcher v-show="getShowProfileSwitcher"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';

// Components
import ProfileSwitcher from './ProfileSwitcher.vue';

export default {
  name: 'Header',
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
  },
  components: {
    ProfileSwitcher,
  },
  computed: {
    ...mapGetters(['getShowProfileSwitcher']),
  },
  methods: {
    showProfileSwitcher() {
      this.$store.commit(types.SHOW_PROFILE_SWITCHER);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
