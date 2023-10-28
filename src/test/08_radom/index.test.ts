import { describe, expect, it, vi } from 'vitest'
import { generateRandomNumber } from './index'

describe('随机', () => {
  it('随机数范围测试', () => {
    const number = generateRandomNumber()
    expect(number).toBeLessThan(1)
    expect(number).toBeLessThanOrEqual(1)
    expect(number).toBeGreaterThanOrEqual(0)
  })
  it('随机数固定测试', () => {
    // vi.spyOn(Math, "random").mockImplementation(() => 0.5);
    // vi.spyOn(Math, "random").mockReturnValue(0.5);
    vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.1)
    vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.5)
    const number = generateRandomNumber()
    expect(number).toBe(0.5)
  })
})
