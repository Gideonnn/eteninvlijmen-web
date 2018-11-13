<template>
  <nav class="panel-nav">
    <ul class="tab tab-block">

      <li class="tab-item">
        <router-link to="/home" :class="{ active: isActive('home') }">
          Stemmen
        </router-link>
      </li>

      <li class="tab-item">
        <router-link to="/overzicht" :class="{ active: isActive('overzicht') }">
          Overzicht
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    isActive(route) {
      return this.$route.path.endsWith(route);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
