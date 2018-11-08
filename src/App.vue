<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/spectre.css/dist/spectre.min.css';
@import '../node_modules/spectre.css/dist/spectre-exp.min.css';
@import '../node_modules/spectre.css/dist/spectre-icons.min.css';
</style>
