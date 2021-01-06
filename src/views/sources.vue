<template>
  <div>

    <b-img style="margin-top: 50px;" v-if="loading" src="https://kif.info.pl/file/2018/12/lg.ring-loading-gif.gif" fluid center alt="Responsive image"></b-img>

    <b-card v-for="info in news"
            :key="info._id"
            :title="info.Title"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100rem;"
            class="mb-3">
      <b-card-text v-html="info.News">

      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";

export default {
  props: ['source'],
  methods: {
    ...mapActions(['LOAD_NEWS', 'SET_LOADING', 'RESET_NEWS']),
    ...mapGetters(['getNews', 'getLoading']),
    loadNews(value) {
      this.RESET_NEWS();
      this.SET_LOADING(true);
      this.axios.get(`/${value}`).then(results => this.LOAD_NEWS(results.data));
    }
  },
  created() {
    this.loadNews(this.source);
  },
  computed: {
    news() {
      return this.getNews();
    },
    loading() {
      return this.getLoading();
    }
  },
  watch: {
    source(value) {
      this.loadNews(value);
    }
  }
};
</script>