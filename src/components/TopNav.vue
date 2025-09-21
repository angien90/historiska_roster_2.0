<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, nextTick } from "vue";
import { onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();
const isOpen = ref(false);
const menuRef = ref(null);
const closeButton = ref(null);

const openDropdown = ref(null)

  const toggleDropdown = (index) => {
    openDropdown.value = openDropdown.value === index ? null : index
  }

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    document.addEventListener('keydown', trapFocus);

    // Fokusera första tabb-bara element i menyn när den är synlig
    nextTick(() => {
      const focusableEls = menuRef.value.querySelectorAll('a, button');
      focusableEls[0]?.focus();
    });
  } else {
    document.removeEventListener('keydown', trapFocus);

    // Sätt tillbaka fokus till hamburgaren när menyn stängs
    closeButton.value?.focus();
  }
};

const trapFocus = (event) => {
  if (!isOpen.value || event.key !== "Tab") return;

  // Inkludera hamburgaren i tabb-fokus
  const focusableEls = [
    closeButton.value, 
    ...menuRef.value.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].filter(Boolean);

  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstEl) {
      event.preventDefault();
      lastEl.focus();
    } else if (!event.shiftKey && document.activeElement === lastEl) {
      event.preventDefault();
      firstEl.focus();
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', trapFocus);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', trapFocus);
});

const menuItems = computed(() => [
  {
    label: t("about_us"),
    to: "/AboutUs",
  },
  {
    label: t("visited_places"),
    children: [
      { label: t("dropdown.mapView"), to: "/MapView" },
      { label: t("dropdown.pageHuntersGrave"), to: "/PageHuntersGrave" },
      { label: t("dropdown.pageRydalsHerrgard"), to: "/PageRydalsHerrgard" },
      { label: t("dropdown.pageRankhyttan"), to: "/PageRankhyttan" },
      { label: t("dropdown.pageGathenhielmskaHuset"), to: "/PageGathenhielmskaHuset" },
      { label: t("dropdown.pageHemsoktaMuseet"), to: "/PageHemsoktaMuseet" },
      { label: t("dropdown.pageHjortsberga"), to: "/PageHjortsberga" },
      { label: t("dropdown.pageFrammegarden"), to: "/PageFrammegarden" },
    ],
  },
  {
    label: t("other_events"),
    children: [
      { label: t("dropdown.pageRydalsHerrgardEvent"), to: "/PageRydalsHerrgardEvent" },
      { label: t("dropdown.pageMysterieMassan"), to: "/PageMysterieMassan" },
      { label: t("dropdown.pageMysteriumMassan"), to: "/PageMysteriumMassan" },
    ],
  },
  {
    label: t("education"),
    children: [
      { label: t("dropdown.ghost_school"), to: "/ghostschool" },
      { label: t("dropdown.spiritbox"), href: "https://www.youtube.com/watch?v=2FDUA-i3GbM" },
      { label: t("dropdown.sls_camera"), href: "https://www.youtube.com/watch?v=I06jPDzyG6Y" },
      { label: t("dropdown.polterscript"), href: "https://youtu.be/fyxAXO-zfLU?si=NPjWLBzPEYdktrlc" },
      { label: t("dropdown.prs_prp"), href: "https://www.youtube.com/watch?v=1PUrwAsEhlk" },
      { label: t("dropdown.mel_meter"), href: "https://youtu.be/EedqF5DVQmk?si=fCzKToL8rPYnAbJc" },
      { label: t("dropdown.pmb"), href: "https://youtu.be/t1UAxEBWC_U?si=gS62lbVfP3V8WuHo" },
      { label: t("dropdown.k2_meter"), href: "https://youtu.be/eaNv-ir632g?si=3A50UMWIvDlGPvc-" },
    ],
  },
  {
    label: t("social_media"),
    children: [
      { label: t("dropdown.youtube"), href: "https://www.youtube.com/@HistoriskaR%C3%B6ster" },
      { label: t("dropdown.instagram"), href: "https://www.instagram.com/historiskaroster" },
      { label: t("dropdown.tiktok"), href: "https://www.tiktok.com/@historiskaroster" },
    ],
  },
  { label: t("contact_us"), href: "mailto:historiskaroster@outlook.com" },
  { label: t("tip_us"), href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__4JvANBURjRBUktXSjhNVDAzRllESlFaSDI4UlFRVC4u" },
]);
</script>


<template>
  <nav class="navbar" role="navigation" aria-label="Main Menu">
    <button
    ref="closeButton"
    class="hamburger"
    :class="{ open: isOpen }"
    :aria-expanded="isOpen ? 'true' : 'false'"
    aria-controls="main-menu"
    :aria-label="isOpen ? t('close_menu') : t('open_menu')"
    @click="toggleMenu">
    {{ isOpen ? t('close_menu') : t('menu') }} {{ isOpen ? "✕" : "☰" }}
  </button>

    <div :class="['mobile-menu-overlay', { open: isOpen }]">
      <ul id="main-menu" ref="menuRef" class="nav-links mobile-only" :aria-hidden="isOpen ? 'false' : 'true'">
        <template v-for="(item, index) in menuItems" :key="index">
          <li v-if="!item.children" ref="firstMenuItem">
            <router-link v-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
            <a v-else :href="item.href" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
          </li>

          <li v-else class="dropdown">
    <button
      class="dropbtn"
      @click="toggleDropdown(index)"
      :aria-expanded="openDropdown === index ? 'true' : 'false'"
    >
      {{ item.label }}
    </button>
    <ul v-show="openDropdown === index" class="dropdown-content">
      <li v-for="(child, cIndex) in item.children" :key="cIndex">
        <router-link v-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
        <a v-else :href="child.href" class="link" target="_blank" rel="noopener">{{ child.label }}</a>
      </li>
    </ul>
  </li>
        </template>
      </ul>
    </div>

    <ul class="nav-links desktop-only">
      <template v-for="(item, index) in menuItems" :key="'d' + index">
        <li v-if="!item.children">
          <router-link v-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
          <a v-else :href="item.href" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
        </li>

        <li v-else class="dropdown">
          <button
            class="dropbtn"
            @click="toggleDropdown(index)"
            :aria-expanded="openDropdown === index ? 'true' : 'false'"
          >
            {{ item.label }}
          </button>
          <ul v-show="openDropdown === index" class="dropdown-content">
            <li v-for="(child, cIndex) in item.children" :key="cIndex">
              <router-link v-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
              <a v-else :href="child.href" class="link" target="_blank" rel="noopener">{{ child.label }}</a>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
  position: relative;
  z-index: 1001;
  color: var(--color-text);
}

