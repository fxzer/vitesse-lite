import { sum,sub } from "./sum";
import { it ,expect } from "vitest";

it('1 + 1 = 2', () => {
  expect(sum(1,1)).toBe(2)
})

it('6-4 = 2', () => {
  expect(sub(6,4)).toBe(2)
})
