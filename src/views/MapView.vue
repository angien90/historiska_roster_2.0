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
    <h2 class="map-title">{{ translations.map_title }}</h2>
    <div class="custom-map">
      <LMap :zoom="6" :center="[57.5, 13]" style="height: 100%; width: 100%">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <LMarker
          v-for="(location, index) in translations.locations"
          :key="index"
          :lat-lng="[location.lat, location.lng]"
          :icon="customIcon"
        >
          <LPopup>
            <div>
              <strong style="font-weight: bold; text-transform: uppercase">{{
                location.name
              }}</strong
              ><br />
              <span>{{ location.description }}</span
              ><br />
              <a :href="location.url" class="map-link">{{
                translations.readMore
              }}</a>
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
  padding: rem 1rem;
  color: #fff;
  text-align: center;
}

.map-title {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;
}

.custom-map {
  height: 500px;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

/* Leaflet container anpassning */
:deep(.leaflet-container) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  border-radius: 12px;
}

/* Stil på popup-länken */
.map-link {
  display: inline-block;
  margin-top: 8px;
  color: #fff;
  background-color: #444;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.map-link:hover {
  background-color: #666;
}
</style>
