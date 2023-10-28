/* 哑元对象 */
import { describe, expect, it } from 'vitest'
import { buy } from './dummy'

it('哑元对象---占位符', () => {
  const dummyObj = {}
  buy({ name: '哑元对象' }, dummyObj)
})
