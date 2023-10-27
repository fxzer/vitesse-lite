import { it, expect, describe, beforeEach } from 'vitest'
import { increment,reset,getCount } from './count'

describe('状态验证',() => {
  beforeEach(() => {
    reset()
  })
  it('increment_1',() =>{
    increment()
    expect(getCount()).toBe(1)
  })
  it('increment_2',() =>{
    increment()
    expect(getCount()).toBe(1)
  })
})
