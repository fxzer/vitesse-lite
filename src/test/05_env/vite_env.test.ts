import { expect, it } from 'vitest'

it.skip('DEFAULT', () => {
  expect(import.meta.env.VITE_USER_AGE).toBeDefined() // ✅
  expect(import.meta.env.VITE_USER_AGE).toBe('19') // ❌
})

// .env.test
it.skip('TEST', () => {
  expect(import.meta.env.VITE_TEST_USER_AGE).toBe('10') // ✅
})

// .evn.dev ???
it('DEV', () => {
  expect(import.meta.env.VITE_DEV_USER_AGE).toBe('22') // ✅
})
