import { describe, expect, it } from 'vitest'

describe('导入 Vue 组件测试', () => {
  it('normal imports as expected', async () => {
    const cmp = await import('@/components/Hello.vue')
    expect(cmp).toBeDefined()
  })

  it('template string imports as expected', async () => {
    const cmp = await import('@/components/Hello.vue')
    expect(cmp).toBeDefined()
  })

  it('dynamic imports as expected', async () => {
    const name = 'Hello'
    const cmp = await import(`@/components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
