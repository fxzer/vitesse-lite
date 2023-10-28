import { beforeEach, describe, expect, it } from 'vitest'
import { getCount, increment, reset } from './count'

describe('状态验证', () => {
  beforeEach(() => {
    reset()
  })
  it('increment_1', () => {
    increment()
    expect(getCount()).toBe(1)
  })
  it('increment_2', () => {
    increment()
    expect(getCount()).toBe(1)
  })
})
