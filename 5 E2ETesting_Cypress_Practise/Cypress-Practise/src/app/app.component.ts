import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { TodosComponent } from './todos/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, RouterModule],
  providers: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'UnitTesting_Demo';
}
