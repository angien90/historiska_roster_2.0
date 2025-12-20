import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/", name: "HomePage", component: () => import("../views/HomePage.vue") },
  { path: "/privacy-policy", name: "PrivacyPolicy", component: () => import('../views/PrivacyPolicy.vue') },
  { path: "/ghostschool", name: "GhostSchool", component: () => import("../views/GhostSchool.vue") },
  { path: "/map-view", name: "MapView", component: () => import("../views/MapView.vue") },
  { path: "/about-us", name: "AboutUs", component: () => import("../views/AboutUs.vue") },
  { path: "/rydals-herrgard", name: "RydalsHerrgard", component: () => import("../views/PageRydalsHerrgard.vue") },
  { path: "/rankhyttan", name: "Rankhyttan", component: () => import("../views/PageRankhyttan.vue") },
  { path: "/frammegarden", name: "Frammegarden", component: () => import("../views/PageFrammegarden.vue") },
  { path: "/hjortsberga", name: "Hjortsberga", component: () => import("../views/PageHjortsberga.vue") },
  { path: "/hemsokta-museet", name: "HemsoktaMuseet", component: () => import("../views/PageHemsoktaMuseet.vue") },
  { path: "/gathenhielmska-huset", name: "GathenhielmskaHuset", component: () => import("../views/PageGathenhielmskaHuset.vue") },
  { path: "/mysterium-massan", name: "MysteriumMassan", component: () => import("../views/PageMysteriumMassan.vue") },
  { path: "/mysterie-massan", name: "MysterieMassan", component: () => import("../views/PageMysterieMassan.vue") },
  { path: "/rydals-herrgard-event", name: "RydalsHerrgardEvent", component: () => import("../views/PageRydalsHerrgardEvent.vue") },
  { path: "/spirituell-massa", name: "SpirituellMassa", component: () => import("../views/PageSpirituellMassa.vue") },
  { path: "/hunters-grave", name: "HuntersGrave", component: () => import("../views/PageHuntersGrave.vue") },
  { path: "/jugend-house", name: "JugendHouse", component: () => import("../views/PageJugendHouse.vue") },
  { path: "/jugend-house-event", name: "JugendHouseEvent", component: () => import("../views/PageJugendHouseEvent.vue") },
  { path: "/sonjas-veranda", name: "SonjasVeranda", component: () => import("../views/PageSonjasVeranda.vue") },
  { path: "/annas-bed-and-kitchen", name: "Anna's Bed & Kitchen", component: () => import("../views/PageAnnasBedAndKitchen.vue") }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scrolla alltid till toppen
    return { top: 0 };
  },
});

export default router;
