import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BmiCalculatorComponent } from './bmi-calculator.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BmiCalculatorComponent', () => {
  let component: BmiCalculatorComponent;
  let fixture: ComponentFixture<BmiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [FormsModule, BmiCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creates a component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate BMI correctly', () => {
    component.height = 180;
    component.weight = 75;
    component.calculateBmi();
    expect(component.bmi).toBeCloseTo(23.15, 2);
    expect(component.result).toBe('Normal weight');
  });

  it('should return the correct BMI category', () => {
    expect(component.getBmiCategory(16)).toBe('Underweight');
    expect(component.getBmiCategory(22)).toBe('Normal weight');
    expect(component.getBmiCategory(28)).toBe('Overweight');
    expect(component.getBmiCategory(32)).toBe('Obesity');
  });
});
