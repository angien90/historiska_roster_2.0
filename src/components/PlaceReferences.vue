<script setup>
import { ref } from 'vue'

defineProps({
  moreTitle: {
    type: String,
    required: true,
  },
  more: String,
  sources: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <section class="section">
    <button class="toggle-btn" @click="toggle">
      {{ moreTitle }} <span>{{ isOpen ? '▲' : '▼' }}</span>
    </button>

    <div v-if="isOpen" class="content">
      <p v-if="more" v-html="more"></p>

      <ul v-if="sources.length" class="source-list">
        <li v-for="(source, index) in sources" :key="index">
          <a v-if="source.url" :href="source.url" target="_blank" rel="noopener">{{ source.text }}</a>
          <span v-else>{{ source.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.toggle-btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(----color-second-background);
  color: white;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-family: var(----font-display);
  font-size: 1.5rem;
  margin-top: 20px;
}

.content {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.source-list {
  padding-left: 0;
  list-style-type: none;
  margin-top: 1rem;
}

.source-list li {
  margin-bottom: 0.5rem;
}

.source-list li a {
  text-decoration: none;
  color: inherit;
  transition: text-decoration 0.2s ease;
}

.source-list li a:hover {
  text-decoration: underline;
}
</style>
