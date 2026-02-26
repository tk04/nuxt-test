<script setup lang="ts">
const { data } = await useFetch('/api/test-env')
</script>

<template>
  <main
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
    "
  >
    <div style="text-align: center">
      <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem">
        process.env.TEST
      </h1>
      <p
        style="
          font-size: 1.125rem;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 0.5rem;
          font-family: monospace;
        "
      >
        {{ data?.value || '(not set)' }}
      </p>
    </div>
  </main>
</template>
