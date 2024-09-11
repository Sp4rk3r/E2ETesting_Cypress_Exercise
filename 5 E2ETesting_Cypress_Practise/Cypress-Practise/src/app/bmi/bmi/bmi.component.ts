import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BmiCalculatorComponent } from '../components/bmi-calculator/bmi-calculator.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    BmiCalculatorComponent,
    UserListComponent,
  ],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.scss',
})
export class BmiComponent {}
