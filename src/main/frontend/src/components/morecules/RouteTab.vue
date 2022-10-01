<template>
    <div v-for="route in routes" :key="route.to">
        <q-route-tab :to="route.to" :label="route.label" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const routes = reactive([
    { to: "/books", label: "書籍一覧" },
    { to: "/new", label: "新規追加" },
    { to: "/", label: "トップ" }
])
</script>