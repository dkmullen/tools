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

  markDone({ target }) {
    const index = parseInt(target.name);
    this.done.unshift(this.todo[index]);
    this.todo.splice(index, 1);
  }

  markNotDone({ target }) {
    const index = parseInt(target.name);
    this.todo.unshift(this.done[index]);
    this.done.splice(index, 1);
  }

}
