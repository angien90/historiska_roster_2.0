import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import GhostSchool from '@/views/GhostSchool.vue';
import MapView from '../views/MapView.vue';
import AboutUs from '@/views/AboutUs.vue';
import PageRydalsHerrgard from '@/views/PageRydalsHerrgard.vue';
import PageRankhyttan from '@/views/PageRankhyttan.vue';
import PageFrammegarden from '../views/PageFrammegarden.vue';
import PageHjortsberga from '../views/PageHjortsberga.vue';
import PageHemsoktaMuseet from '../views/PageHemsoktaMuseet.vue';
import PageGathenhielmskaHuset from '@/views/PageGathenhielmskaHuset.vue';
import PageMysterieMassan from '@/views/PageMysterieMassan.vue';
import PageMysteriumMassan from '@/views/PageMysteriumMassan.vue';
import PageRydalsHerrgardEvent from '@/views/PageRydalsHerrgardEvent.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/ghostschool', name: 'GhostSchool', component: GhostSchool },
  { path: '/MapView', name: 'MapView', component: MapView },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/PageRydalsHerrgard', name: 'PageRydalsHerrgard', component: PageRydalsHerrgard },
  { path: '/PageRankhyttan', name: 'PageRankhyttan', component: PageRankhyttan },
  { path: '/PageFrammegarden', name: 'PageFrammegarden', component: PageFrammegarden },
  { path: '/PageHjortsberga', name: 'PageHjortsberga', component: PageHjortsberga },
  { path: '/PageHemsoktaMuseet', name: 'PageHemsoktaMuseet', component: PageHemsoktaMuseet },
  { path: '/PageGathenhielmskaHuset', name: 'PageGathenhielmskaHuset', component: PageGathenhielmskaHuset },
  { path: '/PageMysterieMassan', name: 'PageMysterieMassan', component: PageMysterieMassan },
  { path: '/PageMysteriumMassan', name: 'PageMysteriumMassan', component: PageMysteriumMassan },
   { path: '/PageRydalsHerrgardEvent', name: 'PageRydalsHerrgardEvent', component: PageRydalsHerrgardEvent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scrolla alltid till toppen
    return { top: 0 }
  }
});

export default router;
