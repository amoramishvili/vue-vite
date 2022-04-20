<template>
  <div>
    <router-link to="about">about</router-link>
    home
    <div>Message From: {{ state.info }}</div>
  </div>
</template>

<script lang="ts">
import {
  watch,
  defineComponent,
  onServerPrefetch,
  onUnmounted,
  onBeforeMount,
} from "vue";
import { useHead } from "@vueuse/head";
import { useApp } from "../hooks/app";
import { state } from "../hooks/state";

export default defineComponent({
  setup() {
    const { getApp } = useApp();
    onServerPrefetch(async () => {
      await getApp();
    });
    onUnmounted(() => {
      state.info = null;
    });
    onBeforeMount(async () => {
      if (!state.info) {
        await getApp();
      }
    });

    useHead({
      title: "Home Page",
      meta: [
        {
          name: "description",
          content: "Home Page Description",
        },
      ],
    });

    return {
      state,
    };
  },
});
</script>
