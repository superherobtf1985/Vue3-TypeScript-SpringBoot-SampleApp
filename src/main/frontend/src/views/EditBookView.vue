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
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'

import BookApiService from "@/service/BookApiService";
import Form from "../components/morecules/Form.vue";
import type Book from "@/interface/book"

const $q = useQuasar()
const router = useRouter()
const route = useRoute()

const id: string = route.params.id
const title = ref('')
const author = ref('')
const detail = ref('')

onMounted(() => {
  BookApiService.get(id)
  .then(res => {
      title.value = res.data.title
      author.value = res.data.author
      detail.value = res.data.detail
  }).catch(err => {
    $q.notify({
      type: 'negative',
      message: 'エラーが発生しました'
    })
  })
})

const onSubmit = (book: Book) => {
  BookApiService.update(book)
  .then(res => {
    if (res.data) {
      $q.notify({
        type: 'positive',
        message: '更新しました'
      })
      router.push(`/books`)
    }
  }).catch(err => {
    $q.notify({
      type: 'negative',
      message: 'エラーが発生しました'
    })
  })
}
</script>
