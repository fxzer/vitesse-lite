import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { delay, executeAfterTwoHours, executeEveryMinute, sayHi } from './timer.ts'

const mock = vi.fn(() => console.log('executed'))

describe('delayed execution', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should execute the function', () => {
    executeAfterTwoHours(mock)
    vi.runAllTimers() // 跑完定时器
    expect(mock).toHaveBeenCalledTimes(1)
  })
  it('should not execute the function', () => {
    executeAfterTwoHours(mock)
    // advancing by 2ms won't trigger the func
    vi.advanceTimersByTime(2)
    expect(mock).not.toHaveBeenCalled()
  })
  it('should execute every minute', () => {
    executeEveryMinute(mock)
    vi.advanceTimersToNextTimer() // 调用一次
    expect(mock).toHaveBeenCalledTimes(1)
    vi.advanceTimersToNextTimer()
    expect(mock).toHaveBeenCalledTimes(2)
  })
  it('should say hi', () => {
    vi.spyOn(console, 'log')
    sayHi()
    vi.advanceTimersByTime(300)
    // vi.advanceTimersToNextTimer() //
    expect(console.log).toBeCalled()
    // expect(console.log).toBeCalledWith('hi') //用于测试函数是否已被调用
    // expect(console.log).toHaveBeenCalledWith('hi') //检查函数是否至少被调用一次
  })
  it('Promise 嵌套定时器', () => {
    vi.useFakeTimers()
    // const result = await delay(1000)
    // vi.advanceTimersToNextTimer()
    const result = delay(100) // 必须要先执行触发定时器，才能触发模拟时间进行快进
    vi.advanceTimersToNextTimer()
    expect(result).resolves.toBe('ok')
  })
})
