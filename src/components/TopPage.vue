<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <img src="/images/generell/logo.svg" alt="Historiska Rösters logga" class="logo" width="125" height="125" loading="lazy"/>

  <div class="greetings">
    <h1 class="titel">{{ t("title") }}</h1>
    <h2>{{ t("subtitle") }}</h2>
  
    <!-- Sociala ikoner -->
    <div class="social-icons">
      <a href="https://www.instagram.com/historiskaroster" target="_blank" rel="noopener">
        <img src="/images/social_media/InstagramIcon.webp" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@historiskaroster" target="_blank" rel="noopener">
        <img src="/images/social_media/TikTokIcon.webp" alt="TikTok" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61564978259193" target="_blank" rel="noopener">
        <img src="/images/social_media/FacebookIcon.webp" alt="Facebook" />
      </a>
      <a href="https://www.youtube.com/@HistoriskaR%C3%B6ster" target="_blank" rel="noopener">
        <img src="/images/social_media/YouTubeIcon.webp" alt="Youtube" />
      </a>
      <a href="https://soundcloud.com/historiska-roester/sets/historiska-roester" target="_blank" rel="noopener">
        <img src="/images/social_media/SoundCloudIcon.webp" alt="SoundCloud" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 1rem;
  height: 200px;
  width: auto;
  padding-top: 20px;
}

h1 {
  margin-top: 2rem;
}

h2 {
  font-family: "Amatic SC", cursive;
  font-weight: lighter;
  padding: 0 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem; 
  margin-bottom: 2rem;
}

.social-icons img {
  width: 24px;   
  height: 24px;
  object-fit: contain;  
  transition: transform 0.2s; 
}

.social-icons img:hover {
  transform: scale(1.2); 
}

@media (min-width: 768px) {
  .logo {
    margin: 0 auto 1rem;
    height: 300px;
    width: auto;
  }

  h2 {
  padding-bottom: 2rem;
  font-size: 2.5rem;
  }

  .social-icons img {
  width: 40px;   
  height: 40px;
  }
}
</style>
