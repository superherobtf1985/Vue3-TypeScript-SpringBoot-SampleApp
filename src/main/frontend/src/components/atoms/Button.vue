<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn :color=color
           :textColor=textColor
           :label=label 
           :type=type 
           @click="onClick"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "MyButton"
}
</script>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
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
  