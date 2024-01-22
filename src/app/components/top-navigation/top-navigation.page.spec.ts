import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavigationPage } from './top-navigation.page';

describe('TopNavigationPage', () => {
  let component: TopNavigationPage;
  let fixture: ComponentFixture<TopNavigationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
