import { Routes } from '@angular/router';
import { TodoComponent } from './todos/components/todo/todo.component';
import { BmiComponent } from './bmi/bmi/bmi.component';
import { TodosComponent } from './todos/todos/todos.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter/currency-converter.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'bmi',
    component: BmiComponent,
  },
  {
    path: 'currency',
    component: CurrencyConverterComponent,
  },
];
