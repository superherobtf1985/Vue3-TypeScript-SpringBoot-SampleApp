<template>
  <Table :rows="state.books"
         :columns="columns"
         @onEdit="editBook"
         @onDelete="deleteBook">
  </Table>
</template>
    
<script setup lang="ts">
import Table from "../components/organisms/Table.vue";
import { useQuasar } from 'quasar'
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router'

import BookApiService from "@/service/BookApiService";
import QuasarMsgService from '@/service/QuasarMsgService';

const $q = useQuasar()
const router = useRouter()

const state = reactive({
  books: [{
    id: "",
    title: "",
    author: "",
    detail: ""
  }]
})

const columns = {
  title: 'タイトル',
  author: '著書',
  detail: '詳細'
}

onMounted(() => {
  BookApiService.getAll().then(res => {
    state.books = res.data
  })
})

const editBook = (id: string) => {
  router.push(`books/edit/${id}`)
}

const deleteBook = (id: string) => {
  BookApiService.delete(id)
    .then(isDeleted => {
      if (isDeleted) {
        QuasarMsgService.delete($q)
        state.books = state.books.filter(book => book.id !== id)
      } else {
        QuasarMsgService.error($q)
      }
    })
}
</script>