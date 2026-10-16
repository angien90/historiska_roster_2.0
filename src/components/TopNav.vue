<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();
const isOpen = ref(false);
const menuRef = ref(null);
const closeButton = ref(null);
const openDropdown = ref(null);

const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    document.addEventListener("keydown", trapFocus);
    nextTick(() => {
      const focusableEls = menuRef.value.querySelectorAll("a, button");
      focusableEls[0]?.focus();
    });
  } else {
    document.removeEventListener("keydown", trapFocus);
    closeButton.value?.focus();
  }
};

const trapFocus = (event) => {
  if (!isOpen.value || event.key !== "Tab") return;

  const focusableEls = [
    closeButton.value,
    ...menuRef.value.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ),
  ].filter(Boolean);

  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  if (event.shiftKey && document.activeElement === firstEl) {
    event.preventDefault();
    lastEl.focus();
  } else if (!event.shiftKey && document.activeElement === lastEl) {
    event.preventDefault();
    firstEl.focus();
  }
};

onMounted(() => {
  document.addEventListener("keydown", trapFocus);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", trapFocus);
});

const menuItems = computed(() => [
  {
    label: t("about_us"),
    to: "/about-us",
  },
  {
    label: t("visited_places"),
    children: [
      { label: t("dropdown.mapView"), to: "/map-view" },
      { label: t("dropdown.pageBorgvattnet"), to: "/borgvattnet" },
      { label: t("dropdown.pageBrahehus"), to: "/brahehus" },
      { label: t("dropdown.pageBarnmordarkorset"), to: "/barnmordarkorset" },
      { label: t("dropdown.pageAskhultsBy"), to: "/askhults-by" },
      { label: t("dropdown.pageAnnasBedAndKitchen"), to: "/annas-bed-and-kitchen" },
      { label: t("dropdown.pageSonjasVeranda"), to: "/sonjas-veranda" },
      { label: t("dropdown.pageJugendHouse"), to: "/jugend-house" },
      { label: t("dropdown.pageRydalsHerrgard"), to: "/rydals-herrgard" },
      { label: t("dropdown.pageRankhyttan"), to: "/rankhyttan" },
      { label: t("dropdown.pageGathenhielmskaHuset"), to: "/gathenhielmska-huset" },
      { label: t("dropdown.pageHemsoktaMuseet"), to: "/hemsokta-museet" },
      { label: t("dropdown.pageHjortsberga"), to: "/hjortsberga" },
      { label: t("dropdown.pageFrammegarden"), to: "/frammegarden" },
    ],
  },
  {
    label: t("other_events"),
    children: [
      { label: t("dropdown.pageForedragKungsbacka"), to: "/foredrag-kungsbacka" },
      { label: t("dropdown.pagePoddinspelning"), to: "https://open.spotify.com/episode/0H8A9fXmuiiyC5t0LRAzzr?si=wgwoNotCTZC84eHDQBOJ4Q" },
      { label: t("dropdown.pageJugendHouseEvent"), to: "/jugend-house-event" },
      { label: t("dropdown.pageSpirituellMassa"), to: "/spirituell-massa" },
      { label: t("dropdown.pageRydalsHerrgardEvent"), to: "/rydals-herrgard-event" },
      { label: t("dropdown.pageMysteriumMassan"), to: "/mysterium-massan" },
    ],
  },
  {
    label: t("education"),
    children: [
      { label: t("dropdown.ghost_school"), to: "/ghostschool" },
      { label: t("dropdown.lazer_grid"), href: "https://youtu.be/UZf5Xz9MaL4?si=_yWruPKMJon3HaiB" },
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
      { label: t("dropdown.facebook"), href: "https://www.facebook.com/profile.php?id=61564978259193" },
    ],
  },
  {
    label: t("commuity"),
    children: [
      { label: t("dropdown.digg_private"), href: "https://digg.com/paranormal-activities/WArllRS/dare-to-share-welcome-to-paranormal" },
      { label: t("dropdown.digg_team"), href: "https://digg.com/ghosthunters/11tWYNS/welcome-to-ghosthaunters-a-hub-for" },
    ],
  },
  { label: t("contact_us"), href: "mailto:historiskaroster@outlook.com" },
  {
    label: t("tip_us"),
    href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__4JvANBURjRBUktXSjhNVDAzRllESlFaSDI4UlFRVC4u",
  },
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
            <a v-if="item.to && item.to.startsWith('http')" :href="item.to" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
            <router-link v-else-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
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
                <!-- NY KONTROLL HÄR: Kollar om to börjar med http -->
                <a v-if="child.to && child.to.startsWith('http')" :href="child.to" class="link" target="_blank" rel="noopener">{{ child.label }}</a>
                <router-link v-else-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
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
          <a v-if="item.to && item.to.startsWith('http')" :href="item.to" class="link" target="_blank" rel="noopener">{{ item.label }}</a>
          <router-link v-else-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
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
              <!-- NY KONTROLL HÄR ÄVEN FÖR DESKTOP -->
              <a v-if="child.to && child.to.startsWith('http')" :href="child.to" class="link" target="_blank" rel="noopener">{{ child.label }}</a>
              <router-link v-else-if="child.to" :to="child.to" class="link">{{ child.label }}</router-link>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  cursor: pointer;
  z-index: 1002;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hamburger:hover,
.hamburger:focus-visible {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.35);
  outline: none;
}

.hamburger.open {
  padding-right: 1rem;
}

.mobile-menu-overlay {
  display: none;
}

.mobile-menu-overlay.open {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(12, 12, 12, 0.96);
  backdrop-filter: blur(12px);
  z-index: 1000;
  padding: 5.5rem 1.5rem 2rem;
  color: var(--color-text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links.mobile-only {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: min(100%, 400px);
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
  font-size: 1.35rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  transition: color 0.25s ease, transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

a:hover,
.link:hover,
.dropbtn:hover,
a:focus-visible,
.link:focus-visible,
.dropbtn:focus-visible {
  color: #f7d57b;
  text-decoration: none;
  outline: none;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

button.dropbtn {
  padding: 0;
}

.dropdown-content {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.7rem 0.4rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  min-width: auto;
}

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
    font-size: clamp(1rem, 1.45vw, 1.55rem);
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
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    width: 100%;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
  }

  .desktop-only > li {
    position: relative;
  }

  .desktop-only .dropdown {
    position: relative;
  }

  .desktop-only .dropbtn {
    padding: 0;
    border-radius: 999px;
    border: 1px solid transparent;
  }

  .desktop-only .dropbtn:hover,
  .desktop-only .dropbtn:focus-visible {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }

  .dropdown-content {
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    min-width: 260px;
    max-height: 70vh;
    overflow-y: auto;
    background: rgba(23, 23, 23, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    padding: 0.8rem 0.6rem;
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.38);
    display: none;
    opacity: 0;
    pointer-events: none;
    z-index: 1000;
  }

  .dropdown:hover .dropdown-content,
  .dropdown:focus-within .dropdown-content {
    display: block !important;
    opacity: 1;
    pointer-events: auto;
  }

  .dropdown-content li {
    width: auto;
    top: 50px;
  }

  .dropdown-content .link {
    display: block;
    padding: 0.55rem 0.8rem;
    border-radius: 8px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .dropdown-content li + li {
    margin-top: 0.25rem;
  }

  .dropdown-content .link:hover,
  .dropdown-content .link:focus-visible {
    background: rgba(255, 255, 255, 0.06);
    color: #f7d57b;
  }

  .gradient-line {
    display: block;
  }

  .hidden {
    display: none !important;
  }
}
</style>