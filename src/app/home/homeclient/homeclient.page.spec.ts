import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeclientPage } from './homeclient.page';

describe('HomeclientPage', () => {
  let component: HomeclientPage;
  let fixture: ComponentFixture<HomeclientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
