<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    about

    <v-icon name="dislike" />
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
