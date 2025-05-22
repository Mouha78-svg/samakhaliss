import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeneauPage } from './seneau.page';

describe('SeneauPage', () => {
  let component: SeneauPage;
  let fixture: ComponentFixture<SeneauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeneauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
