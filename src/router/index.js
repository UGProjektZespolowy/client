import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Sources from "../views/sources";
import SearchResults from "../views/search-results";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }, {
        path: "/mfi",
        name: "MFI",
        component: Sources,
        props: {source: 'mfi'}
    }, {
        path: "/informatyka",
        name: "Informatyka",
        component: Sources,
        props: {source: 'cs'}
    },{
        path: "/ug",
        name: "Uniwersytet Gdański",
        component: Sources,
        props: {source: 'ug'}
    },{
        path: "/search/:text",
        name: "Search",
        component: SearchResults
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;