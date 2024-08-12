<template>
  <main>
    <CardList 
      :currentPage="currentPage"
      :perPage="perPage"
      :cards="cuttedCards"
    />
    <Pagination
      :currentPage="currentPage"
      :pagesCount="CardsStore.pagesCount"
      @toNextPage="toNextPage"
      @toPrevPage="toPrevPage"
      @changePage="changePage"
    />
    <PerPageChanger />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Pagination from './components/Pagination.vue';
import PerPageChanger from './components/PerPageChanger.vue';
import { useCardsStore } from './stores/cards';
import CardList from './components/CardList.vue';

const CardsStore = useCardsStore();
const {toNextPage, toPrevPage, changePage} = CardsStore
const { currentPage, perPage, cuttedCards } = storeToRefs(CardsStore)
</script>



<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
