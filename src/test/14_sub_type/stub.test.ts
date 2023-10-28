/* 测试桩 */
import { expect, it, vi } from 'vitest'
import { getName } from './stub'

vi.mock('./stub.data.ts', () => {
  return {
    getFirstName: () => 'stub1',
  }
  // const actual = await vi.importActual('./stub.ts')
  // return {
  //   ...actual,
  //   // your mocked methods
  // }
})
it('测试桩', () => {
  expect(getName('测试桩')).toBe('stub1 测试桩')
})