.hamburger {
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  top: -5px;
  z-index: 1002;
  transition: transform 0.3s ease;
  font-family: var(--font-display);
}

.hamburger:hover {
  transform: scale(1.1);
}

.hamburger.open { 
  display: flex;
  text-align:end;
  padding-right: 10px;
}

.mobile-menu-overlay {
  display: none;
}

.mobile-menu-overlay.open {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #111, var(--color-background));
  z-index: 1000;
  padding-top: 5rem;
  padding-left: 2rem;
  color: var(--color-text);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links.mobile-only {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links.desktop-only {
  display: none;
}

li {
  text-align: left;
}

a,
.link,
.dropbtn {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: var(--font-display);
}

a:hover,
.link:hover,
.dropbtn:hover {
  text-decoration: underline;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 0.3s ease;
}

.dropbtn:hover {
  text-decoration: underline;
}

.dropdown-content {
  position: relative; /* istället för absolute */
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    min-width: auto;
}

/* När Vue sätter v-show = true så får den inline style display:block,
   så vi "förbättrar" med extra states */
.dropdown-content[style*="display: block"] {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

.dropdown-content li {
  margin: 0.5rem 1.5rem;
  list-style: none;

}

.dropdown-content li:last-child {
  margin-bottom: 0;
}

.gradient-line {
  display: none;
}

@media (min-width: 768px) {
  a,
  .link,
  .dropbtn {
    font-size: 1.5rem;
  }
}

@media (min-width: 1130px) {
.navbar {
  width: 100%;
  padding-top: 0;
}

  .hamburger {
    display: none;
  }

  a,
  .link,
  .dropbtn {
    font-size: clamp(1rem, 1.7vw, 1.7rem);
  }

  .dropdown-content {
    min-width: 280px;
    padding: 1.2rem;
  }

  .dropdown-content li {
    font-size: 1.2rem;
    padding: 0.4rem 0;
  }

  .dropdown:hover .dropdown-content {
    display: block !important;
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links.desktop-only a,
  .nav-links.desktop-only .link,
  .nav-links.desktop-only .dropbtn {
    white-space: nowrap;
  }

  .mobile-menu-overlay,
  .nav-links.mobile-only {
    display: none;
  }

  .nav-links.desktop-only {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    gap: 2rem;
  }

  .dropdown-content {
  position: absolute;
  top: 100%;       /* direkt under knappen */
  left: 0;
  min-width: 200px; /* justera efter behov */
  background-color: #181818;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
  display: none;
  opacity: 0;
  pointer-events: none;
  z-index: 1000;  
  }

  .dropdown-content li {
    width: auto;
    top: 50px;
  }

  .gradient-line {
    display: block;
  }

  .hidden {
    display: none !important;
  }
}
</style>
