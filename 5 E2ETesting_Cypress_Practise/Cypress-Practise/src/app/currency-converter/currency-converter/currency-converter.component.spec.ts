import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from './currency-converter.component';
import { provideHttpClient } from '@angular/common/http';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CurrencyConverterComponent, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should convert currencies correctly', () => {
    component.amount = 100;
    component.fromCurrency = 'USD';
    component.toCurrency = 'EUR';
    component.exchangeRates = { USD: 1, EUR: 0.85 };
    component.convert();
    expect(component.convertedAmount).toBeCloseTo(85, 2);
  });

  it('should return null if amount is zero', () => {
    component.amount = 0;
    component.convert();
    expect(component.convertedAmount).toBeNull();
  });
});
