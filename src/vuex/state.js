import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        searchBox: "",
        loading: false,
        news: [],
        searchResults: {}
    },
    mutations: {
        loadNews (state, news) {
            state.news = news;
            state.loading = false;
        },
        setSearch(state, search) {
            state.searchBox = search;
        },
        setLoading(state) {
            state.loading = true;
        },
        resetNews(state) {
            state.news = [];
        },
        setSearchResults(state, results) {
            state.searchResults = results;
        }
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getLoading(state) {
            return state.loading;
        },
        getSearch(state) {
            return state.searchBox;
        },
        getSearchResults(state) {
            return state.searchResults;
        }
    },
    actions: {
        LOAD_NEWS(context, news) {
            context.commit('loadNews', news);
        },
        SET_SEARCH(context, search) {
            context.commit('setSearch', search);
        },
        SET_SEARCH_RESULTS(context, searchResults) {
            context.commit('setSearchResults', searchResults)
        },
        SET_LOADING(context, status) {
            context.commit('setLoading', status);
        },
        RESET_NEWS(context) {
            context.commit('resetNews');
        }
    }
})