import { describe, expect, it } from 'vitest'
import { groupBy } from './index'

describe('按 xxx 分组', () => {
  it('按属性分组', () => {
    const result = groupBy([{ name: 'a', value: 1 }, { name: 'b', value: 2 }], 'name')
    expect(result).toEqual({ a: [{ name: 'a', value: 1 }], b: [{ name: 'b', value: 2 }] })
  })

  it('把数字数组按偶数分组', () => {
    const result = groupBy([1, 2, 3, 4, 5, 6], (item: any) => item % 2 === 0 ? '偶数' : '奇数')
    expect(result).toEqual({ 偶数: [2, 4, 6], 奇数: [1, 3, 5] })
  })
  it('按深层次属性分组', () => {
    const result = groupBy([
      { name: 'a', value: { type: 'aaa' } },
      { name: 'b', value: { type: 'bbb' } },
      { name: 'c', value: { type: 'bbb' } }], (item: any) => item.value.type)
    expect(result).toEqual({ aaa: [{ name: 'a', value: { type: 'aaa' } }], bbb: [{ name: 'b', value: { type: 'bbb' } }, { name: 'c', value: { type: 'bbb' } }] })
  })

  it('按联合属性分组', () => {
    const result = groupBy([
      { name: 'ac', value: { type: 'commonjs' } },
      { name: 'b', value: { type: 'esmodule' } },
      { name: 'bb', value: { type: 'esmodule' } },
      { name: 'bc', value: { type: 'esmodule' } },
      { name: 'a', value: { type: 'esmodule', x: '123' } },
      { name: 'ac', value: { type: 'commonjs', x: '123' } },
    ], (item: any) => `${item.value.type} + ${item.name}`)
    expect(result).toEqual({
      'commonjs + ac': [{ name: 'ac', value: { type: 'commonjs' } }, { name: 'ac', value: { type: 'commonjs', x: '123' } }],
      'esmodule + b': [{ name: 'b', value: { type: 'esmodule' } }],
      'esmodule + bb': [{ name: 'bb', value: { type: 'esmodule' } }],
      'esmodule + bc': [{ name: 'bc', value: { type: 'esmodule' } }],
      'esmodule + a': [{ name: 'a', value: { type: 'esmodule', x: '123' } }],
    })
  })
})
