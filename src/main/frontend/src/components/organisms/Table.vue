<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead class="bg-teal">
        <template v-for="col in columns" :key="col.id">
          <th class="text-left">{{ col }}</th>
        </template>
        <th></th>
        <th></th>
      </thead>
      <tbody v-for="row in rows" :key="row.id">
        <tr>
          <template v-for="(v, key) in columns" :key="v.id">
            <td>{{ row[key] }}</td>
          </template>
          <td>
            <MyButton color="secondary" @click="onEdit(row.id)">
              <template v-slot:label>変更</template>
            </MyButton>
          </td>
          <td>
            <MyButton color="deep-orange" @click="onDelete(row.id)">
              <template v-slot:label>削除</template>
            </MyButton>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import MyButton from "@/components/atoms/Button.vue"

const props = defineProps<{
  rows: any[],
  columns: object
}>()

const emits = defineEmits<{
  (e: 'onEdit', id: string): void
  (e: 'onDelete', id: string): void
}>()

const onEdit = (id: string) => {
  emits("onEdit", id)
}
const onDelete = (id: string) => {
  emits("onDelete", id)
}

</script>