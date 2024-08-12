<template>
  <div>
    <p>Изменить кол-во элементов на странице</p>
    <div class="changer">
      <button class="btn" @click="decreasePerPage">&lt;</button>
      <div class="card">{{ perPage }}</div>
      <button class="btn" @click="increasePerPage">&gt;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/stores/cards';
import { storeToRefs } from 'pinia';

const CardsStore = useCardsStore()
const {increasePerPage, decreasePerPage} = CardsStore;
const {perPage} = storeToRefs(CardsStore)
</script>

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

.changer {
  display: flex;
  gap: 10px;
}
</style>