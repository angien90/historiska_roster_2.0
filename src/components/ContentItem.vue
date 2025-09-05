<script setup>
</script>

<template>
  <div class="item">
    <slot name="icon"></slot>
    <div class="heading-wrapper">
      <h3><slot name="heading"></slot></h3>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
}

.heading-wrapper h3 {
  display: flex;
  align-items: center; 
  justify-content: center;
  min-height: 3.5rem; 
  padding: 0 0.5rem;
  text-align: center;
  margin-top: 0;
}
</style>
