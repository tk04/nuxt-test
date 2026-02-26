export default defineEventHandler(() => {
  const testValue = process.env.TEST
  console.log('[v0] process.env.TEST =', testValue)
  return { TEST: testValue ?? null }
})
