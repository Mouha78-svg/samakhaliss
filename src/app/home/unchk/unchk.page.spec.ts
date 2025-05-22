import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnchkPage } from './unchk.page';

describe('UnchkPage', () => {
  let component: UnchkPage;
  let fixture: ComponentFixture<UnchkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnchkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
