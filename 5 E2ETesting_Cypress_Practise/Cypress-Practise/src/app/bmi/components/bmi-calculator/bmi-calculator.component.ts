import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrl: './bmi-calculator.component.scss',
})
export class BmiCalculatorComponent {
  height: number = 0;
  weight: number = 0;
  bmi: number | null = null;
  result: string = '';

  calculateBmi() {
    if (this.height > 0 && this.weight > 0) {
      this.bmi = this.weight / (this.height / 100) ** 2;
      this.result = this.getBmiCategory(this.bmi);
    }
  }

  getBmiCategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obesity';
  }
}
