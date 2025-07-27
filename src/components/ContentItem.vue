<script setup>
</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <div class="heading-wrapper">
      <h3>
        <slot name="heading"></slot>
      </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
}

.details {
  flex: none; 
  margin-left: 0;
  text-align: center;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 200px; 
  height: auto;
  color: var(--color-text);
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.heading-wrapper {
  display: flex;
  align-items: center; 
  justify-content: center; 
  min-height: 3.5rem;
  text-align: center;
  padding: 0 0.5rem;
}

/* Media query - om du vill ha rad-layout på större skärmar */
@media (min-width: 768px) {
  .item {
    align-items: center;
    margin-top: 0;
  }

  .details {
    margin-left: 1rem;
    text-align: left;
  }

.item:before,
.item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>