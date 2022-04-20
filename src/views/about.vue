<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    about

    <v-icon name="dislike" />

    <div>Message From: {{ state.todos }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onServerPrefetch,
  onUnmounted,
} from "vue";
import { useApp } from "../hooks/app";
import { state } from "../hooks/state";
export default defineComponent({
  setup() {
    const { getTodos } = useApp();
    onServerPrefetch(async () => {
      await getTodos();
    });
    onUnmounted(() => {
      state.todos = null;
    });
    onBeforeMount(async () => {
      if (!state.todos) {
        await getTodos();
      }
    });

    return {
      state,
    };
  },
});
</script>
