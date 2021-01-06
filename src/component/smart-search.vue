<template>
  <b-nav-form>
    <b-form-input size="sm" v-model="search" class="mr-sm-2" placeholder="Szukaj"></b-form-input>
    <b-button @click="goToSearchPage()" size="sm" class="my-2 my-sm-0" type="submit">Szukaj</b-button>
  </b-nav-form>
</template>
<script>
import {mapGetters, mapActions} from "vuex";

export default {
  methods: {
    ...mapGetters(['getSearch']),
    ...mapActions(['SET_SEARCH']),
    goToSearchPage() {
      this.$router.push({ name: 'Search', params: { text: this.getSearch() }})
    }
  },
  computed: {
    search: {
      get() {
        return this.getSearch();
      },
      set(value) {
        this.SET_SEARCH(value);
      }
    }
  }
};
</script>
<style lang="scss">
  .search-container {
    position: relative;
    display: inline-block;
    float: right;
  }
  .search-control {

  }
</style>