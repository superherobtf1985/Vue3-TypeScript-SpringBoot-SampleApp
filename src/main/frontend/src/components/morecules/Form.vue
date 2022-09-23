<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input filled v-model="title" label="title *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input filled v-model="author" label="author *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input filled v-model="detail" label="detail *" lazy-rules
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
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }).catch(err => {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'エラーが発生しました'
    })
  })

  // if (!accept.value) {
  //   $q.notify({
  //     color: 'red-5',
  //     textColor: 'white',
  //     icon: 'warning',
  //     message: 'You need to accept the license and terms first'
  //   })
  // } else {
  //   $q.notify({
  //     color: 'green-4',
  //     textColor: 'white',
  //     icon: 'cloud_done',
  //     message: 'Submitted'
  //   })
  // }
}

</script>
  