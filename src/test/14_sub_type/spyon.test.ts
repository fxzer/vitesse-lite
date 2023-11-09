import { expect, it, vi } from 'vitest'
import { cart } from './spyon'

it('测试间谍', () => {
  const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => 13)

  cart.getApples()
  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveReturnedWith(13)
})
