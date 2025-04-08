import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';

import { TodoService } from '../core/todo.core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CheckboxModule, CardModule, ProgressBarModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  todoService = inject(TodoService);
  newTodoTitle = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }
}
