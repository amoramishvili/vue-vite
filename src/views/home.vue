<template>
  <div>
    <router-link to="about">about</router-link>
    home
    <div>Message From: {{ appStore.dataFrom }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onServerPrefetch } from "vue";
import { useHead } from "@vueuse/head";
import { useAppStore } from "../store/appStore";

export default defineComponent({
  setup() {
    const appStore = useAppStore();

    onServerPrefetch(() => {
      appStore.dataFrom = "server";
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
      appStore,
    };
  },
});
</script>
