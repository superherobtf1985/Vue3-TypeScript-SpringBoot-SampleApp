<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input standout="bg-teal text-white" v-model="title" label="title *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="author" label="author *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="detail" label="detail *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>

  </div>
</template>
  
<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import BookApiService from "../../service/BookApiService";

const $q = useQuasar()

const title = ref(null)
const author = ref(null)
const detail = ref(null)
// const accept = ref(false)

const onSubmit = () => {
  const book = {
    title: title.value,
    author: author.value,
    detail: detail.value
  }

  BookApiService.create(book).then(res => {
    if (res.data) {
      $q.notify({
        type: 'positive',
        message: '登録しました'
      })
    }
  }).catch(err => {
    $q.notify({
      type: 'negative',
      message: 'エラーが発生しました'
    })
  })
}

</script>