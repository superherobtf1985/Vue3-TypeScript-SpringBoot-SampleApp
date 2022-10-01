<template>
  <div class="q-pa-md bg-grey-1" style="max-width: 400px">
    <q-form @submit="onSubmit" >
      <q-input standout="bg-teal text-white" v-model="title" label="title *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="author" label="author *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <q-input standout="bg-teal text-white" v-model="detail" label="detail *" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" />

      <div>
        <MyButton type="submit">
          <template v-slot:label>
            <slot name="label" />
          </template>
        </MyButton>
      </div>
    </q-form>

  </div>
</template>
  
<script setup lang="ts">
import MyButton from "@/components/atoms/Button.vue"
import type book from "@/interface/book"

const props = defineProps<{
  id: string
  title: string
  author: string
  detail: string
}>()

const emits = defineEmits<{
  (e: 'submit', book: book): void
}>()

const onSubmit = () => {
  emits("submit", {
    id: props.id,
    title: props.title,
    author: props.author,
    detail: props.detail
  })
}

</script>