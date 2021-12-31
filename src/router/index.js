import { createRouter, createWebHistory } from "vue-router";

// Routes
const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/play",
        name: "Play",
        props: true,
        component: () =>
            import(/* webpackChunkName: "play" */ "../views/Play.vue"),
    },
    {
        path: "/create",
        name: "Create",
        props: true,
        component: () =>
            import(/* webpackChunkName: "create" */ "../views/Create.vue"),
    },
    {
        path: "/play/:id",
        name: "Game",
        props: true,
        component: () =>
            import(/* webpackChunkName: "game" */ "../views/Game.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: () =>
            import(/* webpackChunkName: "notfound" */ "../components/notFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
