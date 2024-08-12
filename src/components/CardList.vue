<template>
  <div class="list">
    <Card v-for="card in cards" :key="card" :cardNum="card" />
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
const {cards, perPage, currentPage} = defineProps<{
  perPage: number,
  currentPage: number,
  cards: number[]
}>()
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
