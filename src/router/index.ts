import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: "/", name: "HomePage", component: () => import("../views/HomePage.vue") },
  { path: "/PrivacyPolicy", name: "PrivacyPolicy", component: () => import('../views/PrivacyPolicy.vue') },
  { path: "/ghostschool", name: "GhostSchool", component: () => import("../views/GhostSchool.vue") },
  { path: "/MapView", name: "MapView", component: () => import("../views/MapView.vue") },
  { path: "/AboutUs", name: "AboutUs", component: () => import("../views/AboutUs.vue") },
  { path: "/PageRydalsHerrgard", name: "PageRydalsHerrgard", component: () => import("../views/PageRydalsHerrgard.vue") },
  { path: "/PageRankhyttan", name: "PageRankhyttan", component: () => import("../views/PageRankhyttan.vue") },
  { path: "/PageFrammegarden", name: "PageFrammegarden", component: () => import("../views/PageFrammegarden.vue") },
  { path: "/PageHjortsberga", name: "PageHjortsberga", component: () => import("../views/PageHjortsberga.vue") },
  { path: "/PageHemsoktaMuseet", name: "PageHemsoktaMuseet", component: () => import("../views/PageHemsoktaMuseet.vue") },
  { path: "/PageGathenhielmskaHuset", name: "PageGathenhielmskaHuset", component: () => import("../views/PageGathenhielmskaHuset.vue") },
  { path: "/PageMysterieMassan", name: "PageMysterieMassan", component: () => import("../views/PageMysterieMassan.vue") },
  { path: "/PageMysteriumMassan", name: "PageMysteriumMassan", component: () => import("../views/PageMysteriumMassan.vue") },
  { path: "/PageRydalsHerrgardEvent", name: "PageRydalsHerrgardEvent", component: () => import("../views/PageRydalsHerrgardEvent.vue") },
  { path: "/PageSpirituellMassa", name: "PageSpirituellMassa", component: () => import("../views/PageSpirituellMassa.vue") },
  { path: "/PageHuntersGrave", name: "PageHuntersGrave", component: () => import("../views/PageHuntersGrave.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scrolla alltid till toppen
    return { top: 0 };
  },
});

export default router;
