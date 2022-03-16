<template>
  <div>
    <router-link to="about">about</router-link>
    home {{ id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTest } from "../store/test";

export default defineComponent({
  setup() {
    const { id } = useTest();
    return {
      id,
    };
  },
});
</script>
