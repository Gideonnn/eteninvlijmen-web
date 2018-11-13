<template>
  <nav class="panel-nav">
    <ul class="tab tab-block">

      <li class="tab-item">
        <router-link to="/">Stemmen</router-link>
      </li>

      <li class="tab-item">
        <router-link to="/overzicht">Overzicht</router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
</style>
