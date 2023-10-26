<script setup lang="ts">
import { useTodoStore } from '@/stores'
const todoStore = useTodoStore()
const name = ref('')
const { todos } = storeToRefs(todoStore)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <input v-model="name" /> <button @click="todoStore.addTodo(name)">Add</button>
    <div v-for="todo in todos" :key="todo.id" class="todo">{{ todo.name }}</div>
  </div>
</template>

<style scoped>
.todo{
  color: red;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
