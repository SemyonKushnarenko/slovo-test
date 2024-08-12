<script setup lang="ts">
defineProps<{
  cardNum: number
}>()
</script>

<template>
  <div class="card">{{ cardNum }}</div>
</template>

<style scoped>
.card {
  border: black 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 2rem;
  color: red;
}
</style>