import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendusermoneyPage } from './sendusermoney.page';

describe('SendusermoneyPage', () => {
  let component: SendusermoneyPage;
  let fixture: ComponentFixture<SendusermoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendusermoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
