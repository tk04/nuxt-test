export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return { value: config.testEnv }
})
