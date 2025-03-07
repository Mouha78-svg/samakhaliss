import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaycreditPage } from './paycredit.page';

describe('PaycreditPage', () => {
  let component: PaycreditPage;
  let fixture: ComponentFixture<PaycreditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
