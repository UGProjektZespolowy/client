<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">UG WEB SCRAPPER</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Lista źródeł</b-nav-item>
            <b-nav-item href="/mfi">MFI</b-nav-item>
            <b-nav-item href="/informatyka">Informatyka</b-nav-item>
            <b-nav-item href="/ug">UG</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <smart-search></smart-search>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import SmartSearch from "../component/smart-search";
export default {
  components: {SmartSearch}
};
</script>
<style lang="scss">
body {
  background-color: aliceblue;
}
</style>
