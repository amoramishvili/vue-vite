<template>
  <div>
    <router-link to="about">about</router-link>
    home
    <div>Message From: {{ setInfo }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onServerPrefetch } from "vue";
import { useHead } from "@vueuse/head";
import { useAppStore } from "../store/appStore";

export default defineComponent({
  setup() {
    const { getInfo, setInfo } = useAppStore();

    onServerPrefetch(async () => {
      await getInfo();
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
      setInfo,
    };
  },
});
</script>
