<template>
    <Form @submit="onSubmit"
          :id="id"
          v-model:title="title"
          v-model:author="author"
          v-model:detail="detail" 
    />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from "vue";
import { useRouter } from 'vue-router'

import BookApiService from "@/service/BookApiService";
import QuasarMsgService from '@/service/QuasarMsgService';
import Form from "../components/morecules/Form.vue";
import type Book from '@/interface/book';

const $q = useQuasar()
const router = useRouter()

const id = ref("")
const title = ref("")
const author = ref("")
const detail = ref("")

const onSubmit = (book: Book) => {
  BookApiService.create(book).then(res => {
    if (res.data) {
      QuasarMsgService.create($q)
      router.push('/books')
    }
  }).catch(err => {
    QuasarMsgService.error($q)
  })
}
</script>
