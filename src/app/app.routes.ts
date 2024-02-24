import { Routes } from '@angular/router';
import { TodosComponent } from './componemts/todos/todos.component';
import { PageNotFoundComponent } from './componemts/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: '**', component: PageNotFoundComponent },
];
