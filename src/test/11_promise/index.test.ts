import { describe, expect, it } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { View } from '.'

describe('测试嵌套 Promise', () => {
  it('直接执行', async () => {
    const view = new View()
    view.render()
    expect(view.count).toBe(3) // 1
  })
  it('等待一次', async () => {
    const view = new View()
    await view.render()
    expect(view.count).toBe(3) // 2
  })

  it('执行完全部 Promise', async () => {
    const view = new View()
    view.render()
    await flushPromises()
    expect(view.count).toBe(3) // 3
  })
})
