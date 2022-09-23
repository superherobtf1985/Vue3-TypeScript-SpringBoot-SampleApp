<template>
    <Form @submit="onSubmit" />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'

import BookApiService from "@/service/BookApiService";
import Form from "../components/morecules/Form.vue";

const $q = useQuasar()
const router = useRouter()

const title = ref(null)
const author = ref(null)
const detail = ref(null)

type Book = {
    title: string,
    author: string,
    detail: string
}

const onSubmit = (book: Book) => {
  BookApiService.create(book).then(res => {
    if (res.data) {
      $q.notify({
        type: 'positive',
        message: '登録しました'
      })
      router.push('/books')
    }
  }).catch(err => {
    $q.notify({
      type: 'negative',
      message: 'エラーが発生しました'
    })
  })
}
</script>
