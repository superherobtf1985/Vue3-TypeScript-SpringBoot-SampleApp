<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn :color=color
           :textColor=textColor
           :type=type 
           @click="onClick">
      <slot name="label">変更</slot>
    </q-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: "MyButton"
}
</script>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  textColor: {
    type: String
  },
  type: {
    type: String
  }
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit("click");
}
</script>
  