import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bmi', loadChildren: () => import ('./tools/bmi/bmi.module').then((m) => m.BmiModule)},
  { path: 'todo', loadChildren: () => import ('./tools/todo/todo.module').then((m) => m.TodoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
