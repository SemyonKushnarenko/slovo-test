import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const cards = reactive<number[]>(Array(100).fill(1).map((_, idx) => idx + 1));
  const currentPage = ref<number>(1)
  const perPage = ref<number>(9)

  const cuttedCards = computed(() => cards.slice(
    perPage.value * (currentPage.value - 1),
    perPage.value * currentPage.value
  ))

  const pagesCount = computed<number>(() => {
    const count = Math.ceil(cards.length / perPage.value)
    if (currentPage.value >= count) currentPage.value = count

    return count;
  })

  function increasePerPage() {
    perPage.value++
  }

  function decreasePerPage() {
    if (perPage.value <= 1) return perPage.value = 1
    perPage.value--
  }

  function toNextPage() {
    if (currentPage.value >= pagesCount.value) return currentPage.value = pagesCount.value
    currentPage.value++
  }
  function toPrevPage() {
    if (currentPage.value <= 1) return currentPage.value = 1
    currentPage.value--
  }
  function changePage(valueToChange: number) {
    if (valueToChange < 1 || valueToChange > pagesCount.value) return
    currentPage.value = valueToChange
  }

  return { 
    cards,
    currentPage,
    perPage,
    cuttedCards,

    pagesCount,

    toNextPage,
    toPrevPage,
    increasePerPage,
    decreasePerPage,
    changePage,
  }
})
