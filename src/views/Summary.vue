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

        <SummaryTile title="Maandag" :subtitle="mondayDate" :percent="40"/>
        <div class="divider"></div>

        <SummaryTile title="Dinsdag" :subtitle="tuesdayDate" :percent="10"/>
        <div class="divider"></div>

        <SummaryTile title="Woensdag" :subtitle="wednesdayDate" :percent="60"/>
        <div class="divider"></div>

        <SummaryTile title="Donderdag" :subtitle="thursdayDate" :percent="60"/>
        <div class="divider"></div>

        <SummaryTile title="Vrijdag" :subtitle="fridayDate" :percent="80"/>
        <div class="divider"></div>

        <SummaryTile title="Zaterdag" :subtitle="saturdayDate" :percent="40"/>
        <div class="divider"></div>

        <SummaryTile title="Zondag" :subtitle="sundayDate" :percent="20"/>
        <div class="divider"></div>

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
import SummaryTile from '../components/SummaryTile.vue';

// State
import types from '../store/types';

export default {
  name: 'Summary',
  components: {
    Header,
    Navigation,
    ProfileSwitcher,
    SummaryTile,
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
    ...mapGetters(['getCurrentUser', 'getShowProfileSwitcher']),
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
  methods: {
    getDate(dayOffset) {
      return moment()
        .year(this.year)
        .week(this.week)
        .day(dayOffset)
        .format('D MMMM');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
