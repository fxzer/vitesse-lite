import { expect, it } from 'vitest'

it.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add_array(%i, %i) -> %i', (a, b, expected) => {
  expect(a + b).toBe(expected)
})

// 它将返回如下内容
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3

it.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('add_object($a $b) -> $expected', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

it.each`
  a             | b      | expected
  ${{ val: 1 }} | ${'b'} | ${'1b'}
  ${{ val: 2 }} | ${'b'} | ${'2b'}
  ${{ val: 3 }} | ${'b'} | ${'3b'}
`('add_template($a.val, $b) -> $expected', ({ a, b, expected }) => {
  expect(a.val + b).toBe(expected)
})

// this will return
// ✓ add(1, b) -> 1b
// ✓ add(2, b) -> 2b
// ✓ add(3, b) -> 3b
// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3
