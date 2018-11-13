<template>
  <div class="column col-12">
    <div class="panel">

      <div class="panel-header">
        <Header title="Gideon" subtitle="WEEK 32"/>
      </div>

      <div class="panel-nav">
        <Navigation />
      </div>

      <div class="panel-body">

        <SummaryTile title="Maandag" subtitle="13 november" :percent="40"/>
        <div class="divider"></div>

        <SummaryTile title="Dinsdag" subtitle="14 november" :percent="10"/>
        <div class="divider"></div>

        <SummaryTile title="Woensdag" subtitle="15 november" :percent="60"/>
        <div class="divider"></div>

        <SummaryTile title="Donderdag" subtitle="16 november" :percent="60"/>
        <div class="divider"></div>

        <SummaryTile title="Vrijdag" subtitle="17 november" :percent="80"/>
        <div class="divider"></div>

        <SummaryTile title="Zaterdag" subtitle="18 november" :percent="40"/>
        <div class="divider"></div>

        <SummaryTile title="Zondag" subtitle="19 november" :percent="20"/>
        <div class="divider"></div>

      </div>

    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
</style>
