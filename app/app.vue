<template>
  <div>
    <NuxtRouteAnnouncer />
    <p>process.env.TEST = {{ data?.TEST ?? 'undefined' }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/test-env')
</script>
