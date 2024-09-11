import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiComponent } from './bmi.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [BmiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
