<script setup>
import TopNav from '../components/TopNav.vue';
import TopPage from '../components/TopPage.vue'
import UpComing from '../components/UpComing.vue';
import CompletedTasks from '../components/CompletedTasks.vue';
import EducationItems from '@/components/EducationItems.vue';
import OurEvents from '@/components/OurEvents.vue';
</script>

<template>
  <header>
    <TopNav />
    <TopPage />
  </header>

  <main>
    <UpComing />
    <CompletedTasks />
    <OurEvents />
    <EducationItems />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
 
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
