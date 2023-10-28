import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from '@/stores'

describe('TodoStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  // it('should add todo', () => {
  //   const todoStore = useTodoStore()
  //   const { todos, addTodo } = todoStore
  //   const name = '玩游戏'
  //   addTodo(name)
  //   expect(todos[0].name).toBe(name)
  // })
  it('should remove todo', () => {
    const todoStore = useTodoStore()
    const { todos } = storeToRefs(todoStore)
    const { addTodo, removeTodo } = todoStore
    addTodo('玩游戏')
    addTodo('吃饭')
    expect(todos.value[0].name).toBe('玩游戏')
    expect(todos.value[1].name).toBe('吃饭')
    removeTodo(1)
    // removeTodo(2)
    expect(todos.value.length).toBe(1)
  })
})
