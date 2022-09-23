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
          <td><MyButton label="変更" color="secondary" @click="editBook(book.id)" /></td>
          <td><MyButton label="削除" color="deep-orange" @click="deleteBook(book.id)" /></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onMounted, reactive } from "vue";
import BookApiService from "../../service/BookApiService";
import MyButton from "../atoms/Button.vue"

const $q = useQuasar()

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
  console.log("eidt")
}

const deleteBook = (id: string) => {
  BookApiService.delete(id)
  .then(isDeleted => {
    if (isDeleted) {
      $q.notify({
        type: 'positive',
        message: '削除しました'
      })
    } else {
      $q.notify({
        type: 'negative',
        message: 'エラーが発生しました'
      })
    }
  })
}

</script>