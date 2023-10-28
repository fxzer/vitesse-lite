import { describe, expect, it, vi } from 'vitest'

describe('测试环境变量', () => {
  it('process', () => {
    // 直接修改
    process.env.NODE_ENV = 'development'
    expect(process.env.NODE_ENV).toBe('development')

    // stubEnv
    vi.stubEnv('USER_NAME', '张三')
    expect(process.env.USER_NAME).toBe('张三')
    console.log('[ process.env.USER_NAME ]-13', process.env.USER_NAME) // 张三
    vi.unstubAllEnvs()
    console.log('[ process.env.USER_NAME ]-15', process.env.USER_NAME) // undefined
  })
})
