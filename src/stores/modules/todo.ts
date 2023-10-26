import { defineStore } from 'pinia'  

interface Todo {
  id: number;
  name: string;
  done: boolean;
}
export const useTodoStore = defineStore('todo',()=>{
  const todos = ref<Todo[]>([]);
  const addTodo = (name:string) => {
    const todo:Todo = {
      id: todos.value.length + 1,
      name,
      done: false
    }
    todos.value.push(todo);
  }
  const removeTodo = (id:number) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }
  return { todos, addTodo, removeTodo}
})
