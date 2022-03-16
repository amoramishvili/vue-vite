<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    about
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
