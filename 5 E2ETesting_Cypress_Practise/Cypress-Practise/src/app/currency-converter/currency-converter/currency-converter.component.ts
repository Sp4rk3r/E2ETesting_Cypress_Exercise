import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  exchangeRates: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3004/exchangeRates')
      .subscribe((data: any) => {
        this.exchangeRates = data;
      });
  }

  convert() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      const rateFrom = this.exchangeRates[this.fromCurrency];
      const rateTo = this.exchangeRates[this.toCurrency];
      this.convertedAmount = (this.amount / rateFrom) * rateTo;
    }
  }

  getCurrencyKeys() {
    return Object.keys(this.exchangeRates);
  }
}
