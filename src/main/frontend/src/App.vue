<script setup lang="ts">
import { RouterView } from "vue-router";
import RouteTab from "./components/morecules/RouteTab.vue";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          書籍管理アプリ
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <route-tab />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
