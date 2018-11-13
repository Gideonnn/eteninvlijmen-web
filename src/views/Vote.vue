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

        <VoteTile title="Maandag" subtitle="13 november" :checked="true"/>
        <div class="divider"></div>

        <VoteTile title="Dinsdag" subtitle="14 november" :checked="false"/>
        <div class="divider"></div>

        <VoteTile title="Woensdag" subtitle="15 november" :checked="true"/>
        <div class="divider"></div>

        <VoteTile title="Donderdag" subtitle="16 november" :checked="false"/>
        <div class="divider"></div>

        <VoteTile title="Vrijdag" subtitle="17 november" :checked="true"/>
        <div class="divider"></div>

        <VoteTile title="Zaterdag" subtitle="18 november" :checked="false"/>
        <div class="divider"></div>

        <VoteTile title="Zondag" subtitle="19 november" :checked="false"/>
        <div class="divider"></div>

      </div>

      <div class="panel-footer">
        <button class="btn btn-primary btn-block">Opslaan</button>
      </div>

    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
</style>
