import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todoForm: any;
  todo = ['peaches', 'pears', 'apples'];
  done = [];

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      newItem: '',
    });
   }

  add({ newItem }) {
    if (newItem) {
      this.todo.unshift(newItem);
      this.todoForm.reset();
    }
  }

  markDone(index: number) {
    this.done.unshift(this.todo[index]);
    this.todo.splice(index, 1);
  }

  markNotDone(index: number) {
    this.todo.unshift(this.done[index]);
    this.done.splice(index, 1);
  }

  delete(index: number, list: string) {
    if (list === 'todo') {
      this.todo.splice(index, 1);
    } else {
      this.done.splice(index, 1);
    }
  }

}
