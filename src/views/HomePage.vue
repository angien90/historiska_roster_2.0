<script setup>
import TopPage from "../components/TopPage.vue";
import CompletedTasks from "../components/CompletedTasks.vue";
import EducationItems from "../components/EducationItems.vue";
import OurEvents from "../components/OurEvents.vue";
import HighlightsSection from "../components/HighlightsSection.vue";
</script>

<template>
  <TopPage />

  <main>
    <HighlightsSection />
    <CompletedTasks />
    <OurEvents />
    <EducationItems />
  </main>
</template>

<style scoped>
.home-header-content {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .home-header-content {
    display: flex;
    flex-direction: column;
  }

  .home-header-content .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
