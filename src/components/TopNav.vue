<script setup>
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';

const { t } = useI18n();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuItems = computed(() => [
  {
    label: t('about_us'),
    to: '/AboutUs'
  },
  {
    label: t('visited_places'),
    children: [
      { label: t('dropdown.mapView'), to: '/MapView' },
      { label: t('dropdown.pageRydalsHerrgard'), to: '/PageRydalsHerrgard' },
      { label: t('dropdown.pageRankhyttan'), to: '/PageRankhyttan' },
      { label: t('dropdown.pageGathenhielmskaHuset'), to: '/PageGathenhielmskaHuset' },
      { label: t('dropdown.pageHemsoktaMuseet'), to: '/PageHemsoktaMuseet' },
      { label: t('dropdown.pageHjortsberga'), to: '/PageHjortsberga' },
      { label: t('dropdown.pageFrammegarden'), to: '/PageFrammegarden' }
    ]
  },
  {
    label: t('other_events'),
    children: [
      { label: t('dropdown.pageRydalsHerrgardEvent'), to: '/PageRydalsHerrgardEvent' },
      { label: t('dropdown.pageMysterieMassan'), to: '/PageMysterieMassan' },
      { label: t('dropdown.pageMysteriumMassan'), to: '/PageMysteriumMassan' },
      ]
  },
  {
    label: t('education'),
    children: [
      { label: t('dropdown.ghost_school'), to: '/ghostschool' },
      { label: t('dropdown.spiritbox'), href: 'https://www.youtube.com/watch?v=2FDUA-i3GbM' },
      { label: t('dropdown.sls_camera'), href: 'https://www.youtube.com/watch?v=I06jPDzyG6Y' },
      { label: t('dropdown.polterscript'), href: 'https://youtu.be/fyxAXO-zfLU?si=NPjWLBzPEYdktrlc' },
      { label: t('dropdown.prs_prp'), href: 'https://www.youtube.com/watch?v=1PUrwAsEhlk' },
      { label: t('dropdown.mel_meter'), href: 'https://youtu.be/EedqF5DVQmk?si=fCzKToL8rPYnAbJc' },
      { label: t('dropdown.pmb'), href: 'https://youtu.be/t1UAxEBWC_U?si=gS62lbVfP3V8WuHo' },
      { label: t('dropdown.k2_meter'), href: 'https://youtu.be/eaNv-ir632g?si=3A50UMWIvDlGPvc-' }
    ]
  },
  {
    label: t('social_media'),
    children: [
      { label: t('dropdown.youtube'), href: 'https://www.youtube.com/@HistoriskaR%C3%B6ster' },
      { label: t('dropdown.instagram'), href: 'https://www.instagram.com/historiskaroster' },
      { label: t('dropdown.tiktok'), href: 'https://www.tiktok.com/@historiskaroster' }
    ]
  },
  {
    label: t('contact_us'),
    href: 'mailto:historiskaroster@outlook.com'
  },
  {
    label: t('tip_us'),
    href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__4JvANBURjRBUktXSjhNVDAzRllESlFaSDI4UlFRVC4u'
  }
]);
</script>


<template>
  <nav class="navbar" role="navigation" aria-label="Main Menu">
    <button
      class="hamburger"
      @click="toggleMenu"
      :aria-expanded="isOpen.toString()"
      aria-controls="nav-links"
      :aria-label="isOpen ? t('close_menu') : t('open_menu')"
    >
      {{ isOpen ? '✕' : '☰' }}
    </button>

    <!-- Mobilmeny (overlay) -->
    <div :class="['mobile-menu-overlay', { open: isOpen }]">
      <ul class="nav-links mobile-only">
        <template v-for="(item, index) in menuItems" :key="index">
          <li v-if="!item.children">
            <router-link v-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
            <a v-else :href="item.href" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
          </li>

          <li v-else class="dropdown">
            <button class="dropbtn">{{ item.label }}</button>
            <ul class="dropdown-content">
              <li v-for="(child, cIndex) in item.children" :key="cIndex">
                <router-link v-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
                <a v-else :href="child.href" target="_blank" rel="noopener">{{ child.label }}</a>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>

    <!-- Desktopmeny (samma struktur) -->
    <ul class="nav-links desktop-only">
      <template v-for="(item, index) in menuItems" :key="'d' + index">
        <li v-if="!item.children">
          <router-link v-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
          <a v-else :href="item.href" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
        </li>

        <li v-else class="dropdown">
          <button class="dropbtn">{{ item.label }}</button>
          <ul class="dropdown-content">
            <li v-for="(child, cIndex) in item.children" :key="'d' + index + '-' + cIndex">
              <router-link v-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
              <a v-else :href="child.href" target="_blank" rel="noopener">{{ child.label }}</a>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>

  <div class="gradient-line"></div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1rem;
  position: relative;
  z-index: 1001;
}

.hamburger {
  position: absolute;
  font-size: 2.2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  top: -3rem;
  left: 1rem;
  z-index: 1002;
}

.mobile-menu-overlay {
  display: none;
}

.mobile-menu-overlay.open {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  padding-top: 6rem;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links.mobile-only {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
}

.nav-links.desktop-only {
  display: none;
}

li,
.link {
  font-size: 1.3rem;
  text-align: center;
}

a {
  text-decoration: none;
  text-transform: lowercase;
  color: white;
  font-weight: normal;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Caesar Dressing", cursive;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #222;
  padding: 1rem;
  top: 100%;
  left: 0;
  list-style: none;
  z-index: 1000;
  min-width: 220px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li {
  text-align: left;
  margin-bottom: 0.6rem;
  white-space: nowrap;
}

.dropdown-content li:hover {
  text-decoration: underline;
}

.gradient-line {
  display: none;
}

@media (min-width: 768px) {
  li,
  .link,
  .dropbtn,
  a {
    font-size: 1.6rem;
  }
}

@media (min-width: 1130px) {
  .hamburger {
    display: none;
  }

  .link,
  .dropbtn,
  a {
    display: flex;
    font-size: clamp(1rem, 0.7vw + 1rem, 1.6rem);
  }

  .mobile-menu-overlay,
  .nav-links.mobile-only {
    display: none;
  }

  .nav-links.desktop-only {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  .gradient-line {
    display: flex;
  }

  .dropdown-content li {
    width: auto;
  }
}
</style>
