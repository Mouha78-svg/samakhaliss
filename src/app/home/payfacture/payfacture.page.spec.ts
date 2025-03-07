import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayfacturePage } from './payfacture.page';

describe('PayfacturePage', () => {
  let component: PayfacturePage;
  let fixture: ComponentFixture<PayfacturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
