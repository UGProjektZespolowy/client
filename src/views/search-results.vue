<template>
  <div>
    <h1>Wynik dla {{search}}</h1>
    <template v-for="(news, collection) in search_results" v-if="!loading">
      <template v-if="news.length > 0">
        <h3>Sekcja: <b>{{collection_resolvers[collection]}}</b> </h3>
        <news-card v-for="info in news" :news="info" :key="info._id"></news-card>
      </template>
    </template>
    <loading-spinner v-else></loading-spinner>
  </div>
</template>
<script>
import axios from "axios";
import {mapGetters, mapActions} from "vuex";
import NewsCard from "../component/news-card";
import LoadingSpinner from "../component/loading-spinner";

  export default {
    components: {NewsCard, LoadingSpinner},
    data() {
      return {
        loading: false,
      }
    },
    methods: {
      ...mapGetters(['getSearchResults', 'getSearch']),
      ...mapActions(['SET_SEARCH_RESULTS', 'SET_SEARCH']),
      loadSearchResults() {
        this.loading = true;
        axios.get('/search', {
          params: {
            text: this.$route.params.text
          }
        }).then(results => {
          this.search_results = results.data;
          this.loading = false;
        });
      }
    },
    computed: {
      search() {
        return this.$route.params.text;
      },
      search_results: {
        get() {
          return this.getSearchResults();
        },
        set(value) {
          this.SET_SEARCH_RESULTS(value);
        }
      }
    },
    created() {
      this.loadSearchResults();
    }
  };
</script>