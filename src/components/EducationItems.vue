<script setup>
import ContentItem from './ContentItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section class="completed-tasks">
    <h2>{{ t('learn_heading') }}</h2>
    <p>
      {{ t('learn_subheading1') }}
      <router-link to="/ghostschool" class="link">Spökakademin.</router-link>
      
    </p>

    <div class="content-wrapper">
      <a href="https://www.youtube.com/watch?v=2FDUA-i3GbM" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/spiritbox.webp" alt="Spiritbox" width="125" height="125" />
          </template>
          <template #heading>{{ t('spiritbox') }}</template>
        </ContentItem>
      </a>

      <a href="https://www.youtube.com/watch?v=I06jPDzyG6Y" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/sls_kamera.webp" alt="SLS-kamera" width="125" height="125" />
          </template>
          <template #heading>{{ t('sls_camera') }}</template>
        </ContentItem>
      </a>

      <a href="https://youtu.be/fyxAXO-zfLU?si=NPjWLBzPEYdktrlc" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/polterscript.webp" alt="Polterscript" width="125" height="125" />
          </template>
          <template #heading>{{ t('polterscript') }}</template>
        </ContentItem>
      </a>

      <a href="https://www.youtube.com/watch?v=1PUrwAsEhlk" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/paranormal_rem_static.webp" alt="PRS & PRP" width="125" height="125" />
          </template>
          <template #heading>{{ t('prs_prp') }}</template>
        </ContentItem>
      </a>

      <a href="https://youtu.be/EedqF5DVQmk?si=fCzKToL8rPYnAbJc" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/mel_meter.webp" alt="MEL-meter" width="125" height="125" />
          </template>
          <template #heading>{{ t('mel_meter') }}</template>
        </ContentItem>
      </a>

      <a href="https://youtu.be/t1UAxEBWC_U?si=gS62lbVfP3V8WuHo" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/PMB.webp" alt="PMB" width="125" height="125" />
          </template>
          <template #heading>{{ t('pmb') }}</template>
        </ContentItem>
      </a>

      <a href="https://youtu.be/eaNv-ir632g?si=3A50UMWIvDlGPvc-" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/equipment/K2_matare.webp" alt="K2-mätare" width="125" height="125" />
          </template>
          <template #heading>{{ t('k2_meter') }}</template>
        </ContentItem>
      </a>
    </div>
  </section>
</template>

<style scoped>
.completed-tasks {
  max-width: 100%;
  margin: 20px auto;
  padding: 2rem;
  background-color: #252525;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  color: white;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
}

.content {
    background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 12px;
  flex: 1 1 250px;
  max-width: 300px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
}

.content img {
  width: 120%;
  max-width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
}

@media (min-width: 768px) {
  .content img {
    width: 100%;
  }
}
</style>
