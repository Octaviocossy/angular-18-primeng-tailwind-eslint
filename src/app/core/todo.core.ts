import { Injectable, computed, signal } from '@angular/core';

import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);

  // Computed signals
  readonly completedTodos = computed(() => this.todos().filter((todo) => todo.completed));
  readonly pendingTodos = computed(() => this.todos().filter((todo) => !todo.completed));

  // Actions
  addTodo(title: string) {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
    };

    this.todos.update((todos) => [...todos, newTodo]);
  }

  toggleTodo(id: number) {
    this.todos.update((todos) => todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }

  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  // Getters
  getTodos() {
    return this.todos;
  }
}
