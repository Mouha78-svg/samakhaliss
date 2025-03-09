import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangepwPage } from './changepw.page';

describe('ChangepwPage', () => {
  let component: ChangepwPage;
  let fixture: ComponentFixture<ChangepwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
