<template>
  <div class="q-pa-md bg-grey-1" style="max-width: 400px">

    <q-form @submit="onSubmit" >
      <q-input standout="bg-teal text-white" v-model="title" label="title *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="author" label="author *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="detail" label="detail *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <div><MyButton type="submit" label="変更" /></div>
    </q-form>

  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import MyButton from "@/components/atoms/Button.vue"

const title = ref(null)
const author = ref(null)
const detail = ref(null)

const emit = defineEmits(['submit'])
const onSubmit = () => {
  emit("submit", {
    title: title.value,
    author: author.value,
    detail: detail.value
  })
}

</script>

<style scoped>

</style>