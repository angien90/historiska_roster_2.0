<script setup>
import ghostImage from '@/assets/images/generell/empty_room_with_ghost.webp'
</script>

<template>
<section class="upcoming">
    <div>
    <h2>{{ $t('upcoming_title') }}</h2>
    <div class="upcoming-content">
       <img :src="ghostImage" alt="Tomt rum med ett spöke" class="upcoming-image" />
      <div class="upcoming-text">
        <p>{{ $t('upcoming_paragraph1') }}</p>
        <p>{{ $t('upcoming_paragraph2') }}</p>
        <p>{{ $t('upcoming_paragraph3') }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.upcoming {
  max-width: 100%;
  padding: 0.5rem;
  background-color: #252525;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  color: white;
}

.upcoming-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.upcoming-image {
  width: 300px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
  align-self: center;
  padding-top: 30px;
}

@media (min-width: 768px) {
  .upcoming-content {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  .upcoming-text p {
    text-align: left;
  }

  .upcoming-image {
    width: 400px;
  }
}

@media (min-width: 1024px) {
  .upcoming-content {
    gap: 80px;
  } 

  .upcoming-image {
    width: 500px;
  }
}
</style>
