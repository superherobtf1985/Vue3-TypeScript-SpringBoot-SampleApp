<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead class="bg-teal">
        <th class="text-left">タイトル</th>
        <th class="text-left">著者</th>
        <th class="text-left">詳細</th>
        <th></th>
        <th></th>
      </thead>
      <tbody v-for="book in state.books" :key="book.id">
        <tr>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.detail }}</td>
          <td>
            <MyButton color="secondary" @click="editBook(book.id)">
              <template v-slot:label>変更</template>
            </MyButton>
          </td>
          <td>
            <MyButton color="deep-orange" @click="deleteBook(book.id)">
              <template v-slot:label>削除</template>
            </MyButton>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router'

import BookApiService from "@/service/BookApiService";
import QuasarMsgService from '@/service/QuasarMsgService';
import MyButton from "../atoms/Button.vue"

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