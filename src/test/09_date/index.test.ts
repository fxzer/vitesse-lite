import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { checkIsWeekend, purchase } from '.'

describe('时间测试', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('测试是否为周末', () => {
    const date = new Date()
    expect(checkIsWeekend(date)).toBe(false)

    vi.spyOn(Date.prototype, 'getDay').mockReturnValue(6)
    expect(checkIsWeekend(date)).toBe(true)
  })

  it('模拟时间', () => {
    vi.setSystemTime(new Date('2020-01-01'))
    expect(new Date().getFullYear()).toBe(2020)
  })
})

describe('下单时间范围', () => {
  beforeEach(() => {
    // 告诉 vitest 我们使用模拟时间
    vi.useFakeTimers()
  })

  afterEach(() => {
    // 每次测试运行后恢复日期
    vi.useRealTimers()
  })

  it('在工作时间允许购买', () => {
    // 将时间设置在工作时间之内
    const date = new Date(2000, 1, 1, 13)
    vi.setSystemTime(date)

    // 访问 Date.now() 将生成上面设置的日期
    expect(purchase()).toEqual({ message: 'Success' })
  })

  it('在工作时间外不许构面', () => {
    // 将时间设置在工作时间之外
    const date = new Date(2000, 1, 1, 19)
    vi.setSystemTime(date)

    // 访问 Date.now() 将生成上面设置的日期
    expect(purchase()).toEqual({ message: 'Error' })
  })
})
