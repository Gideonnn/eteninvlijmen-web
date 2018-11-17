<template>
  <div class="column col-12">
    <div class="panel">

      <div class="panel-header">
        <Header
          :avatar-url="getCurrentUserAvatar"
          :title="getCurrentUserName"
          :subtitle="`WEEK ${week}`"
        >
          <ProfileSwitcher v-show="getShowProfileSwitcher"/>
        </Header>
      </div>

      <div class="panel-nav">
        <Navigation />
      </div>

      <div class="panel-body">

        <VoteTile
          title="Maandag"
          :subtitle="mondayDate"
          :checked="getDayPreference(0)"
          @toggle="onToggle(0)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Dinsdag"
          :subtitle="tuesdayDate"
          :checked="getDayPreference(1)"
          @toggle="onToggle(1)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Woensdag"
          :subtitle="wednesdayDate"
          :checked="getDayPreference(2)"
          @toggle="onToggle(2)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Donderdag"
          :subtitle="thursdayDate"
          :checked="getDayPreference(3)"
          @toggle="onToggle(3)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Vrijdag"
          :subtitle="fridayDate"
          :checked="getDayPreference(4)"
          @toggle="onToggle(4)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Zaterdag"
          :subtitle="saturdayDate"
          :checked="getDayPreference(5)"
          @toggle="onToggle(5)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Zondag"
          :subtitle="sundayDate"
          :checked="getDayPreference(6)"
          @toggle="onToggle(6)"
        />
        <div class="divider"></div>

      </div>

      <div class="panel-footer">
        <button class="btn btn-primary btn-block" @click="onSubmit">Opslaan</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

// Components
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import ProfileSwitcher from '../components/ProfileSwitcher.vue';
import VoteTile from '../components/VoteTile.vue';

// State
import types from '../store/types';

export default {
  name: 'Vote',
  components: {
    Header,
    Navigation,
    ProfileSwitcher,
    VoteTile,
  },
  props: {
    year: {
      type: Number,
      required: true,
    },
    week: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'getCurrentUser',
      'getCurrentUserId',
      'getDayPreference',
      'getShowProfileSwitcher',
    ]),
    mondayDate() {
      return this.getDate(1);
    },
    tuesdayDate() {
      return this.getDate(2);
    },
    wednesdayDate() {
      return this.getDate(3);
    },
    thursdayDate() {
      return this.getDate(4);
    },
    fridayDate() {
      return this.getDate(5);
    },
    saturdayDate() {
      return this.getDate(6);
    },
    sundayDate() {
      return this.getDate(7);
    },
    getCurrentUserName() {
      return this.getCurrentUser ? this.getCurrentUser.name : 'Klik hier';
    },
    getCurrentUserAvatar() {
      return this.getCurrentUser ? this.getCurrentUser.avatar : '';
    },
  },
  created() {
    if (this.getCurrentUserId) {
      this.$store.dispatch(types.LOAD_WEEK_PREF, {
        year: this.year,
        week: this.week,
        userId: this.getCurrentUserId,
      });
    }
  },
  methods: {
    getDate(dayOffset) {
      return moment()
        .year(this.year)
        .week(this.week)
        .day(dayOffset)
        .format('D MMMM');
    },
    onSubmit() {
      this.$store.dispatch(types.SUBMIT_WEEK_PREF, {
        year: this.year,
        week: this.week,
        userId: this.getCurrentUserId,
      });
    },
    onToggle(index) {
      this.$store.commit(types.TOGGLE_DAY, index);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
