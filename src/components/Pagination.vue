<template>
  <div class="pagination-wrapper">
    <button 
      :disabled="currentPage <= 1" 
      class="btn" 
      @click="$emit('toPrevPage')"
    >
      &lt;
    </button>
    <button 
      class="btn" 
      @click="$emit('changePage', 1)"
      v-if="currentPage > 1"
    >
      1
    </button>
    <button 
      class="btn" 
      v-if="currentPage > 3"
    >
      ...
    </button>
    <button 
      class="btn"
      v-if="currentPage > 2"
      @click="$emit('changePage', currentPage - 1)"
    >
      {{ currentPage - 1 }}
    </button>
    <button 
      class="btn current" 
    >
      {{ currentPage }}
    </button>
    <button 
      class="btn"
      v-if="currentPage < pagesCount - 1"
      @click="$emit('changePage', currentPage + 1)"
    >
      {{ currentPage + 1 }}
    </button>
    <button 
      class="btn" 
      v-if="currentPage < pagesCount - 2"
    >
      ...
    </button>
    <button 
      class="btn" 
      @click="$emit('changePage', pagesCount)"
      v-if="currentPage < pagesCount"
    >
      {{ pagesCount }}
    </button>
    <button 
      :disabled="currentPage >= pagesCount" 
      class="btn" 
      @click="$emit('toNextPage')"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  pagesCount: number
}>()
defineEmits<{
  toPrevPage: []
  toNextPage: []
  changePage: [valueToChange: number]
}>()
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  gap: 5px;
}

.btn {
  padding: 10px;
}
.current {
  border: 2px solid navy;
}
</style>
