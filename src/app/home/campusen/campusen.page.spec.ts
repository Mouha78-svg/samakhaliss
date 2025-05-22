import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampusenPage } from './campusen.page';

describe('CampusenPage', () => {
  let component: CampusenPage;
  let fixture: ComponentFixture<CampusenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
