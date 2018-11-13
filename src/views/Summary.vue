<template>
  <div class="column col-12">
    <div class="panel">

      <div class="panel-header">
        <Header title="Gideon" :subtitle="`WEEK ${week}`"/>
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
import moment from 'moment';
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import SummaryTile from '../components/SummaryTile.vue';

export default {
  name: 'Summary',
  components: {
    Header,
    Navigation,
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
