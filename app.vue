<script lang="ts" setup>
const { data: page } = await useAsyncData("/", () => {
  return queryCollection("content").path("/").first();
});

const colorMode = useColorMode();
</script>

<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
