import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDetailPage } from './home-detail.page';

describe('HomeDetailPage', () => {
  let component: HomeDetailPage;
  let fixture: ComponentFixture<HomeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
