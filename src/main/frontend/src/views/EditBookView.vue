<template>
    <Form @submit="onSubmit" />
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

const title = ref(null)
const author = ref(null)
const detail = ref(null)

onMounted(() => {
    if (route.params.id) {
        BookApiService.get(route.params.id)
        .then(res => {
            title.value = res.data.title
            author.value = res.data.author
            detail.value = res.data.detail
        })
    }
})

const onSubmit = (book: Book) => {
  BookApiService.update(book).then(res => {
    if (res.data) {
      $q.notify({
        type: 'positive',
        message: '更新しました'
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
