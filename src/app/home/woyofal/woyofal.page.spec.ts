import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WoyofalPage } from './woyofal.page';

describe('WoyofalPage', () => {
  let component: WoyofalPage;
  let fixture: ComponentFixture<WoyofalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WoyofalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
