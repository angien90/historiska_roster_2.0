<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";

import sv from "../Locales/sv/MapView.json";
import en from "../Locales/en/MapView.json";

const { locale } = useI18n();

const translations = computed(() => {
  return locale.value === "sv" ? sv : en;
});

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url,
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

const customIcon = new L.Icon({
  iconUrl: "/images/map_pin.png",
  iconSize: [30, 30],
  iconAnchor: [15, 10],
  popupAnchor: [0, -40],
});
</script>

<template>
  <section class="map-wrapper">
    <h2>{{ translations.map_title }}</h2>
    <div class="custom-map">
      <LMap :zoom="6" :center="[57.5, 13]" style="height: 100%; width: 100%">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors"/>
        <LMarker v-for="(location, index) in translations.locations" :key="index" :lat-lng="[location.lat, location.lng]" :icon="customIcon">
          <LPopup>
            <div class="popup-content">
              <h3 class="title">{{ location.name }}</h3><br />
              <img :src="location.image" alt="location.name"/><br />
              <span class="description">{{ location.description }}</span><br />
              <router-link :to="location.url" class="map-link">{{ translations.readMore }}</router-link>
            </div>
          </LPopup>
        </LMarker>
      </LMap>
    </div>
  </section>
</template>

<style scoped>
.map-wrapper {
  background-color: #000;
  color: #fff;
  text-align: center;
}

.custom-map {
  height: 480px;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255 255 255 / 0.1);
  transition: box-shadow 0.3s ease;
  margin-top: 20px;
}

.custom-map:hover {
  box-shadow: 0 0 20px rgba(255 255 255 / 0.3);
}

.popup-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 220px;
  padding: 0.2rem 0;
  box-sizing: border-box;
}

.title {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  font-family: var(--font-display);
  font-weight: bold; 
  text-transform: uppercase;
  margin-bottom: 0;
  padding: 0;
}

.popup-content img {
  border-radius: 8px;
  max-width: 150px;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.description {
  font-family: var(--font-body);
  font-size: 1rem;
}

:deep(.leaflet-container) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  border-radius: 12px;
}

.map-link {
  display: inline-block;
  color: #fff;
  background-color: #444;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0 0 6px rgba(255 255 255 / 0.1);
  font-family: var(--font-display);
}

.map-link:hover,
.map-link:focus {
  background-color: #666;
  color: #ddd;
  outline: none;
  box-shadow: 0 0 10px rgba(255 255 255 / 0.4);
}


@media (min-width: 600px) {
  .custom-map {
    height: 700px;
    border-width: 2px;
  }

  .title {
    font-size: 1.5rem;
  }

  .popup-content {
    max-width: 300px;
    padding: 1rem 0;
  }

  .popup-content img {
    max-width: 200px;
  }

  .description {
  font-family: var(--font-body);
  font-size: 1.5rem;
}


  .map-link {
    font-size: 1rem;
    padding: 8px 16px;
  }
}
</style>
