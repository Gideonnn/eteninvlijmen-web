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

        <VoteTile
          title="Maandag"
          :subtitle="mondayDate"
          :checked="checked[0]"
          @toggle="onToggle(0)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Dinsdag"
          :subtitle="tuesdayDate"
          :checked="checked[1]"
          @toggle="onToggle(1)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Woensdag"
          :subtitle="wednesdayDate"
          :checked="checked[2]"
          @toggle="onToggle(2)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Donderdag"
          :subtitle="thursdayDate"
          :checked="checked[3]"
          @toggle="onToggle(3)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Vrijdag"
          :subtitle="fridayDate"
          :checked="checked[4]"
          @toggle="onToggle(4)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Zaterdag"
          :subtitle="saturdayDate"
          :checked="checked[5]"
          @toggle="onToggle(5)"
        />
        <div class="divider"></div>

        <VoteTile
          title="Zondag"
          :subtitle="sundayDate"
          :checked="checked[6]"
          @toggle="onToggle(6)"
        />
        <div class="divider"></div>

      </div>

      <div class="panel-footer">
        <button class="btn btn-primary btn-block">Opslaan</button>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import VoteTile from '../components/VoteTile.vue';

export default {
  name: 'Vote',
  components: {
    Header,
    Navigation,
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
  data() {
    return {
      checked: [true, false, true, false, false, true, true],
    };
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
    onToggle(index) {
      this.checked.splice(index, 1, !this.checked[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
