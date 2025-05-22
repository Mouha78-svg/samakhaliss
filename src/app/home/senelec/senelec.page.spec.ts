import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SenelecPage } from './senelec.page';

describe('SenelecPage', () => {
  let component: SenelecPage;
  let fixture: ComponentFixture<SenelecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SenelecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
