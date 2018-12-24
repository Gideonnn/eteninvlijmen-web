<template>
  <div class="column col-12">
    <div class="panel">

      <div class="panel-header">
        <Header
          :title="getCurrentUserName"
          :avatar="getCurrentUserAvatar"
          :subtitle="`WEEK ${week}`"
        >
          <ProfileSwitcher v-show="getShowProfileSwitcher"/>
        </Header>
      </div>

      <div class="panel-nav">
        <Navigation />
      </div>

      <div class="panel-body">

        <SummaryTile title="Maandag" :subtitle="mondayDate" :percent="getSummary[0]"/>
        <div class="divider"></div>

        <SummaryTile title="Dinsdag" :subtitle="tuesdayDate" :percent="getSummary[1]"/>
        <div class="divider"></div>

        <SummaryTile title="Woensdag" :subtitle="wednesdayDate" :percent="getSummary[2]"/>
        <div class="divider"></div>

        <SummaryTile title="Donderdag" :subtitle="thursdayDate" :percent="getSummary[3]"/>
        <div class="divider"></div>

        <SummaryTile title="Vrijdag" :subtitle="fridayDate" :percent="getSummary[4]"/>
        <div class="divider"></div>

        <SummaryTile title="Zaterdag" :subtitle="saturdayDate" :percent="getSummary[5]"/>
        <div class="divider"></div>

        <SummaryTile title="Zondag" :subtitle="sundayDate" :percent="getSummary[6]"/>
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
    ...mapGetters(['getCurrentUser', 'getShowProfileSwitcher', 'getSummary']),
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
      return this.getCurrentUser ? this.getCurrentUser.name : 'Niet ingelogd';
    },
    getCurrentUserAvatar() {
      return this.getCurrentUser ? this.getCurrentUser.avatar : {};
    },
  },
  created() {
    this.$store.dispatch(types.LOAD_SUMMARY, { year: this.year, week: this.week });
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
