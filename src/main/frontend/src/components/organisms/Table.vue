<template>
  <div class="q-pa-md">
    <q-table 
      title="書籍一覧" 
      :rows="state.books" 
      :columns="columns" 
      row-key="name"
    ></q-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import BookApiService from "../../service/BookApiService";

const state = reactive({
  books: []
})

onMounted(() => {
  BookApiService.getAll().then(res => {
    state.books = res.data
  })
})

const columns = [
  { name: 'title', required: true, label: 'タイトル', align: 'left', field: 'title', sortable: true },
  { name: 'author', align: 'left', label: '著者', field: 'author', sortable: true },
  { name: 'detail', align: 'left', label: '詳細', field: 'detail', sortable: true }
]

</script>