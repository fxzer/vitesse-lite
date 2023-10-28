import { expect, it } from 'vitest'
import { toUpperCase } from '.'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')

  // expect(result).toMatchSnapshot()
  // 行内快照
  // expect(result).toMatchInlineSnapshot('"FOOBAR"')

  // 文件快照

  expect(result).toMatchFileSnapshot('1.tet')
})
